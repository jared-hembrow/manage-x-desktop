import React, { FC, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardGroup, Segment } from 'semantic-ui-react';
import { Car } from 'types/models';
import CarCard from './CarCard';
import { StateManager } from 'components/Context';
import { CarTypes } from 'components/Context/reducers/carsReducer';
import { ModalTypes } from 'components/Context/reducers/modalReducer';

type Props = { carList: Car[] };

const Cars: FC<Props> = ({ carList }) => {
  const navigate = useNavigate();
  const carId = 1;
  const {
    state: { cars },
    makeRequest,
    dispatch,
  } = useContext(StateManager);
  const getCars = async () => {
    const res = await makeRequest({
      type: 'GET-cars',
    });
    dispatch({ type: CarTypes.INSERT_CARS, payload: res.data });
    console.log(res);
  };
  useEffect(() => {
    getCars();
  }, []);
  console.log(cars);
  return (
    <Segment>
      <Segment>
        <Button
          content="Create Car"
          color="blue"
          onClick={() => dispatch({ type: ModalTypes.CREATE_CAR })}
        />
      </Segment>
      <Card.Group>
        {Object.keys(cars).map((id) => {
          return <CarCard car={cars[id]} />;
        })}
      </Card.Group>
    </Segment>
  );
};

export default Cars;
