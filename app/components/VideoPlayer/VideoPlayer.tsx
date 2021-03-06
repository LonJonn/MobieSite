import { ActionIcon, createStyles, Group, Stack } from "@mantine/core";
import Hls from "hls.js";
import Plyr from "plyr";
import { useRef, useEffect } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    "--plyr-color-main": theme.colors[theme.primaryColor][5],
  },
  offsetButton: {
    width: "auto",
    paddingInline: theme.spacing.sm,
    fontSize: theme.fontSizes.xs,
  },
}));

export type VideoPlayerProps = {
  src?: string;
  subtitles?: string;
};

export function VideoPlayer({ src, subtitles }: VideoPlayerProps) {
  const { classes } = useStyles();

  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const player = new Plyr(videoRef.current!, {
      captions: { active: true, update: true, language: "en" },
    });

    return () => player.destroy();
  }, []);

  /** Load video + subs */
  useEffect(() => {
    if (!videoRef.current || !src) {
      return;
    }

    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(videoRef.current);

    if (subtitles) {
      videoRef.current.querySelector("track")!.src = subtitles;
    }

    return () => hls.destroy();
  }, [src, subtitles]);

  function offsetCue(amount: number) {
    const cues = videoRef.current!.textTracks[0].cues!;

    Array.from(cues).forEach((cue) => {
      cue.startTime += amount;
      cue.endTime += amount;
    });
  }

  return (
    <Stack className={classes.wrapper}>
      <video ref={videoRef} playsInline controls crossOrigin="anonymous">
        <track kind="captions" label="English captions" src="" srcLang="en" default />
      </video>

      {subtitles && (
        <Group position="center">
          <ActionIcon
            size={32}
            variant="default"
            onClick={() => offsetCue(-1)}
            className={classes.offsetButton}
          >
            –1s
          </ActionIcon>
          <ActionIcon
            size={32}
            variant="default"
            onClick={() => offsetCue(-0.1)}
            className={classes.offsetButton}
          >
            –0.1s
          </ActionIcon>
          <ActionIcon
            size={32}
            variant="default"
            onClick={() => offsetCue(0.1)}
            className={classes.offsetButton}
          >
            +0.1s
          </ActionIcon>
          <ActionIcon
            size={32}
            variant="default"
            onClick={() => offsetCue(1)}
            className={classes.offsetButton}
          >
            +1s
          </ActionIcon>
        </Group>
      )}
    </Stack>
  );
}
