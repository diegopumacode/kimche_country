import React, { useMemo } from 'react';
import styled from 'styled-components';
import { groupBy } from 'lodash';
import Alert from '../../components/Alert';
import Country from '../../components/Country';

const groupByType = (countries, type) => {
  if (type === 'continent') {
    return groupBy(countries, 'continent.name');
  }
  return groupBy(countries, (country) => country.languages.map(({ name }) => name));
};

export default function ListCountries({ type, countries = [] }) {
  const groupedCountries = groupByType(countries, type);
  const listGroup = useMemo(() => Object.keys(groupedCountries).map((key) => ({
    key,
    data: groupedCountries[key],
  })), [groupedCountries]);
  return (
    <div>
      {
        listGroup.length > 0
          ? (
            <StyledListCountries>
              {
                listGroup.map((countryGroup) => (
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
            </StyledListCountries>
          )
          : <Alert message="The list of countries is empty, search for a country" src="/images/undraw_hiking_re.svg" altText="empty array image" />
      }
    </div>
  );
}

const StyledListCountries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
`;
