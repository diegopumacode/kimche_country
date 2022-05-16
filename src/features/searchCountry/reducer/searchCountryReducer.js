export const TYPEFILTER = {
  CONTINENT: 'continent',
  LANGUAJES: 'languajes',
};

export const initialState = {
  filterCountries: [],
  countries: [],
  type: TYPEFILTER.CONTINENT,
  textSearch: '',
  loading: true,
};

export const searchCountryReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COUNTRIES': {
      const { countries, loading } = action.payload;
      return {
        ...state, countries, filterCountries: [], loading,
      };
    }
    case 'SEARCH_BY_NAME': {
      const filterByName = action.payload.length > 0 ? state.countries.filter(({ name }) => name.toLowerCase().match(`^${action.payload.toLowerCase()}`)) : [];
      return { ...state, filterCountries: filterByName, textSearch: action.payload };
    }
    default:
      return state;
  }
};
