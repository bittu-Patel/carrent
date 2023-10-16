const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd198093570msh111884a3e84313fp17684fjsna0d2bdaa96c0',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

export async function fetchCars() {
  const headers = {
    headers: {
      'X-RapidAPI-Key': 'd198093570msh111884a3e84313fp17684fjsna0d2bdaa96c0',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response =  await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

  }
}