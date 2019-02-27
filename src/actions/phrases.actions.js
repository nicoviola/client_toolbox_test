import axios from 'axios'


export const ADD_PHRASE = 'ADD_PHRASE'
const apiUrl = 'http://localhost:3000/phrase';
const x_api_key = '33a4c9ed29834ea980285af1b039ae5c';
const headers = {"x-api-key": x_api_key}
const instance = axios.create({
    baseURL: apiUrl,
    timeout: 1000,
    headers: headers
  });

 
export const addNewPhrase = (newPhrase) => {
  return (dispatch) => {
    instance.post(`${apiUrl}/`, {phrase: newPhrase} )
      .then(data => {
        dispatch({
          type: ADD_PHRASE,
          payload: data.data.data.phrase
        })
      })
  }
}