// actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// action makers

export const login = (user) => ({
  user: user,
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

// initial state

const initialState = {
  userName: 'Milos',
  isLogged: true,
};

// reducer

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const { user } = action.payload;
      return { ...state, userName: user, isLogged: true };

    case LOGOUT:
      return { ...state, userName: undefined, isLogged: false };

    default:
      return state;
  }
};
