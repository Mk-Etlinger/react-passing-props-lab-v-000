import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

  // props = onChange, filters, selectedFilter, fruit
  const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter filters={props.filters} handleChange={props.onChange} />
        <FilteredFruitList
          filter={props.selectedFilter}
          fruit={props.fruit} />
      </div>
    );
  }

  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: [],
    updateFilterCallback: null
  }

export default FruitBasket;
