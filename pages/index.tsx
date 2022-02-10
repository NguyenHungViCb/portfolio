import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import {
  getAboutMeData,
  getContactOptions,
  getProjectList,
  getSkillList,
  getSkillToLearnList,
} from "../lib/about";
import Avatar from "../components/about/v1/avatar";
import SkillBox from "../components/skills/SkillBox";
import SkillList from "../components/skills/SkillList";
import { Project } from "../components/project/project";
import About from "../components/about/v2/about";
import Contact from "../components/about/v1/contacts";

const Home: NextPage<any> = ({
  aboutMe,
  skills,
  skillsToLearn,
  projects,
  contactOptions,
}) => {
  return (
    <div className="min-w-[320px] bg-gray-100 overflow-x-hidden">
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <main>
        <Layout className="flex flex-col gap-10">
          <section
            id="about"
            className={`flex flex-col items-center gap-5 h-[45rem]`}
          >
            <Avatar />
            {aboutMe && <About aboutMe={aboutMe} />}
          </section>
          <section id="skills" className="flex flex-col items-center">
            <h1 className="mb-5 text-2xl font-semibold">Skills</h1>
            <SkillList className="w-full lg:grid-cols-6">
              {skills &&
                Array.isArray(skills) &&
                skills.map((skill: any) => (
                  <SkillBox skill={skill} key={skill.id} />
                ))}
            </SkillList>
          </section>
          <section id="skill-to-learn" className="flex flex-col items-center">
            <h1 className=" mb-5 text-2xl font-semibold">
              Skill and technology I plan to learn in 2022
            </h1>
            <SkillList className="w-full">
              {skillsToLearn &&
                Array.isArray(skillsToLearn) &&
                skillsToLearn.map((skill: any) => (
                  <SkillBox skill={skill} key={"skill-to-learn" + skill.id} />
                ))}
            </SkillList>
          </section>
          <section id="projects" className="flex flex-col items-center">
            <h1 className="mb-5 text-2xl font-semibold">Projects</h1>
            <div>
              {projects &&
                Array.isArray(projects) &&
                projects.map((project: any, index: number) => (
                  <Project key={project.id} index={index} project={project} />
                ))}
            </div>
            <div className="w-full text-center">
              <h1 className="text-xl font-semibold">
                More at my{" "}
                <span className="text-cyan-600 underline underline-offset-8">
                  <Link href={"https://github.com/NguyenHungViCb"}>
                    <a>github</a>
                  </Link>
                </span>
              </h1>
            </div>
          </section>
          <section id="contact" className="mb-10 flex flex-col items-center">
            <h1 className="mb-5 text-2xl font-semibold">Contact</h1>
            {contactOptions && <Contact contactOptions={contactOptions} /> }
          </section>
        </Layout>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const aboutMe = await getAboutMeData();
  const contactOptions = await getContactOptions();
  const skills = await getSkillList();
  const skillsToLearn = await getSkillToLearnList();
  const projects = await getProjectList();
  return {
    props: {
      aboutMe: aboutMe,
      contactOptions: contactOptions,
      skills: skills,
      skillsToLearn: skillsToLearn,
      projects: projects,
    },
  };
};
