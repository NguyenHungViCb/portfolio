import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import { getAboutMeData, getContactOptions } from "../lib/about";
import Avatar from "../components/about/avatar";
import Details from "../components/about/details/details";

const Home: NextPage<any> = ({ aboutMe, contactOptions }) => {
  return (
    <div className="min-w-[320px]">
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <main className={`border-red-900 border-2`}>
        <Layout>
          <section
            id="about"
            className={`flex flex-col items-center border-blue-900 border-2 gap-5 h-screen sm:min-h-[89vh] tall:h-[80vh] max-h-[645px]`}
          >
            <Avatar />
            <Details aboutMe={aboutMe} contactOptions={contactOptions} />
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
  return {
    props: {
      aboutMe,
      contactOptions,
    },
  };
};
