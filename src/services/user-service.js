const LOCAL_HOST = "http://localhost:8080/api/";

export const signInService = async (username, password) => {
  return fetch(
    `${LOCAL_HOST}users/authenticate/${username}/${password}`
  ).then((response) => response.json());
};

export const signUpService = async (
  firstName,
  lastName,
  username,
  password
) => {
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    phone: "12345",
    userType: 1,
    pwd: password,
    username: username,
  };

  const response = await fetch(`${LOCAL_HOST}users/create`, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "content-type": "application/json",
    },
  });
  return response.ok;
};

const fetchListingsFromUserid = async (id) => {
  return fetch(`${LOCAL_HOST}listings/user/${id}/`)
      .then((response) => response.json());
}

const fetchPropertiesFromListingId = async (id) => {
  return fetch(`${LOCAL_HOST}properties/listing/${id}/`)
      .then((response) => response.json());
}

// Favourite services Here
const fetchFavouritePropertyByUserId = async (id) => {
  return fetch(`${LOCAL_HOST}listings/user/${id}`)
    .then((response) => response.json())
}



export const addFavourite = async (
  userId,
  ListingId
) => {
  const newFav = {
    userId: userId,
    listingId: ListingId,
  };

  const response = await fetch(`${LOCAL_HOST}users/like`, {
    method: "POST",
    body: JSON.stringify(newFav),
    headers: {
      "content-type": "application/json",
      
    },
  });
  return response.ok;
};



const userService = {
  signInService,
  signUpService,
  fetchListingsFromUserid,
  fetchPropertiesFromListingId,
  fetchFavouritePropertyByUserId,
  addFavourite
};


export default userService;
