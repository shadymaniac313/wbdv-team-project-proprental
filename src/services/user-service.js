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

const fetchUserById = (userId) =>
    fetch(`${LOCAL_HOST}/users/${userId}`)
        .then(response => response.json())

const fetchListingsFromUserid = async (id) => {
    return fetch(`${LOCAL_HOST}listings/user/${id}/`).then((response) =>
        response.json()
    );
};

const fetchPropertiesFromListingId = async (id) => {
    return fetch(`${LOCAL_HOST}properties/listing/${id}/`).then((response) =>
        response.json()
    );
};

const fetchUserByUserId = async (id) => {
    return fetch(`${LOCAL_HOST}users/${id}/`).then((response) =>
        response.json()
    );
}

export const saveUserProfile = async (
    userId,
    firstName,
    lastName,
    username,
    password,
    phone
) => {
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        userType: 1,
        pwd: password,
        username: username,
    };

    const response = await fetch(`${LOCAL_HOST}/users/update/${userId}`, {
        method: "PUT",
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "application/json",
        },
    });
    return response.ok;
};

const userService = {
    saveUserProfile,
    signInService,
    signUpService,
    fetchListingsFromUserid,
    fetchPropertiesFromListingId,
    fetchUserByUserId,
    fetchUserById
};

export default userService;
