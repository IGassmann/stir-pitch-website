import React from 'react';
import Layout from '@/components/layout';
import Greetings from '@/components/greetings';
import Video from '@/components/Video';
import Summary from '@/components/summary';
import SkillList from '@/components/skillList';
import Work from '@/components/work';
import Comment from '@/components/Comment';
import Links from '@/components/Links';

const IndexPage = () => {

  return (
    <>
      <Layout>
        <Greetings />
        <Video />
        <Summary />
        <SkillList />
        <Work />
        <Comment />
        <Links />
      </Layout>
    </>
  );
};

export default IndexPage;
