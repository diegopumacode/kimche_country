/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { groupBy } from 'lodash';
import Alert from '../../components/Alert';
import Country from '../../components/Country';
import usePagination from '../../hooks/usePagination';

// eslint-disable-next-line default-param-last
const groupByType = (countries = [], type) => {
  const grouped = () => {
    if (type === 'continent') {
      return groupBy(countries, 'continent.name');
    }
    return groupBy(countries, (country) => country.languages.map(({ name }) => name));
  };
  return Object.keys(grouped()).map((key) => ({ key, data: grouped()[key] }));
};

export default function ListCountries({ type, countries = [] }) {
  const listGroup = groupByType(countries, type);
  const {
    paginationList, currentPage, pageIndex, viewMore,
  } = usePagination(
    listGroup,
    1,
    type === 'continent' && listGroup.length === 7 ? 1 : 5,
    [type, countries],
  );
  return (
    <div>
      {
        paginationList && countries
          ? (
            <StyledListCountries>
              {
                paginationList?.map((countryGroup) => (
                  <StyledListCountries key={countryGroup.key}>
                    <h3>{countryGroup.key}</h3>
                    {
                      countryGroup.data.map((country) => (
                        <Country
                          key={country.code}
                          name={country.name}
                          code={country.code}
                          capital={country.capital}
                          languages={country.languages}
                          states={country.states}
                          phone={country.phone}
                          currency={country.currency}
                          emoji={country.emoji}
                        />
                      ))
                    }
                    <hr />
                  </StyledListCountries>
                ))
              }
              {
                paginationList.length > 0 && currentPage !== pageIndex && (
                  <button onClick={viewMore} type="button">View More</button>
                )
              }
            </StyledListCountries>
          )
          : (
            <Alert
              message="The list of countries is empty, search for a country"
              src="/images/undraw_hiking_re.svg"
              altText="empty array image"
            />
          )
      }
    </div>
  );
}

const StyledListCountries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;

  button{
    font-weight: bold;
    font-size: .8rem;
    display: block;
    padding: .5rem;
    cursor: pointer;
    border: none;
    color: white;
    background-color: #E15057;
  }
`;
