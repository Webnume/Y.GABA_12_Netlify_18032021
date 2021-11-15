import axios from "axios";

const baseURL = "http://localhost:3000/user/";

let currentUser;

/**
 * setting of current user id
 * @param {number} value
 */
function setCurrentUser(value) {
  currentUser = value;
}

/**
 *
 * @returns {Promise} Promise object represents user data
 */
async function getWelcomeTitleData() {
  try {
    const response = await axios.get(baseURL + currentUser);
    return response.data;
  } catch (error) {
    console.error("il y a une erreur", error);
    throw error;
  }
}

/**
 *
 * @returns {Promise} Promise object represents user data
 */
async function getBarCharData() {
  try {
    const response = await axios.get(baseURL + currentUser + "/activity");
    return response.data;
  } catch (error) {
    console.error("il y a une erreur", error);
    throw error;
  }
}

/**
 *
 * @returns {Promise} Promise object represents user data
 */
async function getLineCharData() {
  try {
    const response = await axios.get(baseURL + currentUser + "/average-sessions");
    return response.data;
  } catch (error) {
    console.error("il y a une erreur", error);
    throw error;
  }
}

/**
 *
 * @returns {Promise} Promise object represents user data
 */
async function getRadarCharData() {
  try {
    const response = await axios.get(baseURL + currentUser + "/performance");
    return response.data;
  } catch (error) {
    console.error("il y a une erreur", error);
    throw error;
  }
}

export {
  getWelcomeTitleData,
  getBarCharData,
  getLineCharData,
  getRadarCharData,
  setCurrentUser,
};
