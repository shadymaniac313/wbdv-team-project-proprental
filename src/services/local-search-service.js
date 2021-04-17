
export const findParcelByState = (cityObject) => {
    return fetch(
        `http://localhost:8080/api/properties/state/${cityObject.city}`
    ).then((response) => response.json())
}


export const findParcelById = (Object) => {
    return fetch(`http://localhost:8080/api/properties/${Object.ListingId}`)
        .then((response) => response.json())
}

const localSearchService = {
    findParcelByState,
    findParcelById
};
export default localSearchService;
