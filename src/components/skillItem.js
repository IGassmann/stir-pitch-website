import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const SkillsListItem = styled.li`
  margin: 0;
  a {
    text-decoration: none;
    font-size: 18px;
    line-height: 180%;
    color: rgba(0,0,0,0.5)
  }
  
  a > div {
    vertical-align: middle;
  }
  
  a > span {
    margin-left: 8px;
  }
`

const SkillItem = ({ skill: { iconPath, name, url, }, }) => (
  <SkillsListItem>
    <Link href={url}>
      <a>
        <Image
          src={iconPath}
          width={16}
          height={16}
          alt={name}
        />
        <span>{name}</span>
      </a>
    </Link>
  </SkillsListItem>
);

export default SkillItem;