const LOCAL_HOST = "http://localhost:8080/api/";

export const signInService = async (username, password) => {
  return fetch(
    `${LOCAL_HOST}users/authenticate/${username}/${password}`
  ).then((response) => response.json());
};

// export const signUpService = async (
//   firstName,
//   lastName,
//   username,
//   password
// ) => {
//   return true;
// };

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

const userService = {
  signInService,
  signUpService,
};
export default userService;
