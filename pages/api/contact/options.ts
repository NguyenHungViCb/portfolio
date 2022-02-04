import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import base64 from "base-64";
import utf8 from "utf8";

export default async function getContactOptions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const headers = {
      Authorization: `token ${process.env.GITHUB_PERSONAL_TOKEN}`,
    };
    const { data } = await axios.get(
      "https://api.github.com/repos/NguyenHungViCb/portfolio/contents/data/about/contact/index.json",
      {
        headers,
      }
    );
    const bytes = base64.decode(data.content);
    const text = utf8.decode(bytes);
    return res.status(200).json(text);
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).send("something went wrong");
  }
}
