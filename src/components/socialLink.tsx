import { SocialLinkInterface } from '@/components/socialLinks';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components'

const SocialLinkContainer = styled.a`
  text-decoration: none;
  
  figure {
    margin: 0;
  
    svg {
      display: inline-block;
      width: 50px;
      height: 50px;
      stroke-width: 0;
      font-style: normal;
      font-weight: normal;
      speak: none;
      margin-right: .2em;
      text-align: center;
      font-variant: normal;
      text-transform: none;
      line-height: 1em;
      margin-left: .2em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  
    figcaption {
      font-size: 18px;
      line-height: 160%;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  @media screen and (max-width: 700px) {
    figure figcaption {
        font-size: 16px;
    }
  }

  @media screen and (max-width: 600px) {
    
    figure > div {
      width: 40px;
    }
  }
`

const SocialLink: React.FC<SocialLinkInterface> = ({ href, src, name }) => (
  <SocialLinkContainer href={href}>
    <figure>
      <Image src={src} width={50} height={50} />
      <figcaption>{name}</figcaption>
    </figure>
  </SocialLinkContainer>
);


export default SocialLink;