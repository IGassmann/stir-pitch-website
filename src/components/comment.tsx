import React from 'react';
import styled from 'styled-components'

const CommentContainer = styled.div`
  background-color: rgb(0, 0, 0);
  padding: 80px 0px;
  
  blockquote {
    background-color: rgba(255, 255, 255, 0.08);
    width: calc(100% - 80px);
    max-width: 1050px;
    margin: 0px auto;
    border-radius: 32px;
    padding: 30px 20px;
    text-align: center;

    p {
      color: rgba(255, 255, 255, 0.75);
      line-height: 180%;
      font-size: 20px;
      max-width: 820px;
      margin: 30px auto;
      
      a {
        text-decoration: none;
        color: ${props => props.theme.colors.accent};
      }

      :nth-child(2) {
        font-size: 18px;
        background-color: ${props => props.theme.colors.fallbackGradient};
        background-image: ${props => props.theme.colors.tertiaryGradient};
        background-clip: text;
        -webkit-background-clip: text;
        text-fill-color: transparent;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  @media screen and (max-width: ${props => props.theme.sizes.medium}) {

    blockquote {
      p {
        font-size: 18px;

        :nth-child(2) {
          font-size: 16px;
        }
      }
    }
  }
`

const Comment: React.FC = () => (
  <CommentContainer>
    <blockquote>
      <p>This website uses Stir's tech stack and aims to match its coding style. It was based upon <a href="https://usestir.com/">Stir's homepage</a> and it's publicly <a href="https://github.com/IGassmann/stir-pitch-website">available on GitHub</a> to be reviewed.</p>
      <p><a href="https://nextjs.org/">#nextjs</a> <a href="https://vercel.com/">#vercel</a> <a href="https://styled-components.com/">#styled-components</a> <a href="https://animate.style/">#animate-css</a></p>
    </blockquote>
  </CommentContainer>
);


export default Comment;