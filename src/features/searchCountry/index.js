import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useReducer } from 'react';
import Alert from '../../components/Alert';
import SearchInput from '../../components/SearchInput';
import ListCountries from './ListCountries';
import { initialState, searchCountryReducer } from './reducer/searchCountryReducer';

export const COUNTRIES = gql`
    query Countries{
      countries {
        code
        name
        capital
        emoji
        phone 
        currency
        continent {
          name
        }
        languages {
          name
          code
        }
        states {
          name
          code
        }
      }
    }
`;

export default function SearchCountry() {
  const { loading, data } = useQuery(COUNTRIES);
  const [state, dispatch] = useReducer(searchCountryReducer, initialState);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_COUNTRIES', payload: { countries: data.countries, loading } });
    }
  }, [loading]);

  const searchByName = (name) => {
    dispatch({ type: 'SEARCH_BY_NAME', payload: name });
  };

  return (
    <>
      <SearchInput onChange={searchByName} placeholder="Name Country" />
      {
        state.loading
          ? (
            <Alert message="... Loading Countries" src="/images/undraw_hiking_re.svg" altText="loadingCountry" />
          )
          : <ListCountries countries={state.filterCountries} />
      }
    </>
  );
}