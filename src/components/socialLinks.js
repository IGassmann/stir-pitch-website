import React from 'react';
import SocialLink from '@/components/socialLink';
import styled from 'styled-components'

const socialLinks = [
  {
    href: 'https://igassmann.me/',
    src: '/images/social-links/profile-picture-100x100.png',
    caption: 'Personal Website',
  },
  {
    href: 'https://github.com/IGassmann/',
    src: '/images/social-links/github.svg',
    caption: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/igassmann/',
    src: '/images/social-links/linkedin.svg',
    caption: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/i_gassmann/',
    src: '/images/social-links/twitter.svg',
    caption: 'Twitter',
  },
]

const SocialLinksContainer = styled.div`
  background-color: rgb(250, 250, 250);
  padding: 150px 0;
  text-align: center;
  
  ul {
    max-width: 950px;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
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
      min-width: 200px;
    }
  }
`

const SocialLinks = () => (
  <SocialLinksContainer>
    <ul>
      {socialLinks.map((socialLink, index) => (
        <li key={index}>
          <SocialLink {...socialLink}/>
        </li>
      ))}
    </ul>
  </SocialLinksContainer>
);


export default SocialLinks;