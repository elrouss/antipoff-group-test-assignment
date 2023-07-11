import { Routes, Route } from 'react-router-dom';

import OurTeamPage from '../../pages/our-team';
import TeamMemberDetailsPage from '../../pages/team-member-details';

import { ROUTES } from '../../utils/constants';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.ourTeam.main} element={<OurTeamPage />} />
      <Route
        path={`${ROUTES.ourTeam.main}${ROUTES.ourTeam.member}`}
        element={<TeamMemberDetailsPage />}
      />
    </Routes>
  );
}

export default App;
