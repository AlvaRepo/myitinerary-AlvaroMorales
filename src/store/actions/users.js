import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl.js";

const read_6_users = createAsyncThunk(
    'read_6_users',
    async () => {
        try {
            let users = await axios(apiUrl + 'users');
            console.log(users.data.response);
            return {
                users: users.data.response
            };
        } catch (error) {
            console.log(error);
            return {
                users: []
            };
        }
    }
);
const signin = createAsyncThunk(
    'signin',
    async (obj) => {
        try {
            let data = await axios.post(apiUrl+'auth/signin', obj.data)
            console.log(data.data.response)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
                
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)
const signin_token = createAsyncThunk (
    'signin_token',
    async ()=> {
        try {
            let token = localStorage.getItem ('token')
            let authorization = { headers: {'Authorization' : `Bearer ${token}`} }
            let data = await axios.post(apiUrl+'auth/token', null, authorization)
            console.log(data)
            localStorage.setItem('token', data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
                
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: ''
            }
        }
    }
)
const signout = createAsyncThunk (
    'signout',
    async ()=> {
        try {
            let token = localStorage.getItem ('token')
            let authorization = { headers: {'Authorization' : `Bearer ${token}`} }
            let data = await axios.post(apiUrl+'auth/token', null, authorization)
            console.log(data)
            localStorage.removeItem('token', data.data.response.token)
            return {
                user: {},
                token: '',
                
            }
        } catch (error) {
            console.log(error)
            return {
                user: {},
                token: '',
            }
        }
    }
)
const user_actions = { read_6_users, signin, signin_token, signout };
export default user_actions;
