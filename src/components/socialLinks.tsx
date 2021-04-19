import React from 'react';
import SocialLink from '@/components/socialLink';
import styled from 'styled-components';

export interface SocialLinkInterface {
  /** The URL of the social link. */
  href: string;

  /** The relative path of the social link image. */
  src: string;

  /** The name of the social link. */
  name: string;
}

const socialLinks: SocialLinkInterface[] = [
  {
    href: 'https://igassmann.me/',
    src: '/images/social-links/profile-picture-100x100.png',
    name: 'Website',
  },
  {
    href: 'https://github.com/IGassmann/',
    src: '/images/social-links/github.svg',
    name: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/igassmann/',
    src: '/images/social-links/linkedin.svg',
    name: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/i_gassmann/',
    src: '/images/social-links/twitter.svg',
    name: 'Twitter',
  },
];

const SocialLinksContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  padding: 150px 0;
  text-align: center;

  ul {
    max-width: 950px;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    flex-flow: row wrap;
    flex-grow: 0;
    flex-shrink: 0;
    list-style: none;

    li {
      padding: 0;
      margin: 0 8px;
      display: block;
      align-content: center;
      align-items: center;
      justify-content: center;
      line-height: 40px;
      border-radius: 50%;
      text-align: center;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.sizes.xLarge}) {
    li {
      width: 100px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.sizes.small}) {
    li {
      width: 60px;
    }
  }
`;

const SocialLinks: React.FC = () => (
  <SocialLinksContainer>
    <ul>
      {socialLinks.map((socialLink, index) => (
        <li key={index}>
          <SocialLink {...socialLink} />
        </li>
      ))}
    </ul>
  </SocialLinksContainer>
);

export default SocialLinks;
