import {
    findParcelById,
    findPropertyByCity,
    findPropertyDetailsByListingID,
    findZestimateByParcel
} from "./search-service";


export const findParcelByState = (cityObject) => {
    return fetch(
        `http://localhost:8080/api/properties/state/${cityObject.city}`
    ).then((response) => response.json())
}

const localSearchService = {
    findParcelByState,
};
export default localSearchService;
