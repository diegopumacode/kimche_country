import React from 'react';
import styled from 'styled-components';
import Alert from '../../components/Alert';
import Country from '../../components/Country';

export default function ListCountries({ countries = [] }) {
  return (
    <div>
      {
        countries.length > 0
          ? (
            <StyledListCountries>
              {
                countries.map((country) => (
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
