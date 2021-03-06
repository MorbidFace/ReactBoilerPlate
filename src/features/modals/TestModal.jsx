import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { closeModal } from './modalActions';

const TestModal = ({ onModalClose }) => {
  return (
    <Modal open={true} onClose={onModalClose}>
      <Modal.Header>Test Modal</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Test Modal... nothing to see here</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

const mapDispatchToProps = dispatch => ({
  onModalClose: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(TestModal);
