export const ACCESS_TOKEN = "6baca547742c6f96a6ff71b138424f21";

export const findPropertyByCity = async (cityObject) => {
  return fetch(
    `https://api.bridgedataoutput.com/api/v2/test/listings?access_token=${ACCESS_TOKEN}&City.in=${cityObject.city}`
  ).then((response) => response.json());
};

const searchService = {
  findPropertyByCity,
};

export default searchService;
