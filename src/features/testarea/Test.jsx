import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../modals/modalActions';

class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>Testing</h1>
        <Button
          content="test"
          color="green"
          onClick={() => this.props.openModal('TestModal')}
        />
      </div>
    );
  }
}

export default connect(null, { openModal })(TestComponent);
