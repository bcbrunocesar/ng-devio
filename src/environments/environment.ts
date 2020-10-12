const baseApiUrl: string = 'https://localhost:44321/api/v1';

export const environment = {
  production: false,
  api: {
    accountRegister: `${baseApiUrl}/nova-conta`
  },
  urls: {
    home: '/home'
  }
};
