import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';

// Semantic UI CSS
// import 'semantic-ui-css/semantic.min.css';

import './css-reset.css';
import { Logbook, StateManagerProvider } from '../components';

export default function App() {
  return (
    <StateManagerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Logbook />} />
        </Routes>
      </Router>
    </StateManagerProvider>
  );
}
