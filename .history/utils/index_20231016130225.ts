
export async function fetchCars() {
  const headers = {
  
      'X-RapidAPI-Key': 'd198093570msh111884a3e84313fp17684fjsna0d2bdaa96c0',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

   const response =  await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars,' {
    headers: headers
   });
  const result = await response.json();

  return result;
  }
