export const ROUTES = Object.freeze({
  ourTeam: {
    main: '/our-team',
    member: '/members/:id',
  },
  sign: {
    up: '/sign-up',
    in: '/sign-in',
  },
});

export const API = Object.freeze({
  baseUrl: 'https://reqres.in',
  endPoints: {
    register: '/api/register',
    login: '/api/login',
    ourTeam: '/api/users',
  },
});
