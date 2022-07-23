import { rest } from "msw";

export const handlers = [
  rest.get("https://lookmovie2.to/api/v1/movies/do-search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        per_page: 20,
        total: 2,
        result: [
          {
            imdb_rating: "4.9",
            slug: "0118747-blues-brothers-2000-1998",
            year: "1998",
            flag_quality: "7",
            release_date: "1998-02-05 00:00:00",
            title: "Blues Brothers 2000",
            backdrop: "https://cloudcdn.monster/images/b/w342/a4cc0344bd9e6537ac86ab973f0f0d4a.jpg",
            poster: "https://cloudcdn.monster/images/p/w200/cede258cdfb21878a2dd8255503b6243.jpg",
          },
          {
            imdb_rating: "7.9",
            slug: "the-blues-brothers-1980",
            year: "1980",
            flag_quality: "8",
            release_date: "1980-06-17 00:00:00",
            title: "The Blues Brothers",
            backdrop: "https://cloudcdn.monster/images/b/w342/964250975789de8b0b287f6d477199b8.jpg",
            poster: "https://cloudcdn.monster/images/p/w200/71555ec4021b999611a6759222bc0dcc.jpg",
          },
        ],
      })
    );
  }),
];
