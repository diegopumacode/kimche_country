export const TYPEFILTER = {
  CONTINENT: 'continent',
  LANGUAJES: 'languajes',
};

export const initialState = {
  filterCountries: [],
  countries: [],
  type: TYPEFILTER.CONTINENT,
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
      const pattern = /^[A-Z-a-z]+$/i;
      if (pattern.test(action.payload)) {
        const filterByName = action.payload.length > 0 ? state.countries.filter(({ name }) => name.toLowerCase().match(`^${action.payload.toLowerCase()}`)) : state.countries;
        return { ...state, filterCountries: filterByName };
      }
      return { ...state, filterCountries: [] };
    }
    case 'SET_TYPE':
      return { ...state, type: action.payload };
    default:
      return state;
  }
};
