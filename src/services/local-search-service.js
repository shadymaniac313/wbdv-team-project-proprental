
export const findParcelByState = (cityObject) => {
    return fetch(
        `http://localhost:8080/api/properties/state/${cityObject.city}`
    ).then((response) => response.json())
}

export const findParcelById = (id) => {
    return fetch(`http://localhost:8080/api/properties/${id}`)
        .then((response) => response.json())
}

const localSearchService = {
    findParcelByState,
    findParcelById
};
export default localSearchService;
