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
  return true;
};

const userService = {
  signInService,
  signUpService,
};
export default userService;
