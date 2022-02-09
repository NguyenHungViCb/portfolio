import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import {
  getAboutMeData,
  getContactOptions,
  getProjectList,
  getSkillList,
  getSkillToLearnList,
} from "../lib/about";
import Avatar from "../components/about/avatar";
import Details from "../components/about/details/details";
import SkillBox from "../components/skills/SkillBox";
import SkillList from "../components/skills/SkillList";
import { Project } from "../components/project/project";

const Home: NextPage<any> = ({
  aboutMe,
  contactOptions,
  skills,
  skillsToLearn,
  projects,
}) => {
  return (
    <div className="min-w-[320px]">
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <main className={`border-red-900 border-2`}>
        <Layout className="flex flex-col gap-5">
          <section
            id="about"
            className={`flex flex-col items-center border-blue-900 border-2 gap-5 h-screen sm:min-h-[89vh] tall:h-[80vh] max-h-[645px]`}
          >
            <Avatar />
            <Details aboutMe={aboutMe} contactOptions={contactOptions} />
          </section>
          <section id="skill">
            <h1 className="mb-3 text-xl font-semibold">Skills</h1>
            <SkillList className="lg:grid-cols-6">
              {skills &&
                Array.isArray(skills) &&
                skills.map((skill: any) => (
                  <SkillBox skill={skill} key={skill.id} />
                ))}
            </SkillList>
          </section>
          <section id="skill-to-learn">
            <h1 className="mb-3 text-xl font-semibold">
              Skill and technology I plan to learn in 2022
            </h1>
            <SkillList>
              {skillsToLearn &&
                Array.isArray(skillsToLearn) &&
                skillsToLearn.map((skill: any) => (
                  <SkillBox skill={skill} key={"skill-to-learn" + skill.id} />
                ))}
            </SkillList>
          </section>
          <section id="projects" className="mb-3">
            <h1 className="mb-3 text-xl font-semibold">Projects</h1>
            {projects &&
              Array.isArray(projects) &&
              projects.map((project: any, index: number) => (
                <Project
                  key={project.id}
                  index={index}
                  project={project}
                />
              ))}
          </section>
        </Layout>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const aboutMe = await getAboutMeData();
  const contactOptions = await getContactOptions();
  const skills = await getSkillList();
  const skillsToLearn = await getSkillToLearnList();
  const projects = await getProjectList();
  return {
    props: {
      aboutMe: aboutMe.reverse(),
      contactOptions,
      skills,
      skillsToLearn,
      projects,
    },
  };
};
