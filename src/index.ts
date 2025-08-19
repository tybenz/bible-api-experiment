import fetch from "node-fetch";

async function test(): Promise<void> {
  const API_KEY = process.env.API_KEY as string;
  const versionNum = "9879dbb7cfe39e4d-04";
  const bookId = "ROM";
  const chapterNum = 9;
  const chapterId = `${bookId}.${chapterNum}`;
  const res = await fetch(
    `https://api.scripture.api.bible/v1/bibles/${versionNum}/chapters/${chapterId}`,
    {
      headers: { "api-key": API_KEY },
    },
  );
  console.log(await res.json());
}

test();
