import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  max-width: 640px;
  margin: auto;
  padding: 70px 20px;

  p {
    font-size: 18px;
    line-height: 160%;
    margin: 20px 0 0;
    color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: ${(props) => props.theme.sizes.medium}) {
    font-size: 16px;
  }
`;

const Summary: React.FC = () => (
  <SummaryContainer>
    <p>
      I‘m a Product and DevOps Engineer. During the last 3 years, I’ve worked in startups in the
      creator space. At first, at LBRY. A startup that helps creators own and sell their content by
      having it published on a blockchain. Sometime later, I co-founded Odeon. A video platform that
      lets creators bundle their subscription offering with other creators. We worked relentlessly
      full-time for almost three years with creators on our side.
    </p>
    <p>
      I want to work alongside people that are passionate about resolving problems for creators and
      that really understand them. I believe there&apos;s still a lot to be built in the creator
      space to satisfy the growing needs of creators and Stir is leading the way with its team and
      mission-driven approach.
    </p>
  </SummaryContainer>
);

export default Summary;
