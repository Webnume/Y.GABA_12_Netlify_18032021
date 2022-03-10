import axios from "axios";

import * as mockedData from "./mockedData";

const useMockedData = true; // if mocked data set to true

const baseURL = "http://localhost:3000/user/";
// const baseURL = "https://calm-gorge-80201.herokuapp.com/user/";

let currentUser;

/**
 * setting of current user id
 * @param {number} value
 */
function setCurrentUser(value) {
  currentUser = value;
}

const getMockedUserById = (id) => {
  return mockedData.USER_MAIN_DATA.find((user) => user.id === id);
};

/**
 * @param {number} id
 */
const getMockedUserActivityById = (id) => {
  return mockedData.USER_ACTIVITY.find(
    (userActivity) => userActivity.userId === id
  );
};

/**
 * @param {number} id
 */
const getMockedUserAverageSession = (id) => {
  return mockedData.USER_AVERAGE_SESSIONS.find(
    (userActivity) => userActivity.userId === id
  );
};

/**
 * @param {number} id
 */
const getMockedUserPerformance = (id) => {
  return mockedData.USER_PERFORMANCE.find(
    (userPerformance) => userPerformance.userId === id
  );
};

async function fetchWithAxios(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("il y a une erreur", error);
    throw error;
  }
}

/**
 *
 * @returns {Promise} Promise object represents user data
 */
async function getWelcomeTitleData() {
  console.log(currentUser);
  // console.log("getWelcome",await findMockedData(getMockedUserById(12)))
  return !useMockedData
    ? fetchWithAxios(baseURL + currentUser)
    : getMockedUserById(+currentUser);
  // {
  //     data: getMockedUserById(12),
  //   };
}

/**
 *
 * @returns {Promise} Promise object represents user data
 */
async function getBarCharData() {
  return !useMockedData
    ? fetchWithAxios(baseURL + currentUser + "/activity")
    : getMockedUserActivityById(+currentUser);
}

/**
 *
 * @returns {Promise} Promise object represents user data
 */
async function getLineCharData() {
  return !useMockedData
    ? fetchWithAxios(baseURL + currentUser + "/average-sessions")
    : getMockedUserAverageSession(+currentUser);
}

/**
 *
 * @returns {Promise} Promise object represents user data
 */
async function getRadarCharData() {
  return !useMockedData
    ? fetchWithAxios(baseURL + currentUser + "/performance")
    : getMockedUserPerformance(+currentUser);
}

export {
  getWelcomeTitleData,
  getBarCharData,
  getLineCharData,
  getRadarCharData,
  setCurrentUser,
};
