// import ACCESS_TOKEN from '../constants';

// #https://api.bridgedataoutput.com/api/v2/test/listings?access_token=6baca547742c6f96a6ff71b138424f21

const ACCESS_TOKEN = "6baca547742c6f96a6ff71b138424f21";
export const fetchSix = async () => {
    return fetch(
        `https://api.bridgedataoutput.com/api/v2/test/listings?access_token=${ACCESS_TOKEN}`
    ).then((response) => response.json());
}

export const getPropertyByID = async (ListingID) => {

}

const homepageService = {
    fetchSix,
    getPropertyByID
};
export default homepageService;