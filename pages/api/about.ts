import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import base64 from "base-64";
import utf8 from "utf8";
import { extractMatter } from "../../lib/about";

export default async function getAboutMeContent(
  _: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const headers = {
      Authorization: `token ${process.env.GITHUB_PERSONAL_TOKEN}`,
    };
    const { data } = await axios.get(
      "https://api.github.com/repos/NguyenHungViCb/portfolio/contents/data/about/me",
      {
        headers,
      }
    );
    const decodedData = [];
    for (let index = 0; index < data.length; index++) {
      const content = data[index];
      const { data: raw } = await axios.get(content.url, { headers });
      const id = raw.name.replace(/\.md$/, "");
      const bytes = base64.decode(raw.content);
      const text = utf8.decode(bytes);
      const { contentHtml, matterResult } = await extractMatter(text);
      decodedData.push({
        id,
        contentHtml,
        ...matterResult.data,
      });
    }
    res.status(200).send(decodedData);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Something went wrong");
  }
}
