import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  }, 
  headers: {
    'X-RapidAPI-Key': 'a4d2331decmshdc8549e75ec3fc0p17b273jsn2b25ca44f7ef',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const api = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};






