import { useMediaQuery } from '@/hooks';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components'

const GreetingsContainer = styled.div`
  background-color: ${props => props.theme.colors.secondaryBackground};
  padding: 70px 20px 70px;
  text-align: center;

  > div {
    max-width: 1050px;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin: 0 auto;

    a {
      vertical-align: middle;
      display: inline-block;

      img {
        border-radius: 50%;
      }
    }

    h1 {
      display: inline-block;
      vertical-align: middle;
      font-size: 55px;
      line-height: 120%;
      letter-spacing: -0.02em;
      margin: 20px 0 0 16px;

      a {
        background-color: ${props => props.theme.colors.gradientFallback};
        background-image: ${props => props.theme.colors.primaryGradient};
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        width: fit-content;
      }

      span {
        display: inline-block;
        background-image: url(/images/bar.png);
        background-repeat: no-repeat;
        background-position: center bottom;
      }
    }
  }

  @media screen and (max-width: ${props => props.theme.sizes.medium}) {
    > div h1 {
      font-size: 30px;
      letter-spacing: -0.03em;
      margin-top: 10px;
    }
  }

  @media screen and (max-width: ${props => props.theme.sizes.xSmall}) {
    > div h1 {
      font-size: 27px;
      margin-top: 0;
      width: 200px;
    }
  }
`

const Greetings: React.FC = () => {
  const isPageWidthBelow700px = useMediaQuery('(max-width: 700px)')

  const imageSize = isPageWidthBelow700px ? 64 : 96;

  return (
    <GreetingsContainer>
      <div>
        <a href="https://igassmann.me/">
          <Image
            src="/images/social-links/profile-picture-192x192.png"
            width={imageSize}
            height={imageSize}
            alt="Igor Gassmann"
          />
        </a>
        <h1 className="animate__animated animate__fadeIn">Hey <a href="https://usestir.com/">Stir</a>, I’m <span>Igor Gassmann.</span></h1>
      </div>
    </GreetingsContainer>
  );
};


export default Greetings;