import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import listingsData from './data/listingsData';
import Pagination from './Pagination';

class App extends Component {
  constructor () {
    super()
    this.state = {
      listingsData,
      city: 'All',
      homeType: 'All',
      bedrooms: '0',
      min_price: 500,
      max_price: 10000000,
      min_floor_space: 500,
      max_floor_space: 100000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'list',
      search: '',
      pageOfItems: [],
      newdata: ''
    }

    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.changeView = this.changeView.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentWillMount() {
    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
  }

  change(event) {
    var name = event.target.name;
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
      this.filteredData();
    })
    // console.log(event.target.value);
  }

  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  filteredData() {
    var newData = this.state.listingsData.filter((listing) => {
      return listing.price >= this.state.min_price && listing.price <= this.state.max_price && listing.floorSpace >= this.state.min_floor_space && listing.floorSpace <= this.state.max_floor_space && listing.rooms >= this.state.bedrooms
    })

    if(this.state.city != 'All') {
      newData = newData.filter((listing) => {
        return listing.city == this.state.city
      })
    }

    if(this.state.homeType != 'All') {
      newData = newData.filter((listing) => {
        return listing.homeType == this.state.homeType
      })
    }

    if(this.state.sortby == 'price-dsc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if(this.state.sortby == 'price-asc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if(this.state.elevator === true) {
      console.log('Elevator has been selected...!')
      function findExtra(extra) {
        return extra == ['elevator']
      }

      newData = newData.filter((listing) => {
        return listing.extras.find(findExtra)
      })
    }

    if(this.state.finished_basement === true) {
      console.log('Finished Basement has been selected...!')
      function findExtra(extra) {
        return extra == ['finished basement']
      }

      newData = newData.filter((listing) => {
        return listing.extras.find(findExtra)
      })
    }

    if(this.state.gym === true) {
      console.log('Finished Basement has been selected...!')
      function findExtra(extra) {
        return extra == ['gym']
      }

      newData = newData.filter((listing) => {
        return listing.extras.find(findExtra)
      })
    }

    if(this.state.swimming_pool === true) {
      console.log('Finished Basement has been selected...!')
      function findExtra(extra) {
        return extra == ['swimming pool']
      }

      newData = newData.filter((listing) => {
        return listing.extras.find(findExtra)
      })
    }

    if(this.state.search != '') {
      newData = newData.filter((listing) => {
        var city = listing.city.toLowerCase();
        var address = listing.address.toLowerCase();
        var searchText = this.state.search.toLowerCase();
        var n = city.match(searchText);
        var a = address.match(searchText);

        if(n != null || a != null) {
          return true
        }

      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms() {
    var cities = this.state.listingsData.map((listing) => {
      return listing.city
    })
    cities = new Set(cities);
    cities = [...cities];
    cities = cities.sort();

    var homeTypes = this.state.listingsData.map((listing) => {
      return listing.homeType
    })
    homeTypes = new Set(homeTypes);
    homeTypes = [...homeTypes];
    homeTypes = homeTypes.sort();

    var bedrooms = this.state.listingsData.map((listing) => {
      return listing.rooms
    })
    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];
    bedrooms = bedrooms.sort();

    this.setState({
      populateFormsData: {
        homeTypes,
        bedrooms,
        cities
      }
    }, () => {
      console.log(this.state)
    })

  }

  render () {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
          <Listings pageOfItems={this.state.pageOfItems} listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} />
          <Pagination items={this.state.filteredData} onChangePage={this.onChangePage} />
        </section>
      </div>
    );
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
