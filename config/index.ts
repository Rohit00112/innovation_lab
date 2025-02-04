interface Config {
  api: {
    baseURL: string;
    timeout: number;
    endpoints: {
      auth: {
        login: string;
        register: string;
        logout: string;
        refresh: string;
      };
      programs: {
        list: string;
        detail: string;
        create: string;
        update: string;
        delete: string;
      };
      projects: {
        list: string;
        detail: string;
        create: string;
        update: string;
        delete: string;
      };
      resources: {
        list: string;
        detail: string;
        create: string;
        update: string;
        delete: string;
      };
      events: {
        list: string;
        detail: string;
        create: string;
        update: string;
        delete: string;
      };
      blog: {
        list: string;
        detail: string;
        create: string;
        update: string;
        delete: string;
      };
    };
  };
  auth: {
    tokenKey: string;
    refreshTokenKey: string;
  };
}

const config: Config = {
  api: {
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
    timeout: 10000,
    endpoints: {
      auth: {
        login: '/auth/login',
        register: '/auth/register',
        logout: '/auth/logout',
        refresh: '/auth/refresh',
      },
      programs: {
        list: '/programs',
        detail: '/programs/:id',
        create: '/programs',
        update: '/programs/:id',
        delete: '/programs/:id',
      },
      projects: {
        list: '/projects',
        detail: '/projects/:id',
        create: '/projects',
        update: '/projects/:id',
        delete: '/projects/:id',
      },
      resources: {
        list: '/resources',
        detail: '/resources/:id',
        create: '/resources',
        update: '/resources/:id',
        delete: '/resources/:id',
      },
      events: {
        list: '/events',
        detail: '/events/:id',
        create: '/events',
        update: '/events/:id',
        delete: '/events/:id',
      },
      blog: {
        list: '/blog',
        detail: '/blog/:id',
        create: '/blog',
        update: '/blog/:id',
        delete: '/blog/:id',
      },
    },
  },
  auth: {
    tokenKey: 'auth_token',
    refreshTokenKey: 'refresh_token',
  },
};

export default config;