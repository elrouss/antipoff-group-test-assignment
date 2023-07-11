import { Routes, Route } from 'react-router-dom';

import OurTeamPage from '../../pages/our-team';
import TeamMemberDetailsPage from '../../pages/team-member-details';
import SignUpPage from '../../pages/sign-up';
import SignInPage from '../../pages/sign-in';

import { ROUTES } from '../../utils/constants';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.ourTeam.main} element={<OurTeamPage />} />
      <Route
        path={`${ROUTES.ourTeam.main}${ROUTES.ourTeam.member}`}
        element={<TeamMemberDetailsPage />}
      />

      <Route path={ROUTES.sign.up} element={<SignUpPage />} />
      <Route path={ROUTES.sign.in} element={<SignInPage />} />
    </Routes>
  );
}

export default App;
