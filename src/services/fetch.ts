const fetchAPI = async () => {
  try {
    const URL_API =
      'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';
    const response = await fetch(URL_API);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Ops, algo de errado não deu certo');
  }
};

export default fetchAPI;
