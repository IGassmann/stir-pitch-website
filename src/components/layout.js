import React from 'react';
import styled from 'styled-components'

const LayoutContainer = styled.div`
  background-color: rgb(255, 255, 255);
`

const layout = ({ children }) => (
  <LayoutContainer>
    {children}
  </LayoutContainer>
);


export default layout;