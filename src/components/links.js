import Link from 'next/link';
import React from 'react';
import styled from 'styled-components'

const LinksContainer = styled.div`
`

const Links = () => (
  <LinksContainer>
    <div>
      <ul>
        <li><Link href="http://igassmann.me/"><a>Personal Website</a></Link></li>
        <li><Link href="https://github.com/IGassmann"><a>GitHub</a></Link></li>
        <li><Link href="https://www.linkedin.com/in/igassmann/"><a>LinkedIn</a></Link></li>
        <li><Link href="https://twitter.com/i_gassmann"><a>Twitter</a></Link></li>
      </ul>
    </div>
  </LinksContainer>
);


export default Links;