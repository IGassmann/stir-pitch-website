import React from 'react';
import SkillItem from '@/components/skillItem';
import styled from 'styled-components';

const SkillsCategoryContainer = styled.div`
  box-shadow: rgb(57 47 86 / 8%) 0px 4px 64px 20px;
  border-radius: 20px;
  width: 100%;
  margin: 50px;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  max-width: 265px !important;
  padding: 20px 30px !important;

  :nth-of-type(2) {
    margin-top: 250px;
  }

  h3 {
    width: fit-content;
    font-size: 30px;
    line-height: 120%;
    margin: 16px 0;
    margin-block-end: 0;
    background-color: rgb(138, 83, 162);
    background-image: linear-gradient(90deg, rgb(138, 83, 162) 0%, rgb(178, 39, 98) 30%, rgb(255, 95, 88) 51%, rgb(255, 124, 141) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }

  ul {
    margin-block-start: 16px;
    margin-block-end: 16px;
    padding: 0;
    list-style: none;
  }
`

const SkillsCategory = ({ category, skills }) => (
  <SkillsCategoryContainer>
    <h3>{category}</h3>
    <ul>
      {skills.map(skill => <SkillItem skill={skill} key={skill.name} />)}
    </ul>
  </SkillsCategoryContainer>
);

export default SkillsCategory;