import React from 'react';
import styled from 'styled-components';
import capitalize from '../../utils/utils';

const TYPES = ['continent', 'languages'];

export default function OptionsTypes({ onChangeOption, title, actualOption }) {
  return (
    <StyledOption>
      <p>
        {title}
        :
      </p>
      {
        TYPES.map((type) => (
          <StyledButton
            key={type}
            onClick={() => onChangeOption(type)}
            active={actualOption === type}
          >
            {capitalize(type)}
          </StyledButton>
        ))
      }
    </StyledOption>
  );
}

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  p{
    font-weight: bold;
    margin-right: 1rem;
  }
  > * {
    &:nth-child(2) {
        border-radius: 1rem 0 0 1rem;
    }
    &:last-child {
      border-radius: 0 1rem 1rem 0;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  padding: .6rem 1rem;
  cursor: pointer;
  ${(props) => props.active && `
    color: white;
    background-color: #E15057;
  `}

  &:hover {
    color: white;
    background-color: #E15057;
  }
`;
