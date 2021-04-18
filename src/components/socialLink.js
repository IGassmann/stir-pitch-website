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
`

const SocialLink = ({ href, src, svgPath, svgFillColor, caption }) => (
  <SocialLinkContainer href={href}>

    <figure>
      {src
        ? <Image src={src} width={50} height={50} />
        : <svg viewBox="0 0 24 24" fill={svgFillColor}><path d={svgPath} /></svg>
      }
      <figcaption>{caption}</figcaption>
    </figure>
  </SocialLinkContainer>
);


export default SocialLink;