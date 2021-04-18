const LOCAL_HOST = "http://localhost:8080/api/";

export const getFavListing = async (userId) => {
  return fetch(`${LOCAL_HOST}listings/user/${userId}`).then((response) =>
    response.json()
  );
};

export const postFavListing = async (userId, listingId) => {
  const newListing = {
    userId: parseInt(userId),
    listingId: parseInt(listingId),
  };

  console.log(newListing, "NEW LISTING");
  const response = await fetch(`${LOCAL_HOST}users/like`, {
    method: "POST",
    body: JSON.stringify(newListing),
    headers: {
      "content-type": "application/json",
    },
  });
  
  return response.ok;
};

export const postUnFavListing = async (userId, listingId) => {
  const newListing = {
    userId: userId,
    listingId: listingId,
  };

  const response = await fetch(`${LOCAL_HOST}users/unlike`, {
    method: "POST",
    body: JSON.stringify(newListing),
    headers: {
      "content-type": "application/json",
    },
  });
  return response.ok;
};

const favService = {
  getFavListing,
  postFavListing,
  postUnFavListing,
};

export default favService;
