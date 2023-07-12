const authMiddleware = () => (next) => (action) => {
  if (
    ['user/register/fulfilled', 'user/login/fulfilled'].includes(action.type)
  ) {
    localStorage.setItem('token', action.payload.token);
  }

  if (action.type === 'user/logout/fulfilled') {
    localStorage.removeItem('token');
  }

  return next(action);
};

export default authMiddleware;
