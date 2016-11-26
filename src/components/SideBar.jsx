import React from 'react';
import ListItem from './ListItem';
import Styles from '../styles';
import SearchField from './SearchField';
import ScrollList from './ScrollList';
import layout from '../styles/layout';


export default class SideBar extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  static baseStyles = {
    display: 'flex',
    flexFlow: 'column nowrap',
    flexShrink: 0,
    borderRight: Styles.border.default,
    width: layout.sidebar.width,
  };

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  updateSearchText = (event, value) => {
    this.setState({ searchText: value });
  };

  render() {
    const items = [];

    if (this.props.items) {
      this.props.items.forEach((item) => {
        if (item.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1) {
          items.push(item);
        }
      });
    }

    return (
      <div style={SideBar.baseStyles}>
        <SearchField style={{ fontSize: '1rem' }} onChange={this.updateSearchText} placeholder={'Search'} />

        <ScrollList items={items}>
          <ListItem />
        </ScrollList>
      </div>
    );
  }
}
