import { StateManager } from 'components/Context';
import { CarTypes } from 'components/Context/reducers/carsReducer';
import { ModalTypes } from 'components/Context/reducers/modalReducer';
import React, { FC, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Modal } from 'semantic-ui-react';
import { Car } from 'types/models';

type Props = {};

const CreateCarModalContent: FC = () => {
  const { makeRequest, dispatch } = useContext(StateManager);
  const [values, setValues] = useState<Car>({
    make: '',
    model: '',
    plate: '',
    year: 0,
    initialOdometer: 0,
    odometer: 0,
  });

  // Function for Input elements to update State/Form values
  const updateState = (
    field: 'make' | 'model' | 'plate' | 'year' | 'initialOdometer',
    v: string,
  ) => {
    if (field === 'year') {
      return setValues({ ...values, [field]: parseInt(v) });
    }
    if (field === 'initialOdometer') {
      const o = parseInt(v);
      return setValues({ ...values, [field]: o, odometer: o });
    }
    return setValues({ ...values, [field]: v });
  };

  // on form submission create car
  const onSubmit = async (formValues: Car) => {
    // Validate form values
    const errors: string[] = [];
    if (!formValues.make) errors.push('Please enter the make of car');
    if (!formValues.model) errors.push('Please enter the model of car');
    if (!formValues.plate) errors.push('Please enter the plate of car');
    if (!formValues.year) errors.push('Please enter the year of car');
    if (errors.length > 1) {
      for (let e of errors) {
        toast.warn(e);
      }
      return;
    }

    // Once validation of form is successful create
    await makeRequest({ type: 'POST-car', body: formValues });
    dispatch({ type: ModalTypes.CLOSE_MODAL });
    const newCarList = await makeRequest({ type: 'GET-cars' });
    dispatch({ type: CarTypes.INSERT_CARS, payload: newCarList.data });
  };
  console.log(values);
  return (
    <>
      <Modal.Header>Create Car</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group>
            <Form.Field width={8}>
              <label>Make</label>
              <Form.Input
                type="text"
                onChange={(e, v) => updateState('make', v.value)}
              />
            </Form.Field>
            <Form.Field width={8}>
              <label>Model</label>
              <Form.Input
                type="text"
                onChange={(e, v) => updateState('model', v.value)}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <label>Year</label>
              <Form.Input
                type="number"
                onChange={(e, v) => updateState('year', v.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Plate</label>
              <Form.Input
                type="text"
                onChange={(e, v) => updateState('plate', v.value)}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field width={4}>
            <label>odometer</label>
            <Form.Input
              type="number"
              onChange={(e, v) => updateState('initialOdometer', v.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Create"
          color="green"
          onClick={() => onSubmit(values)}
        />
      </Modal.Actions>
    </>
  );
};

export default CreateCarModalContent;
