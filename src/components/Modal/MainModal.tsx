import { StateManager } from 'components/Context';
import { ModalTypes } from 'components/Context/reducers/modalReducer';
import React, { useContext } from 'react';
import { Modal } from 'semantic-ui-react';
import { CreateCarModalContent } from './Modals';

type Props = {};

const MainModal = (props: Props) => {
  const {
    state: { modal },
    dispatch,
  } = useContext(StateManager);
  const renderModalContent = (modalType: ModalTypes) => {
    switch (modalType) {
      case ModalTypes.CREATE_CAR:
        return <CreateCarModalContent />;
      default:
        return null;
    }
  };
  console.log('Modal component', modal);
  console.log('Modal component', modal.type !== ModalTypes.EMPTY_MODAL);
  return (
    <Modal
      open={modal.type !== ModalTypes.EMPTY_MODAL}
      onClose={() => dispatch({ type: ModalTypes.CLOSE_MODAL })}
    >
      {renderModalContent(modal.type)}
    </Modal>
  );
};

export default MainModal;
