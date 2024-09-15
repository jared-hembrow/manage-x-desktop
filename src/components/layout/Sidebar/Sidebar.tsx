import { StateManager } from 'components/Context';
import { ModalTypes } from 'components/Context/reducers/modalReducer';
import React, { ReactElement, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Icon, Label, Menu } from 'semantic-ui-react';

type Props = {};

const Sidebar = (props: Props) => {
  const navigate = useNavigate();
  const [carList, setCarlist] = useState<boolean>(false);
  const { dispatch } = useContext(StateManager);
  const carLitClick = (item: string) => {
    if (item === 'main') return setCarlist((p) => !p);
  };
  return (
    <Menu vertical style={{ width: '100%' }}>
      <Menu.Item name="nav" style={{ padding: '0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            style={{ margin: '0' }}
            size="mini"
            icon="chevron left"
            onClick={() => navigate(-1)}
          />
          <Button
            style={{ margin: '0' }}
            size="mini"
            icon="chevron right"
            onClick={() => navigate(1)}
          />
        </div>
      </Menu.Item>
      <Menu.Item
        name="Cars"
        active
        onClick={() => navigate('/cars')}
        // onClick={(e) => carLitClick('main')}
      >
        <Icon name={`chevron ${carList ? 'up' : 'down'}`} />
        Cars
      </Menu.Item>
      {/* {!carList ? null : (
        <Menu.Menu>
          <Menu.Item
            position="right"
            name="rails"
            onClick={() => console.log('click')}
          />
          <Menu.Item name="python" />
          <Menu.Item name="php" />
        </Menu.Menu>
      )} */}

      <Menu.Item
        name="Finance"
        //   active={activeItem === 'Finance'}
        onClick={() => dispatch({ type: ModalTypes.CREATE_CAR })}
      >
        <Icon name="money" />
        Finance
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
