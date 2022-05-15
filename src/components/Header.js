import React from 'react';
import styled from 'styled-components';

export default function Header({ title, subtitle }) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  padding: 5rem 0 3rem 0;
`;
