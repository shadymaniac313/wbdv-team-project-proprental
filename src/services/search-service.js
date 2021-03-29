const ACCESS_TOKEN = "4e6582796dec50bbfda69f32fc04a818";

export const findPropertyByCity = async (cityObject) => {
  return fetch(
    `https://api.bridgedataoutput.com/api/v2/test/listings?access_token=${ACCESS_TOKEN}&City.in=${cityObject.city}`
  ).then((response) => response.json());
};
export const findPropertyDetailsByListingID = async (listingObject) => {
  return fetch(
    `https://api.bridgedataoutput.com/api/v2/test/listings?access_token=${ACCESS_TOKEN}&ListingId.in=${listingObject.ListingId}`
  ).then((response) => response.json());
};
const searchService = {
  findPropertyByCity,
  findPropertyDetailsByListingID,
};
export default searchService;