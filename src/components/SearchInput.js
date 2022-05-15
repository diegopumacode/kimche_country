import React from 'react';
import styled from 'styled-components';

export default function SearchInput({ placeholder, onChange, millisecondsSearch = 300 }) {
  let timer;
  const handleChange = (e) => {
    e.persist();
    clearTimeout(timer);
    timer = setTimeout(() => {
      onChange(e.target.value);
    }, millisecondsSearch);
  };

  return (
    <StyledSearchInput>
      <span>🔎</span>
      <input
        onChange={(e) => { handleChange(e); }}
        placeholder={placeholder}
      />
    </StyledSearchInput>
  );
}

const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  span{
    font-size: 1rem;
    position: absolute;
    padding: 1.5rem;
    opacity: .5;
    margin-top: .5rem;
  }

  input{
    padding: .8rem .8rem .8rem 3.5rem; 
    border: 1px solid #ccc;
    border-radius: 4px;
    
    margin-top: 8px;
    width: 100%;
    font-size: 1rem;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    background-color: #fff;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    &:focus {
      border-color: #66afe9;
      outline: 0;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    }
  }
`;
