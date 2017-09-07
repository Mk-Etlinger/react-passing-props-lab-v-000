import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component {
    constructor() {
        super()
     
        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null
        }
    }

    componentWillMount() {
        this.fetchFilters();
        this.fetchFruit();
    }

    fetchFilters = () => {
        fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

    fetchFruit = () => {
        fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
    }

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
    }

    render() {
        return (
            <FruitBasket filters={this.state.filters} 
                         onChange={this.handleFilterChange}
                         selectedFilter={this.state.currentFilter} 
                         fruit={this.state.fruit} />
             
        )
    }
}

export default App;
