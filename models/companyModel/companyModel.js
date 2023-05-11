import ConnectDB from "../../db/connect.js"
import companyQueries from "./companyQueries.js"
export const getCompanyByName=async(Name)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const city= (await pool.query(companyQueries.getCompanyByName, [Name]))[0]
             return city;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const getCompanyById=async(id)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const c= (await pool.query(companyQueries.getCompanyById, [id]))[0]
             return c;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const addNewCompany=async(name)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        
        const res = (await pool.query(companyQueries.addCompany,[name]))[0]
        return res;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const showCompanies=async(id)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const coms= (await pool.query(companyQueries.getCompanies))
             return coms;
    } catch(err) {
        console.log('Error: ', err);
    }
}