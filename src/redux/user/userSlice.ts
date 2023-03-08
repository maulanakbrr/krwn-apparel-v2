import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

export type CurrentUserType = {
  displayName: string
}

export type UserState = {
  currentUser: CurrentUserType | null
}

const initialState: UserState = {
  currentUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    unsubscribe: (state) => {
      onAuthStateChangedListener((user: any) => {
        // console.log('USER:: ', user)
        if (user) {
          createUserDocumentFromAuth(user)
        }
        state.currentUser = user
      })
    },
    setUser: (state, action) => {
      if (action.payload) {
        state.currentUser = action.payload
      } else {
        state.currentUser = null
      }
    }
  }
})

export const { unsubscribe, setUser } = userSlice.actions

export default userSlice.reducer