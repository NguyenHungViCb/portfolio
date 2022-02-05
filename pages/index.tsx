import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import {
  getAboutMeData,
  getContactOptions,
  getSkillList,
  getSkillToLearnList,
} from "../lib/about";
import Avatar from "../components/about/avatar";
import Details from "../components/about/details/details";

const Home: NextPage<any> = ({
  aboutMe,
  contactOptions,
  skills,
  skillsToLearn,
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
            <ul className="skill-list grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:auto-cols-max gap-2 lg:gap-4">
              {skills &&
                Array.isArray(skills) &&
                skills.map((skill: any) => (
                  <li
                    className="inline-flex items-center gap-3 border border-black rounded-lg py-1 px-2"
                    key={skill.id}
                  >
                    <Image src={skill.icon} width={32} height={32} />
                    <span>
                      {(skill.name[0] as string).toUpperCase() +
                        skill.name.slice(1)}
                    </span>
                  </li>
                ))}
            </ul>
          </section>
          <section id="skill-to-learn">
            <h1 className="mb-3 text-xl font-semibold">
              Skill and technology I plan to learn in 2022
            </h1>
            <ul className="skill-list grid grid-cols-3 md:grid-cols-5 xl:auto-cols-max gap-2 lg:gap-4">
              {skillsToLearn &&
                Array.isArray(skillsToLearn) &&
                skillsToLearn.map((skill: any) => (
                  <li
                    className="inline-flex items-center gap-3 border border-black rounded-lg py-1 px-2"
                    key={skill.id}
                  >
                    <Image src={skill.icon} width={32} height={32} />
                    <span>
                      {(skill.name[0] as string).toUpperCase() +
                        skill.name.slice(1)}
                    </span>
                  </li>
                ))}
            </ul>
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
  return {
    props: {
      aboutMe,
      contactOptions,
      skills,
      skillsToLearn,
    },
  };
};
