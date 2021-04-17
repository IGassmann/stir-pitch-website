import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components'

const GreetingsContainer = styled.div`
  background-color: rgb(250, 250, 250);
  padding: 70px 20px 70px;
  text-align: center;

  > div {
    max-width: 1090px;
    width: calc(100% - 40px);
    padding: 0px 20px;
    margin: 0px auto;

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
      margin: 0 0 0 16px;

      .stir {
        background-color: rgb(138, 83, 162);
        background-image: linear-gradient(90deg, rgb(255, 100, 75) 0%, rgb(255, 95, 88) 20%, rgb(178, 39, 98) 95%, rgb(138, 83, 162) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .name {
        display: inline-block;
        background-image: url(/images/bar.png);
        background-repeat: no-repeat;
        background-position: center bottom;
      }
    }
  }
`

const Greetings = () => (
  <GreetingsContainer>
    <div>
      <Link href="https://igassmann.me/">
        <a>
          <Image
            src="/images/profile-picture.jpg"
            width={96}
            height={96}
            alt="Igor Gassmann"
          />
        </a>
      </Link>
      <h1>Hey <span className="stir">Stir</span>, I’m <span className="name">Igor Gassmann.</span></h1>
    </div>
  </GreetingsContainer>
);


export default Greetings;