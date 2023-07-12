import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../../utils/constants';

const checkResponse = (response) =>
  response.ok
    ? response.json()
    : Promise.reject(new Error(`Error ${response.status}`));

export const registerUser = createAsyncThunk('user/register', async (data) => {
  // Because this API is intended for tests,
  // the hard code data is used below for a success response
  let email;
  let password;

  if (data) {
    email = 'eve.holt@reqres.in';
    password = 'pistol';
  }

  const response = await fetch(`${API.baseUrl}${API.endPoints.register}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  return checkResponse(response);
});

export const loginUser = createAsyncThunk('user/login', async (data) => {
  // Because this API is intended for tests,
  // the hard code data is used below for a success response
  let email;
  let password;

  if (data) {
    email = 'eve.holt@reqres.in';
    password = 'cityslicka';
  }

  const response = await fetch(`${API.baseUrl}${API.endPoints.login}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  return checkResponse(response);
});
