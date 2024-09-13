import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';

// Semantic UI CSS
// import 'semantic-ui-css/semantic.min.css';

import './css-reset.css';
import { Cars, Layout, Logbook, StateManagerProvider } from '../components';
import { Car } from 'types/models';
const cars: Car[] = [
  {
    id: 1,
    make: 'toyota',
    model: 'corolla',
    plate: 'dmx58s',
    year: 2015,
    initialOdometer: 172555,
    odometer: 172555,
  },
];
export default function App() {
  return (
    <StateManagerProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Logbook />
              </Layout>
            }
          />
          <Route
            path="/cars"
            element={
              <Layout>
                <Cars carList={cars} />
              </Layout>
            }
          />
          <Route path="/cars/:id" element={<Layout>hello</Layout>} />
        </Routes>
      </Router>
    </StateManagerProvider>
  );
}
