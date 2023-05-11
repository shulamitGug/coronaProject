const getCity="select * from city where cityName=?"
const getCityName="select * from city where cityId=?"
const getCities="select * from city"
const addCity="INSERT INTO city (cityName) VALUES(?)"
export default
{
    getCity,
    addCity,
    getCityName,
    getCities
}