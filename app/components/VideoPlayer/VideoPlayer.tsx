import { useMantineTheme } from "@mantine/core";
import Hls from "hls.js";
import Plyr from "plyr";
import { useRef, useEffect } from "react";

export type VideoPlayerProps = {
  src: string;
  subtitles?: string;
};

export function VideoPlayer({ src, subtitles }: VideoPlayerProps) {
  const theme = useMantineTheme();

  /** Setup video */
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    new Plyr(videoRef.current, {
      captions: { active: true, update: true, language: "en" },
    });

    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(videoRef.current);

    if (subtitles) {
      videoRef.current.querySelector("track")!.src = subtitles;
    }
  }, [src, subtitles]);

  return (
    <video
      ref={videoRef}
      playsInline
      controls
      crossOrigin="anonymous"
      style={{
        "--plyr-color-main": theme.colors[theme.primaryColor][5],
      }}
    >
      <track kind="captions" label="English captions" src="" srcLang="en" default />
    </video>
  );
}
