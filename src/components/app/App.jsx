import { Routes, Route } from 'react-router-dom';

import OurTeamPage from '../../pages/our-team';

import { ROUTES } from '../../utils/constants';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.ourTeam.main} element={<OurTeamPage />} />
    </Routes>
  );
}

export default App;
