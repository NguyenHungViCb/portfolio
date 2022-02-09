import fs from "fs";
import path from "path";
import axios from "axios";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export const extractMatter = async (text: string) => {
  const matterResult = matter(text);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return { contentHtml, matterResult };
};

export async function getAboutMeData() {
  const readLocalData = async () => {
    const aboutDir = path.join(process.cwd(), "data/about/me");
    const fileNames = fs.readdirSync(aboutDir);
    const result = await Promise.all(
      fileNames.reverse().map(async (fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(aboutDir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { contentHtml, matterResult } = await extractMatter(fileContents);
        return {
          id,
          contentHtml,
          ...matterResult.data,
        };
      })
    );
    return result;
  };
  const readDataFromApi = async () => {
    const { data } = await axios.get("http://localhost:3000/api/about");
    return data;
  };
  let result = await readDataFromApi();
  if (!result) {
    result = await readLocalData();
  }
  return result;
}

export async function getContactOptions() {
  const readDataFromApi = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/contact/options"
    );
    return data;
  };
  const readLocalData = () => {
    const contactDir = path.join(process.cwd(), "data/about/contact");
    const fileContents = JSON.parse(
      fs.readFileSync(path.join(contactDir, "index.json"), "utf8")
    );
    return fileContents;
  };
  const data = await readDataFromApi();
  if (!data) {
    return readLocalData();
  }
  return data;
}

export async function getSkillList() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/skills");
    return data;
  } catch (error) {
    return [];
  }
}

export async function getSkillToLearnList() {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/skills-to-learn"
    );
    return data;
  } catch (error) {
    return [];
  }
}

export async function getProjectList() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/projects");
    return data.sort(function (a: any, b: any) {
      // @ts-ignore
      return new Date(a.timestampt) - new Date(b.timestampt);
    });
  } catch (error) {
    return [];
  }
}
