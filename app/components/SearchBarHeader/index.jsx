import React from 'react';
import ReactDOM from 'react-dom';

import { SearchBar, Button, WhiteSpace } from 'antd-mobile';
require('./index.css');


class SearchBarHeader extends React.Component {
  constructor() {
    super() ;
  }
  render() {
    return (<div>
      <SearchBar placeholder="搜索" />
    </div>);
  }
}
export default SearchBarHeader;

