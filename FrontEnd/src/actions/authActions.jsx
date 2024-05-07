export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const user = await response.json();
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});