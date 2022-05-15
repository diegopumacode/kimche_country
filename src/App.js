import React from 'react';
import Header from './components/Header';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header
        title="Country Search"
        subtitle="Search by country: here you will get an overview of countries by continent and languages"
      />
    </Wrapper>
  );
}
export default App;
