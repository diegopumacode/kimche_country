import React from 'react';
import styled from 'styled-components';

export default function Country({
  name, code, capital, languages, states, phone, currency, emoji,
}) {
  return (
    <StyledCountry>
      <img loading="lazy" src={`https://flagcdn.com/120x90/${code.toLowerCase()}.png`} alt={name} />
      <StyledCountryTitle>
        {emoji}
        <h4>{name}</h4>
      </StyledCountryTitle>
      <p>
        Capital:
        {' '}
        {capital}
      </p>
      <p>
        Code:
        {' '}
        {code}
      </p>
      <p>
        Phone:
        {' '}
        +
        {phone}
      </p>
      <p>
        Currency:
        {' '}
        {currency}
      </p>
      <p>
        Languages:
        {' '}
        {languages.map((language) => language.name).join(', ')}
      </p>
      <StyledCountryStates>
        <summary>
          {states.length}
          {' '}
          states
        </summary>
        <ol>
          {
            states?.map((state, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${state.name}${i}`}>
                {state.name}
              </li>
            ))
          }
        </ol>
      </StyledCountryStates>
    </StyledCountry>
  );
}

const StyledCountry = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem; 
  padding: 1rem 2rem;
  background-color: white;
  max-width: 400px;
  z-index: 2;
  img{
    position: absolute;
    object-fit: contain;
    opacity: .1;
    right: 0;
    bottom: .5rem;
  }
  p{
    line-height: .8rem;
    font-size: .85rem;
  }
`;

const StyledCountryTitle = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: 1.2rem;
  
`;

const StyledCountryStates = styled.details`
  font-size: .85rem;
  summary{
    cursor: pointer;
  }
  ol{
    list-style: circle;
    margin-left: 2.5rem;
  }
`;
