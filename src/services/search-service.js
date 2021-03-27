export const ACCESS_TOKEN = "6baca547742c6f96a6ff71b138424f21";
const API_URL = `https://api.bridgedataoutput.com/api/v2/test/listings?access_token=${ACCESS_TOKEN}`;

export const findPropertyByCity = (cityName) =>
  fetch(API_URL + `&City.in=${cityName}`).then((response) => response.json());
  // fetch(
  //   "https://api.bridgedataoutput.com/api/v2/test/listings?access_token=4e6582796dec50bbfda69f32fc04a818"
  // ).then((response) => response.json());

export default {
  findPropertyByCity,
};