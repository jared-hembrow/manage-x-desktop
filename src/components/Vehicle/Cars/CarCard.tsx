import React, { FC } from 'react';
import { Card, List } from 'semantic-ui-react';
import { Car } from 'types/models';

type Props = {
  car: Car;
};

const CarCard: FC<Props> = ({ car }) => {
  return (
    <Card
      onClick={() => {
        console.log('routing');
        //   navigate(`/cars/${car.id}`);
      }}
    >
      <Card.Content>
        <Card.Header>{`${car.year} ${car.make} ${car.model}`}</Card.Header>
        <Card.Meta>{car.plate}</Card.Meta>
      </Card.Content>
      <Card.Content>Logbook</Card.Content>
      <Card.Content></Card.Content>
      <Card.Content></Card.Content>
    </Card>
  );
};

export default CarCard;
