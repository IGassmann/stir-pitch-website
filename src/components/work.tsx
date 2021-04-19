import WorkCard from '@/components/workCard';
import React from 'react';
import styled from 'styled-components';

export interface ProjectInterface {
  /** The name of the project to be displayed. */
  name: string;

  /** A short description to be displayed next to the name. */
  shortDescription: string;

  /** The project's URL */
  linkHref: string;

  /** The relative path to the project's thumbnail. */
  imageSrc: string;
}

const workProjects: ProjectInterface[] = [
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
      justify-content: center;
      padding: 50px 0;
      margin: 0;
    }
  }

  @media screen and (max-width: ${props => props.theme.sizes.medium}) {

    > div h2  {
      font-size: 38px;
      margin-block-start: -15px;
      letter-spacing: -0.03em;
      margin: 0;
    }
  }
`

const Work: React.FC = () => (
  <WorkContainer>
    <div>
      <h2>Projects I have worked on.</h2>
      <ul>
        {workProjects.map((project, index) => (
          <WorkCard {...project} delayMultiplier={index} key={project.name}/>
        ))}
      </ul>
    </div>
  </WorkContainer>
);

export default Work;