import React from 'react';
import ListItem from './ListItem.jsx';
import Styles from '../styles';
import SearchField from './SearchField.jsx';
import ScrollList from './ScrollList.jsx';
import SplitView from './SplitView.jsx';

export default class SideBar extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  static baseStyles = {
    height: '100%',
    borderRight: Styles.border.default,
  };

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  updateSearchText = (event, value) => {
    this.setState({ searchText: value });
  }

  viewOne() {
    return (
      <SearchField style={{ fontSize: '1rem' }} onChange={this.updateSearchText} placeholder={'Search'} />
    );
  }

  viewTwo(items) {
    return (
      <ScrollList items={items}>
        <ListItem />
      </ScrollList>
    );
  }

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
        <SplitView orientation={'vertical'} topHeight={'60px'} viewOne={this.viewOne()} viewTwo={this.viewTwo(items)} />
      </div>
    );
  }
}
