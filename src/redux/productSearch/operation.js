import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const search = createAsyncThunk('product/search', async product => {
    try {
        const { data } = await axios.get(`/product?search=${product}`);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});