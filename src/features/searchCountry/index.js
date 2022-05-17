import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useReducer } from 'react';
import Alert from '../../components/Alert';
import SearchInput from '../../components/SearchInput';
import ListCountries from './ListCountries';
import OptionsTypes from './OptionsTypes';
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
  const { loading, data, error } = useQuery(COUNTRIES);
  const [state, dispatch] = useReducer(searchCountryReducer, initialState);

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_COUNTRIES', payload: { countries: data.countries, loading } });
    }
  }, [loading]);

  const searchByName = (name) => {
    dispatch({ type: 'SEARCH_BY_NAME', payload: name });
  };

  const changeOption = (option) => {
    dispatch({ type: 'SET_TYPE', payload: option });
  };

  return (
    <>
      <SearchInput onChange={(name) => { searchByName(name); }} placeholder="Name Country" />
      <OptionsTypes onChangeOption={changeOption} title="search By" actualOption={state.type} />
      {
        state.loading
          ? (
            <Alert message={error ? 'Error, list of countries not available' : '... Loading Countries'} src="/images/undraw_hiking_re.svg" altText="loadingCountry" />
          )
          : <ListCountries countries={state.filterCountries} type={state.type} />
      }
    </>
  );
}
