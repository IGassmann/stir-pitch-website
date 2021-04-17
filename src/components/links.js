import React from 'react';
import styled from 'styled-components'

const LinksContainer = styled.div`
`

const Links = () => (
  <LinksContainer>
    <div>
      <ul>
        <li><a href="http://igassmann.me/">Personal Website</a></li>
        <li><a href="https://github.com/IGassmann">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/igassmann/">LinkedIn</a></li>
        <li><a href="https://twitter.com/i_gassmann">Twitter</a></li>
      </ul>
    </div>
  </LinksContainer>
);


export default Links;