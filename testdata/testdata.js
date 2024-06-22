const LOGIN_USERS = {
    STANDARD_USER: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
    INVALID_USER: {
      username: 'alice@example.com',
      password: '10203040',
      message: 'Username and password do not match any user in this service.',
    },
    LOCKED_USER: {
      username: 'locked_out_user',
      password: 'secret_sauce',
      message: 'Sorry, this user has been locked out.',
    },
    NO_CREDENTIALS: {
      username: '',
      password: '',
      message: 'Username is required',
    },
    NO_PASSWORD: {
      username: 'bob@example.com',
      password: '',
      message: 'Password is required',
    },
  };
  
  module.exports = { LOGIN_USERS };
  