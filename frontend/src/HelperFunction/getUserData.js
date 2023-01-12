import UserData from "TestData/UserData.json";

function getUserData(username) {
  if (!UserData) return -1;
  for (let i = 0; i < UserData.length; i++) {
    if (UserData[i].username === username) return UserData[i];
  }
  return -1;
}

export default getUserData;
