import axios from 'axios';

export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

export const fetchRandomGreeting = () => (dispatch) => {
  return axios.get('/api/greetings')
    .then((response) => {
      dispatch(fetchGreetingSuccess(response.data.greeting));
    })
    .catch((error) => {
      console.error('Error fetching greeting:', error);
    });
};
