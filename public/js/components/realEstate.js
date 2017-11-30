webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(36);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _underscore = __webpack_require__(229);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    items: _propTypes2.default.array.isRequired,
    onChangePage: _propTypes2.default.func.isRequired,
    initialPage: _propTypes2.default.number
};

var defaultProps = {
    initialPage: 1
};

var Pagination = function (_React$Component) {
    _inherits(Pagination, _React$Component);

    function Pagination(props) {
        _classCallCheck(this, Pagination);

        var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        _this.state = { pager: {} };
        return _this;
    }

    _createClass(Pagination, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            // set page if items array isn't empty
            if (this.props.items && this.props.items.length) {
                this.setPage(this.props.initialPage);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // reset page if items array has changed
            if (this.props.items !== prevProps.items) {
                this.setPage(this.props.initialPage);
            }
        }
    }, {
        key: 'setPage',
        value: function setPage(page) {
            var items = this.props.items;
            var pager = this.state.pager;

            if (page < 1 || page > pager.totalPages) {
                return;
            }

            // get new pager object for specified page
            pager = this.getPager(items.length, page);

            // get new page of items from items array
            var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

            // update state
            this.setState({ pager: pager });

            // call change page function in parent component
            this.props.onChangePage(pageOfItems);
        }
    }, {
        key: 'getPager',
        value: function getPager(totalItems, currentPage, pageSize) {
            // default to first page
            currentPage = currentPage || 1;

            // default page size is 10
            pageSize = pageSize || 6;

            // calculate total pages
            var totalPages = Math.ceil(totalItems / pageSize);

            var startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            } else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                } else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }

            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

            // create an array of pages to ng-repeat in the pager control
            var pages = _underscore2.default.range(startPage, endPage + 1);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var pager = this.state.pager;

            if (!pager.pages || pager.pages.length <= 1) {
                // don't display pager if there is only 1 page
                return null;
            }

            return _react2.default.createElement(
                'section',
                { id: 'pagination' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'pages' },
                        _react2.default.createElement(
                            'li',
                            { className: pager.currentPage === 1 ? 'disabled' : '' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this2.setPage(1);
                                    } },
                                'First'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: pager.currentPage === 1 ? 'disabled' : '' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this2.setPage(pager.currentPage - 1);
                                    } },
                                'Previous'
                            )
                        ),
                        pager.pages.map(function (page, index) {
                            return _react2.default.createElement(
                                'li',
                                { key: index, className: pager.currentPage === page ? 'active' : '' },
                                _react2.default.createElement(
                                    'a',
                                    { onClick: function onClick() {
                                            return _this2.setPage(page);
                                        } },
                                    page
                                )
                            );
                        }),
                        _react2.default.createElement(
                            'li',
                            { className: pager.currentPage === pager.totalPages ? 'disabled' : '' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this2.setPage(pager.currentPage + 1);
                                    } },
                                'Next'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: pager.currentPage === pager.totalPages ? 'disabled' : '' },
                            _react2.default.createElement(
                                'a',
                                { onClick: function onClick() {
                                        return _this2.setPage(pager.totalPages);
                                    } },
                                'Last'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Pagination;
}(_react2.default.Component);

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
exports.default = Pagination;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var listingsData = [{
	address: '2034 Grand Ave.',
	city: 'Albuquerque',
	state: 'NM',
	rooms: 3,
	price: 220000,
	floorSpace: 2000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'
}, {
	address: '48 Pine St.',
	city: 'New York',
	state: 'NY',
	rooms: 5,
	price: 420000,
	floorSpace: 3200,
	extras: ['elevator', 'gym', 'swimming pool'],
	homeType: 'Condo',
	image: 'https://res.cloudinary.com/apartmentlist/image/upload/s--HRoGG_hz--/t_web-base/c_fill,g_auto,h_1016,w_2400/c_scale,w_2400/v1/web/static/hero_living_room.jpg'
}, {
	address: '132 Sycamore',
	city: 'Santa Fe',
	state: 'NM',
	rooms: 4,
	price: 680000,
	floorSpace: 4400,
	extras: ['swimming pool', 'finished basement'],
	homeType: 'House',
	image: 'https://i.pinimg.com/736x/86/1e/b7/861eb7aacc73a0344fffd578603ee230--craftsman-style-house-plans-craftsman-houses.jpg'
}, {
	address: '64 Ocean Ave.',
	city: 'Monterey',
	state: 'CA',
	rooms: 1,
	price: 1320000,
	floorSpace: 6000,
	extras: ['gym', 'swimming pool'],
	homeType: 'Studio',
	image: 'https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg'
}, {
	address: '755 First Ave.',
	city: 'Scottsdale',
	state: 'AZ',
	rooms: 2,
	price: 260000,
	floorSpace: 2800,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://www.3dpower.in/images/apartment-rendering/full/3d%20apartment%20design.jpg'
}, {
	address: '22 Central Park',
	city: 'Ridgewood',
	state: 'NY',
	rooms: 4,
	price: 520000,
	floorSpace: 3400,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://cdngeneral.rentcafe.com/dmslivecafe/3/448643/Astoria_FrontElvFShortweb.jpg?crop=(0,16.920100959730007,300,197)&cropxunits=300&cropyunits=197&quality=85&scale=both&'
}, {
	address: '2 West End Ave.',
	city: 'Ridgewood',
	state: 'NY',
	rooms: 5,
	price: 850000,
	floorSpace: 4100,
	extras: ['finished basement'],
	homeType: 'House',
	image: 'https://cdn.freshome.com/wp-content/uploads/2013/11/design-Mimosa-Road-residence-940x450.jpg'
}, {
	address: '45 Dove St.',
	city: 'Ridgewood',
	state: 'NY',
	rooms: 8,
	price: 3320000,
	floorSpace: 6000,
	extras: ['elevator', 'gym', 'swimming pool', 'finished basement'],
	homeType: 'House',
	image: 'http://radioritas.com/wp-content/uploads/2017/02/great-modern-house-with-best-interior.jpg'
}, {
	address: '2034 Grand Ave.',
	city: 'Albuquerque',
	state: 'NM',
	rooms: 3,
	price: 220000,
	floorSpace: 2000,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'
}, {
	address: '48 Pine St.',
	city: 'New York',
	state: 'NY',
	rooms: 5,
	price: 420000,
	floorSpace: 3200,
	extras: ['elevator', 'gym', 'swimming pool'],
	homeType: 'Condo',
	image: 'https://res.cloudinary.com/apartmentlist/image/upload/s--HRoGG_hz--/t_web-base/c_fill,g_auto,h_1016,w_2400/c_scale,w_2400/v1/web/static/hero_living_room.jpg'
}, {
	address: '132 Sycamore',
	city: 'Santa Fe',
	state: 'NM',
	rooms: 4,
	price: 680000,
	floorSpace: 4400,
	extras: ['swimming pool', 'finished basement'],
	homeType: 'House',
	image: 'https://i.pinimg.com/736x/86/1e/b7/861eb7aacc73a0344fffd578603ee230--craftsman-style-house-plans-craftsman-houses.jpg'
}, {
	address: '64 Ocean Ave.',
	city: 'Monterey',
	state: 'CA',
	rooms: 1,
	price: 1320000,
	floorSpace: 6000,
	extras: ['gym', 'swimming pool'],
	homeType: 'Studio',
	image: 'https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg'
}, {
	address: '755 First Ave.',
	city: 'Scottsdale',
	state: 'AZ',
	rooms: 2,
	price: 260000,
	floorSpace: 2800,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://www.3dpower.in/images/apartment-rendering/full/3d%20apartment%20design.jpg'
}, {
	address: '22 Central Park',
	city: 'Ridgewood',
	state: 'NY',
	rooms: 4,
	price: 520000,
	floorSpace: 3400,
	extras: ['elevator', 'gym'],
	homeType: 'Apartment',
	image: 'http://cdngeneral.rentcafe.com/dmslivecafe/3/448643/Astoria_FrontElvFShortweb.jpg?crop=(0,16.920100959730007,300,197)&cropxunits=300&cropyunits=197&quality=85&scale=both&'
}, {
	address: '2 West End Ave.',
	city: 'Ridgewood',
	state: 'NY',
	rooms: 5,
	price: 850000,
	floorSpace: 4100,
	extras: ['finished basement'],
	homeType: 'House',
	image: 'https://cdn.freshome.com/wp-content/uploads/2013/11/design-Mimosa-Road-residence-940x450.jpg'
}, {
	address: '45 Dove St.',
	city: 'Ridgewood',
	state: 'NY',
	rooms: 8,
	price: 3320000,
	floorSpace: 6000,
	extras: ['elevator', 'gym', 'swimming pool', 'finished basement'],
	homeType: 'House',
	image: 'http://radioritas.com/wp-content/uploads/2017/02/great-modern-house-with-best-interior.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(101);

var _listingsData2 = _interopRequireDefault(_listingsData);

var _Pagination = __webpack_require__(100);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: _listingsData2.default,
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
      filteredData: _listingsData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'list',
      search: '',
      pageOfItems: [],
      newdata: ''
    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    _this.onChangePage = _this.onChangePage.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
      // console.log(event.target.value);
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'onChangePage',
    value: function onChangePage(pageOfItems) {
      // update state with new page of items
      this.setState({ pageOfItems: pageOfItems });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (listing) {
        return listing.price >= _this3.state.min_price && listing.price <= _this3.state.max_price && listing.floorSpace >= _this3.state.min_floor_space && listing.floorSpace <= _this3.state.max_floor_space && listing.rooms >= _this3.state.bedrooms;
      });

      if (this.state.city != 'All') {
        newData = newData.filter(function (listing) {
          return listing.city == _this3.state.city;
        });
      }

      if (this.state.homeType != 'All') {
        newData = newData.filter(function (listing) {
          return listing.homeType == _this3.state.homeType;
        });
      }

      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.elevator === true) {
        var findExtra = function findExtra(extra) {
          return extra == ['elevator'];
        };

        console.log('Elevator has been selected...!');


        newData = newData.filter(function (listing) {
          return listing.extras.find(findExtra);
        });
      }

      if (this.state.finished_basement === true) {
        var _findExtra = function _findExtra(extra) {
          return extra == ['finished basement'];
        };

        console.log('Finished Basement has been selected...!');


        newData = newData.filter(function (listing) {
          return listing.extras.find(_findExtra);
        });
      }

      if (this.state.gym === true) {
        var _findExtra2 = function _findExtra2(extra) {
          return extra == ['gym'];
        };

        console.log('Finished Basement has been selected...!');


        newData = newData.filter(function (listing) {
          return listing.extras.find(_findExtra2);
        });
      }

      if (this.state.swimming_pool === true) {
        var _findExtra3 = function _findExtra3(extra) {
          return extra == ['swimming pool'];
        };

        console.log('Finished Basement has been selected...!');


        newData = newData.filter(function (listing) {
          return listing.extras.find(_findExtra3);
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (listing) {
          var city = listing.city.toLowerCase();
          var address = listing.address.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);
          var a = address.match(searchText);

          if (n != null || a != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      var cities = this.state.listingsData.map(function (listing) {
        return listing.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));
      cities = cities.sort();

      var homeTypes = this.state.listingsData.map(function (listing) {
        return listing.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      var bedrooms = this.state.listingsData.map(function (listing) {
        return listing.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort();

      this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          cities: cities
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { pageOfItems: this.state.pageOfItems, listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView }),
          _react2.default.createElement(_Pagination2.default, { items: this.state.filteredData, onChangePage: this.onChangePage })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};

    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;


        return cities.map(function (item, i) {
          return _react2.default.createElement(
            "option",
            { key: i, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "homeTypes",
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;


        return homeTypes.map(function (item, i) {
          return _react2.default.createElement(
            "option",
            { key: i, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;


        return bedrooms.map(function (item, i) {
          return _react2.default.createElement(
            "option",
            { key: i, value: item },
            item,
            "+ BR"
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            "Filter"
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "city" },
            "City"
          ),
          _react2.default.createElement(
            "select",
            { name: "city", className: "filters city", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All Cities"
            ),
            this.cities()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "city" },
            "Home Type"
          ),
          _react2.default.createElement(
            "select",
            { name: "homeType", className: "filters homeType", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "All" },
              "All Homes"
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            "label",
            { htmlFor: "city" },
            "Bedrooms"
          ),
          _react2.default.createElement(
            "select",
            { name: "bedrooms", className: "filters bedrooms", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { value: "0" },
              "All Bedrooms"
            ),
            this.bedrooms()
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Price"
            ),
            _react2.default.createElement("input", { type: "text", name: "min_price", className: "min-price", value: this.props.globalState.min_price, onChange: this.props.change }),
            _react2.default.createElement("input", { type: "text", name: "max_price", className: "max-price", value: this.props.globalState.max_price, onChange: this.props.change })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Floor Space"
            ),
            _react2.default.createElement("input", { type: "text", name: "min_floor_space", className: "min-floor-space", value: this.props.globalState.min_floor_space, onChange: this.props.change }),
            _react2.default.createElement("input", { type: "text", name: "max_floor_space", className: "max-floor-space", value: this.props.globalState.max_floor_space, onChange: this.props.change })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "elevator" },
              _react2.default.createElement(
                "span",
                null,
                "Elevators"
              ),
              _react2.default.createElement("input", { name: "elevator", type: "checkbox", value: "elevator", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "swimming_pool" },
              _react2.default.createElement(
                "span",
                null,
                "Swimming Pool"
              ),
              _react2.default.createElement("input", { name: "swimming_pool", type: "checkbox", value: "swimming_pool", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "finished_basement" },
              _react2.default.createElement(
                "span",
                null,
                "Finished Basement"
              ),
              _react2.default.createElement("input", { name: "finished_basement", type: "checkbox", value: "finished_basement", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "gym" },
              _react2.default.createElement(
                "span",
                null,
                "Gym"
              ),
              _react2.default.createElement("input", { name: "gym", type: "checkbox", value: "gym", onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          "Logo"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Create Ads"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "About us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Log In"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};

    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;

      var pageOfItems = this.props.pageOfItems;

      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry, no listings match your request";
      }

      return pageOfItems.map(function (listing, index) {
        if (_this2.props.globalState.view == 'gallery') {
          // THIS IS GALLERY VIEW
          return _react2.default.createElement(
            'div',
            { key: index, className: 'col-md-3' },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '05/05/2017'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          ' ',
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          ' ',
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price,
                  ' / month'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        } else {
          // THIS IS LIST VIEW
          return _react2.default.createElement(
            'div',
            { key: index, className: 'col-md-12 col-lg-6' },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '05/05/2017'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          ' ',
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          ' ',
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('i', { className: 'fa fa-search fa-2x', 'aria-hidden': 'true' }),
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, 'list') }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, 'gallery') })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.loopListings()
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination', style: { display: 'none' } },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'ul',
              { className: 'pages' },
              _react2.default.createElement(
                'li',
                null,
                'Prev'
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                '1'
              ),
              _react2.default.createElement(
                'li',
                null,
                '2'
              ),
              _react2.default.createElement(
                'li',
                null,
                '3'
              ),
              _react2.default.createElement(
                'li',
                null,
                '4'
              ),
              _react2.default.createElement(
                'li',
                null,
                '5'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[103]);