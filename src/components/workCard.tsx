import { ProjectInterface } from '@/components/work';
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const WorkCardListItem = styled.li`
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
      box-shadow: rgb(57 47 86 / 8%) 0 4px 64px 20px;
      border-radius: 20px;
    }
`

const WorkCard: React.FC<ProjectInterface> = ({ name, shortDescription, linkHref, imageSrc}) => (
  <WorkCardListItem>
    <h3><strong>{name}</strong> | <span>{shortDescription}</span></h3>
    <a href={linkHref}>
      <Image src={imageSrc} width={400} height={226} alt={name} />
    </a>
  </WorkCardListItem>
);

export default WorkCard;