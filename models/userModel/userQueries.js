
const showUsers="SELECT userId,firstName,lastName,phone,telephone,birthDate,street,cityName FROM users natural join city"
const getUserById = "SELECT userId,firstName,lastName,phone,telephone,birthDate,street,cityName FROM users natural join city where userId=?"
const addUserQ="INSERT INTO users (firstName, lastName,userId,birthDate,phone,telephone,cityId,street,buildingNumber) VALUES(?,?,?,?,?,?,?,?,?)"
export default {
    showUsers,
    addUserQ,
    getUserById
}
