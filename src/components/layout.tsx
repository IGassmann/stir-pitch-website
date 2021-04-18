import React from 'react';
import styled from 'styled-components'

const LayoutContainer = styled.div`
  background-color: rgb(255, 255, 255);
`

const Layout: React.FC = ({ children }) => (
  <LayoutContainer>
    {children}
  </LayoutContainer>
);


export default Layout;