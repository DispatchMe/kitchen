import React from 'react';
import ListItem from './ListItem.jsx';
import Styles from '../styles';
import SearchField from './SearchField.jsx';
import ScrollList from './ScrollList.jsx';
import SplitView from './SplitView.jsx';

const _styles = {
  base: {
    height: '100%',
    borderRight: Styles.border.default,
  },
};

export default class SideBar extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.updateSearchText = this.updateSearchText.bind(this);
  }

  updateSearchText(event, value) {
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
      <div style={_styles.base}>
        <SplitView orientation={'vertical'} topHeight={'60px'} viewOne={this.viewOne()} viewTwo={this.viewTwo(items)} />
      </div>
    );
  }
}
