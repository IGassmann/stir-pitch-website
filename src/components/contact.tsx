import { usePlausible } from 'next-plausible';
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 150px 80px;
  text-align: center;
  
  > div {
    max-width: 950px;
    width: calc(100% - 40px);
    padding: 0 20px;
    margin: 0 auto;

    h2 {
      min-width: 200px;
      font-size: 55px;
      line-height: 120%;
      letter-spacing: -0.02em;
      background-color: ${props => props.theme.colors.fallbackGradient};
      background-image: ${props => props.theme.colors.secondaryGradient};
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
      margin: 0;
      padding-top: 50px;
    }

    a {
      background-color: rgba(0, 0, 0, 0.05);
      color: rgb(0,0,0);
      font-weight: 700;
      border-radius: 8px;
      transition: .1s ease-in-out;
      font-size: 18px;
      padding: 19px 0;
      width: 100%;
      min-width: 155px;
      max-width: 226px;
      display: inline-block;
      text-decoration: none;
      margin-top: 50px;
      text-align: center;
    }
  }

  @media screen and (max-width: ${props => props.theme.sizes.medium}) {
    
    padding: 150px 0;

    > div h2  {
      font-size: 30px;
      margin-block-start: -15px;
      letter-spacing: -0.03em;
    }
    
    a {
      font-size: 16px;
      
    }
  }
`

const Contact: React.FC = () => {
  const plausible = usePlausible()

  return (
    <ContactContainer>
      <div>
        <h2>Reach me out.</h2>
        <a onClick={() => plausible('contact')} href="mailto:igor@igassmann.me">Contact Me</a>
      </div>
    </ContactContainer>
  );
};

export default Contact;