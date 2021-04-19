import React, { MutableRefObject } from 'react';
import SkillItem from '@/components/skillItem';
import { SkillInterface } from '@/components/skillList';
import styled from 'styled-components';

const SkillsCategoryContainer = styled.div`
  transition: all 0.1s linear 0s;
  box-shadow: rgb(57 47 86 / 8%) 0 4px 64px 20px;
  border-radius: 20px;
  width: calc(100% - 140px);
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
    background-color: ${(props) => props.theme.colors.fallbackGradient};
    background-image: ${(props) => props.theme.colors.tertiaryGradient};
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

  @media screen and (max-width: ${(props) => props.theme.sizes.large}) {
    :nth-of-type(2) {
      margin-top: 30px !important;
    }

    h3 {
      font-size: 28px;
    }
  }
`;

interface SkillsCategoryProps {
  /** The category of skills. */
  category: string;

  /** All the skills of the passed category. */
  skills: SkillInterface[];

  /** Passthroughs reference to be use by rellax.js */
  rellaxRef: MutableRefObject<HTMLDivElement | undefined>;
}

const SkillsCategory: React.FC<SkillsCategoryProps> = ({ category, skills, rellaxRef }) => (
  <SkillsCategoryContainer
    ref={rellaxRef}
    data-rellax-xs-speed="0"
    data-rellax-mobile-speed="0"
    data-rellax-tablet-speed="0"
  >
    <h3>{category}</h3>
    <ul>
      {skills.map((skill) => (
        <SkillItem skill={skill} key={skill.name} />
      ))}
    </ul>
  </SkillsCategoryContainer>
);

export default SkillsCategory;
