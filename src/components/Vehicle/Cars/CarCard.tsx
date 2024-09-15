import React, { FC } from 'react';
import { Button, Card, Label, List } from 'semantic-ui-react';
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
      <Card.Content style={{ padding: '0' }}>
        <Button style={{ width: '100%', textAlign: 'left' }}>Logbook</Button>
      </Card.Content>
      <Card.Content style={{ padding: '0' }}>
        <Button style={{ width: '100%', textAlign: 'left' }}>Fuel Usage</Button>
      </Card.Content>
      <Card.Content style={{ padding: '0' }}>
        <Button style={{ width: '100%', textAlign: 'left' }}>Maintence</Button>
      </Card.Content>
    </Card>
  );
};

export default CarCard;
