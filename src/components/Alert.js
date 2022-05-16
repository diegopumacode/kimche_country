import React from 'react';
import styled from 'styled-components';

export default function Alert({ message, altText = '', src }) {
  return (
    <StyledAlert>
      <img src={src} alt={altText} width={200} />
      <p>{message}</p>
    </StyledAlert>
  );
}

const StyledAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .5rem;
  padding: 3rem 0;
  img{
    margin-bottom: 1rem;
  }
  p{
    font-size: 1rem;
    
    text-align: center;
    min-width: 200px;
  }
`;
