export const paths = {
  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  dashboard: {
    root: {
      path: '/',
      getHref: () => '/',
    },
    users: {
      path: '/users',
      getHref: () => '/users',
    },
    userDetail: {
      path: '/users/:id',
      getHref: (id: string | number) => `/users/${id}`,
    },
    process: {
      path: '/process',
      getHref: () => '/process',
    },
    process_id:{
      path: '/process/:id',
      getHref: (id: string | number) => `/process/${id}`,
    },
    visa: {
      path: '/visa',
      getHref: () => '/visa',
    },
  },

  profile: {
    path: '/profile',
    getHref: () => '/profile',
  },

  home: {
    path: '/',
    getHref: () => '/',
  },
} as const;
