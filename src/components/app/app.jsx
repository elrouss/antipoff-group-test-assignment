import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { OnlyAuth, OnlyUnAuth } from '../../hocs/withProtectedRoute';

import OurTeamPage from '../../pages/our-team';
import TeamMemberDetailsPage from '../../pages/team-member-details';
import SignUpPage from '../../pages/sign-up';
import SignInPage from '../../pages/sign-in';

import { ROUTES } from '../../utils/constants';
import { checkUserAuth } from '../../services/features/user/slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  return (
    <Routes>
      <Route
        path={ROUTES.ourTeam.main}
        element={<OnlyAuth component={<OurTeamPage />} />}
      />
      <Route
        path={`${ROUTES.ourTeam.main}${ROUTES.ourTeam.member}`}
        element={<OnlyAuth component={<TeamMemberDetailsPage />} />}
      />

      <Route
        path={ROUTES.sign.up}
        element={<OnlyUnAuth component={<SignUpPage />} />}
      />
      <Route
        path={ROUTES.sign.in}
        element={<OnlyUnAuth component={<SignInPage />} />}
      />
    </Routes>
  );
}

export default App;
