 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/Status";

const initialState ={
    user: null,
    //baslangic degeri
    userStatus: STATUS.IDLE,
    token: null,
    logout: false
}

export const getUser = createAsyncThunk("getUser", async () => {
    //cookiden den token alıyor
    const token = document.cookie.split('; ').find(row => row.startsWith('jwt='));
    //kulanıcının bilgisini almak icin istek atıldı ve token gonderildi
   const res = await axios.get('http://localhost:5000/user/profile', {
        headers: {
          Authorization: `jwt ${token.split('=')[1]}`
        }
      });

      return await res.data; 
});

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        
        // Kullanıcı oturumunu sonlandırır ve ilgili verileri null yapar.
        logout: (state, action) => {
            document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; 
            state.logout = true; // Çıkış yapıldığında logout durumunu true yap
            state.token = null; // Token'i null yap
            state.user = null; // Kullanıcı bilgisini null yap
        }
    },
    extraReducers: (builder) =>{

        builder.addCase(getUser.pending, (state, action) => {
            state.userStatus = STATUS.LOADING
        });

        builder.addCase(getUser.fulfilled, (state, action) => {
            state.userStatus = STATUS.SUCCESS
            state.user = action.payload;
        });

        //kulanıcı bilgiisni alırken hata olusa, user null yap
        builder.addCase(getUser.rejected, (state) => {
            state.userStatus = STATUS.FAIL
        });
    }
});

export const { logout } = UserSlice.actions;

export default UserSlice.reducer;




/*
     setToken: (state, action) => {
            state.token = action.payload;
            state.logout = !action.payload; // token null ise logout true yap
        },
*/