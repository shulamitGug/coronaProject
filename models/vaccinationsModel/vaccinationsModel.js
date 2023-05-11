import ConnectDB from "../../db/connect.js"
import vaccinationsQueries from "./vaccinationsQueries.js"
export const addUserVaccination=async(userId,dateReceivingVaccine,manufacturer,numV)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const res = (await pool.query(vaccinationsQueries.addVaccination,[userId,dateReceivingVaccine,manufacturer,numV]))[0]
        return res;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const getNumVacc=async(userId)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const vac= (await pool.query(vaccinationsQueries.getVaccinationsByUserId, [userId]))[0]
             return vac;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const getNumPeopleDidNotGetYet=async()=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const vac= (await pool.query(vaccinationsQueries.numOfPeopleDidNotNotGetV))
        return vac;
    } catch(err) {
        console.log('Error: ', err);
    }
}