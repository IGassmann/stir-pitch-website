import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const WorkContainer = styled.div`
  padding: 150px 0px 80px;
  text-align: center;
  
  > div {
    max-width: 950px;
    width: calc(100% - 40px);
    padding: 0px 20px;
    margin: 0px auto;

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

      li {
        margin: 50px 0;
        display: block;
        border-radius: 16px;

        h3 {
          font-weight: normal;
          font-size: 18px;
          line-height: 110%;
          margin: 20px 0;
          text-align: left;
          
          span {
            background-color: rgb(232, 147, 204);
            background-image: linear-gradient(90deg, rgb(232, 147, 204) 0%, rgb(169, 104, 198) 14%, rgb(255, 144, 123) 40%);
            background-clip: text;
            -webkit-background-clip: text;
            text-fill-color: transparent;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
          }
        }
        
        a > div {
          box-shadow: rgb(57 47 86 / 8%) 0px 4px 64px 20px;
          border-radius: 20px;
        }

      }
    }
  }
`

const Work = () => {
  return (
    <WorkContainer>
      <div>
        <h2>Projects I have worked on.</h2>
        <ul>
          <li>
            <h3><strong>Odeon</strong> | <span>Video Platform</span></h3>
            <Link href='https://odeon.tv/'>
              <a>
                <Image src='/images/work/odeon.png' width={384} height={218} alt='Odeon' />
              </a>
            </Link>
          </li>
          <li>
            <h3><strong>LBRY</strong> | <span>Electron App</span></h3>
            <Link href='https://github.com/lbryio/lbry-desktop/'>
              <a>
                <Image src='/images/work/lbry.png' width={384} height={218} alt='LBRY' />
              </a>
            </Link>
          </li>
          <li>
            <h3><strong>Personal Website</strong> | <span>Next.js Website</span></h3>
            <Link href='https://github.com/IGassmann/personal-website'>
              <a>
                <Image src='/images/work/personal-website.png' width={384} height={218} alt='LBRY' />
              </a>
            </Link>
          </li>
          <li>
            <h3><strong>Node.js API</strong> | <span>API Architecture</span></h3>
            <Link href='https://github.com/IGassmann/nodejs-api'>
              <a>
                <Image src='/images/work/nodejs-api.png' width={384} height={218} alt='LBRY' />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </WorkContainer>
  );
};

export default Work;