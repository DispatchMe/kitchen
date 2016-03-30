import _ from 'lodash';
import 'mocha/mocha.js';
import React from 'react';
import Test from './Test.jsx';

const style = {
  base: {
    display: 'inline-block',
  },
  status: {
    display: 'inline-block',
    height: '10px',
    width: '10px',
    marginLeft: '0.25rem',
    borderRadius: '50%',
  },
  label: {
    display: 'inline-block',
    padding: '0.25rem',
    fontSize: '0.75rem',
  },
};

export default class TestStatus extends React.Component {
  static propTypes = {
    style: React.PropTypes.object,
    test: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      tests: {},
    };

    mocha.setup('bdd');
  }

  componentDidMount() {
    this.runTests(this.props.test);
  }

  componentWillReceiveProps(nextProps) {
    this.runTests(nextProps.test);
  }

  runTests(testToRun) {
    // Clear all previous tests.
    this.setState({ tests: {} });

    mocha.suite.suites = [];

    // Run new tests if they exits.
    if (typeof testToRun === 'function') {
      testToRun();

      mocha.run()
        .on('test', (test) => {
          this.setState({ tests: Object.assign({}, this.state.tests, { [test.title]: 'yellow' }) });
        })
        .on('pass', (test) => {
          this.setState({ tests: Object.assign({}, this.state.tests, { [test.title]: 'lightgreen' }) });
        })
        .on('fail', (test, err) => {
          console.log(err);
          this.setState({ tests: Object.assign({}, this.state.tests, { [test.title]: 'red' }) });
        });
    }
  }

  renderTests() {
    return _.map(this.state.tests, (status, label) => (<Test status={status} label={label} key={label} />));
  }

  render() {
    const tests = _.isEmpty(this.state.tests) ? (<Test status={'gray'} label={'No Tests'} />) : this.renderTests();

    return (
      <div style={Object.assign({}, style.base, this.props.style)}>
        <div id="mocha" style={{ display: 'none' }}></div>
        {tests}
      </div>
    );
  }
}
