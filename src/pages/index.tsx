import Head from 'next/head'
import React from 'react';
import Layout from '@/components/layout';
import Greetings from '@/components/greetings';
import Video from '@/components/video';
import Summary from '@/components/summary';
import SkillList from '@/components/skillList';
import Work from '@/components/work';
import Comment from '@/components/comment';
import Contact from '@/components/contact';
import SocialLinks from '@/components/socialLinks';

const IndexPage = () => {

  return (
    <>
      <Head>
        <title>Igor &lt;&gt; Stir</title>
      </Head>
      <Layout>
        <Greetings />
        <Video />
        <Summary />
        <SkillList />
        <Work />
        <Comment />
        <Contact />
        <SocialLinks />
      </Layout>
    </>
  );
};

export default IndexPage;
