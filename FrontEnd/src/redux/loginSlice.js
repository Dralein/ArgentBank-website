import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userToken: null,
    userProfil: null,
    loading: false,
  },
  reducers: {
    //Action pour connecter l'utilisateur
    loginUser: (state, action) => {
      state.userToken = action.payload; // Stockera les informations avec dispatch
      state.loading = true;
    },
    // Action pour déconnecter l'utilisateur
    logoutUser: (state) => {
      state.userToken = null; // Remet a zéro les information user
      state.userProfil = null;
      state.loading = false; // Set loading to false on logout
    },
    //Action pour stoker les données utilisateur
    infoUser: (state, action) => {
      state.userProfil = action.payload; // Stockera les informations avec dispatch
      state.loading = false; // Set loading to false when user profile is updated
    },
    //Action pour stoker les données utilisateur
    infoUserName: (state, action) => {
      state.userProfil.userName = action.payload; // Stockera les informations avec dispatch
    },
  },
});

export const { loginUser, logoutUser, infoUser, infoUserName } =
  loginSlice.actions;

export default loginSlice;