import { ProjectInterface } from '@/components/work';
import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';


interface WorkCardListProps {
  /** A multiplier used for the fadeIn delay . */
  delayMultiplier: number;

  /** The card is visible in the viewport. */
  isVisible: boolean
}

const WorkCardListItem = styled.li<WorkCardListProps>`
  margin: 50px 30px;
  display: block;
  border-radius: 16px;
  transition: all 0.2s linear 0s;
  visibility: ${props => props.isVisible ? 'visible': 'hidden'};
  animation-name: ${props => props.isVisible ? 'fadeIn': 'none'};;
  animation-delay: 0.${props => 2 * props.delayMultiplier}s;

  h3 {
    font-weight: normal;
    font-size: 20px;
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

  @media screen and (max-width: ${props => props.theme.sizes.medium}) {
    h3 {
      font-size: 16px;
    }
  }
`

interface WorkCardProps extends ProjectInterface {
  /** A multiplier used for the fadeIn delay . */
  delayMultiplier: number;
}


const WorkCard: React.FC<WorkCardProps> = ({ name, shortDescription, linkHref, imageSrc, delayMultiplier}) => {
  const [visible, setVisible] = useState(false);

  return (
    <VisibilitySensor partialVisibility={true} active={!visible} onChange={(isVisible) => {setVisible(isVisible)}}>
      {({ isVisible }) =>
        <WorkCardListItem className={`animate__animated animate__fadeIn`} delayMultiplier={delayMultiplier} isVisible={isVisible}>
          <h3><strong>{name}</strong> | <span>{shortDescription}</span></h3>
          <a href={linkHref}>
            <Image src={imageSrc} width={400} height={226} alt={name}/>
          </a>
        </WorkCardListItem>
      }
    </VisibilitySensor>
  );
};

export default WorkCard;