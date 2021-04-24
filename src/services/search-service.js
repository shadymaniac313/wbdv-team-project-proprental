const ACCESS_TOKEN = "648679b5d364e730a3d1d50afc2c21fc";

// https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=648679b5d364e730a3d1d50afc2c21fc&address.state=Destineyhaven&building.bedrooms.gt=0

export const findPropertyByCity = async (cityObject) => {
  return fetch(
    `https://api.bridgedataoutput.com/api/v2/test/listings?access_token=${ACCESS_TOKEN}&City.in=${cityObject.city}`
  ).then((response) => response.json());
};

export const findParcelByState = async (cityObject) => {
  return fetch(
    `https://api.bridgedataoutput.com/api/v2/pub/parcels?access_token=${ACCESS_TOKEN}&address.state=${cityObject.city}&building.bedrooms.gt=0`
  ).then((response) => response.json());
};

export const findZestimateByParcel = (parcelId) =>
  fetch(
    `https://api.bridgedataoutput.com/api/v2/zestimates?access_token=${ACCESS_TOKEN}&id=${[
      parcelId,
    ]}`
  ).then((response) => response.json());

export const findParcelById = async (parcelObject) =>
  fetch(
    `https://api.bridgedataoutput.com/api/v2/pub/parcels/${parcelObject.ListingId}?access_token=${ACCESS_TOKEN}`
  ).then((response) => response.json());

export const findPropertyDetailsByListingID = async (listingObject) => {
  return fetch(
    `https://api.bridgedataoutput.com/api/v2/test/listings?access_token=${ACCESS_TOKEN}&ListingId.in=${listingObject.ListingId}`
  ).then((response) => response.json());
};

export const findPropertyByListingID = async (listingObject) => {
  return fetch(
    `https://api.bridgedataoutput.com/api/v2/zestimates?access_token=${ACCESS_TOKEN}&id=${listingObject.ListingId}`
  ).then((response) => response.json());
};

const searchService = {
  findPropertyByCity,
  findPropertyDetailsByListingID,
  findParcelByState,
  findZestimateByParcel,
  findParcelById,
  findPropertyByListingID,
};
export default searchService;
