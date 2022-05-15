import React from 'react';
import styled from 'styled-components';

export default function Wrapper({ children }) {
  return (
    <StyledWrapper>
      { children }
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  @media only screen and (max-width: 950px) {
    padding: 0 1rem;
  }
`;
