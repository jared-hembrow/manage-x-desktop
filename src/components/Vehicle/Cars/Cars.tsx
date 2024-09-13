import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardGroup, Segment } from 'semantic-ui-react';
import { Car } from 'types/models';
import CarCard from './CarCard';

type Props = { carList: Car[] };

const Cars: FC<Props> = ({ carList }) => {
  const navigate = useNavigate();
  const carId = 1;
  return (
    <Segment>
      <Segment>Create Car</Segment>
      {carList.map((c) => {
        return <CarCard car={c} />;
      })}
      <Card.Group></Card.Group>
    </Segment>
  );
};

export default Cars;
