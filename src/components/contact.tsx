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
      font-size: 55px;
      line-height: 120%;
      letter-spacing: -0.02em;
      background-color: rgb(138, 83, 162);
      background-image: linear-gradient(90deg, rgb(146, 88, 195) 10%, rgb(255, 95, 88) 40%, rgb(178, 39, 98) 95%, rgb(138, 83, 162) 100%);
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
      width: 226px;
      display: inline-block;
      text-decoration: none;
      margin-top: 50px;
      text-align: center;
    }
  }
`

const Contact: React.FC = () => (
  <ContactContainer>
    <div>
      <h2>Reach me out.</h2>
      <a href="mailto:igor@igassmann.me">Contact Me</a>
    </div>
  </ContactContainer>
);

export default Contact;