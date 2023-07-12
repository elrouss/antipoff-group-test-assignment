export const ROUTES = Object.freeze({
  ourTeam: {
    main: '/antipoff-group-test-assignment',
    member: '/members/:id',
  },
  sign: {
    up: '/antipoff-group-test-assignment/sign-up',
    in: '/antipoff-group-test-assignment/sign-in',
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

// MEDIA QUERIRES (see also scss styles)
export const MEDIA_TABLET = 768;

// CARDS IN SECTION OUR TEAM
export const NUM_CARDS_DESKTOP_INIT = 6;
export const NUM_CARDS_TABLET_INIT = 4;

export const NUM_CARDS_DESKTOP_ADD = 3;
export const NUM_CARDS_TABLET_ADD = 1;
