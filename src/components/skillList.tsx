import SkillsCategory from '@/components/skillsCategory';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Rellax from 'rellax';

export interface SkillInterface {
  /** Relative path to the skill's icon. */
  iconPath: string;

  /** The name of the skill. */
  name: string;

  /** The website's url of the skill. */
  url: string;
}

const skills: {
  infrastructure: SkillInterface[];
  product: SkillInterface[];
} = {
  product: [
    {
      name: 'TypeScript',
      iconPath: '/images/skills/typescript.png',
      url: 'https://www.typescriptlang.org/',
    },
    {
      name: 'React',
      iconPath: '/images/skills/react.png',
      url: 'https://reactjs.org/',
    },
    {
      name: 'Next.js',
      iconPath: '/images/skills/nextjs.png',
      url: 'https://nextjs.org/',
    },
    {
      name: 'Node.js',
      iconPath: '/images/skills/nodejs.png',
      url: 'https://nodejs.org/',
    },
    {
      name: 'NestJS',
      iconPath: '/images/skills/nestjs.png',
      url: 'https://nestjs.com/',
    },
    {
      name: 'MongoDB',
      iconPath: '/images/skills/mongodb.png',
      url: 'https://www.mongodb.com/',
    },
    {
      name: 'PostgreSQL',
      iconPath: '/images/skills/postgresql.png',
      url: 'https://www.postgresql.org/',
    },
  ],
  infrastructure: [
    {
      name: 'GCP',
      iconPath: '/images/skills/gcp.png',
      url: 'https://cloud.google.com/gcp',
    },
    {
      name: 'AWS',
      iconPath: '/images/skills/aws.png',
      url: 'https://aws.amazon.com/',
    },
    {
      name: 'Terraform',
      iconPath: '/images/skills/terraform.png',
      url: 'https://www.terraform.io/',
    },
    {
      name: 'GitHub Actions',
      iconPath: '/images/skills/github-actions.png',
      url: 'https://github.com/features/actions',
    },
    {
      name: 'OAuth 2.0/OIDC',
      iconPath: '/images/skills/oauth.png',
      url: 'https://oauth.net/2/',
    },
    {
      name: 'Kubernetes',
      iconPath: '/images/skills/kubernetes.png',
      url: 'https://kubernetes.io/',
    },
    {
      name: 'Docker',
      iconPath: '/images/skills/docker.png',
      url: 'https://www.docker.com/',
    },
  ],
};

const SkillsListContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryBackground};
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
    }

    div:nth-child(2) {
      padding: 50px 0;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.sizes.medium}) {
    > div h2 {
      font-size: 38px;
      margin-block-start: -15px;
      letter-spacing: -0.03em;
      margin: 0;
    }
  }
`;

const SkillList: React.FC = () => {
  const rellaxRefUp = useRef<HTMLDivElement>();
  const rellaxRefDown = useRef<HTMLDivElement>();

  useEffect(() => {
    const rellaxConfiguration = {
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
      breakpoints: [890, 890, 890],
    };
    new Rellax(rellaxRefUp.current, {
      // <---- Via useRef element
      speed: -1,
      ...rellaxConfiguration,
    });

    new Rellax(rellaxRefDown.current, {
      // <---- Via useRef element
      speed: +1,
      ...rellaxConfiguration,
    });
  }, []);

  return (
    <SkillsListContainer>
      <div>
        <h2>The skills I have to offer.</h2>
        <div>
          <SkillsCategory category={'Product'} skills={skills.product} rellaxRef={rellaxRefUp} />
          <SkillsCategory
            category={'Infrastructure'}
            skills={skills.infrastructure}
            rellaxRef={rellaxRefDown}
          />
        </div>
      </div>
    </SkillsListContainer>
  );
};

export default SkillList;
