const LOCAL_HOST = "http://localhost:8080/api/";

export const findParcelByState = (cityObject) => {
    return fetch(
        `${LOCAL_HOST}properties/state/${cityObject.city}`
    ).then((response) => response.json());
};

export const findParcelById = (Object) => {
    return fetch(`${LOCAL_HOST}properties/${Object.ListingId}`).then((response) =>
        response.json()
    );
};

export const findAgentId = (Object) => {
    return fetch(`${LOCAL_HOST}listings/${Object.ListingId}`).then((response) =>
        response.json()
    );
};

export const findPriceByListingId = (listingId) => fetch(`${LOCAL_HOST}listings/${listingId}`)
    .then(price => price.json())

export const findPropertiesByListing = (Object) => {
    return fetch(
        `${LOCAL_HOST}properties/listing/${Object.ListingId}`
    ).then((response) => response.json());
};

const localSearchService = {
    findParcelByState,
    findParcelById,
    findAgentId,
    findPropertiesByListing,
    findPriceByListingId
};
export default localSearchService;
