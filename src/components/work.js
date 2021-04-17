import WorkCard from '@/components/workCard';
import React from 'react';
import styled from 'styled-components';

const workProjects = [
  {
    name: 'Odeon',
    shortDescription: 'Video Platform',
    linkHref: 'https://odeon.tv/',
    imageSrc: '/images/work/odeon.png',
  },
  {
    name: 'LBRY',
    shortDescription: 'Electron App',
    linkHref: 'https://github.com/lbryio/lbry-desktop/',
    imageSrc: '/images/work/lbry.png',
  },
  {
    name: 'Personal Website',
    shortDescription: 'Next.js Website',
    linkHref: 'https://github.com/IGassmann/personal-website',
    imageSrc: '/images/work/personal-website.png',
  },
  {
    name: 'Node.js API',
    shortDescription: 'API Architecture',
    linkHref: 'https://github.com/IGassmann/nodejs-api',
    imageSrc: '/images/work/nodejs-api.png',
  },
]

const WorkContainer = styled.div`
  padding: 150px 0 80px;
  text-align: center;
  
  > div {
    max-width: 950px;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin: 0 auto;

    h2 {
      font-size: 55px;
      line-height: 120%;
      letter-spacing: -0.02em;
      margin: 0;
      padding-top: 50px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 50px 0;
    }
  }
`

const Work = () => {
  return (
    <WorkContainer>
      <div>
        <h2>Projects I have worked on.</h2>
        <ul>
          {workProjects.map(project => <WorkCard {...project} />)}
        </ul>
      </div>
    </WorkContainer>
  );
};

export default Work;