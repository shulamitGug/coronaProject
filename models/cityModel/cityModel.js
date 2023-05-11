import ConnectDB from "../../db/connect.js"
import cityQueries from "./cityQueries.js"
export const getCity=async(cityName)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const city= (await pool.query(cityQueries.getCity, [cityName]))[0]
             return city;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const getCityName=async(id)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const city= (await pool.query(cityQueries.getCityName, [id]))[0]
             return city;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const addNewCity=async(cityName)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const res = (await pool.query(cityQueries.addCity,[cityName]))[0]
        return res;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const showCities=async(id)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const city= (await pool.query(cityQueries.getCities))
             return city;
    } catch(err) {
        console.log('Error: ', err);
    }
}