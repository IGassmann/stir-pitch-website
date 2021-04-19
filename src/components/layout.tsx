import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBackground};
`;

const Layout: React.FC = ({ children }) => <LayoutContainer>{children}</LayoutContainer>;

export default Layout;
