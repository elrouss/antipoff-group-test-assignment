export const ROUTES = Object.freeze({
  ourTeam: {
    main: '/our-team',
    member: '/our-team/:id',
  },
  sign: {
    up: '/register',
    in: '/login',
  },
});

export const API = Object.freeze({
  baseUrl: 'https://reqres.in',
  endPoints: {
    ourTeam: '/api/users',
  },
});
