import ConnectDB from "../../db/connect.js"
import patientQueries from "./patientQueries.js"
export const addNewPatient=async(userId,recoveryDate,DateReceivingPositiveResult)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const res = (await pool.query(patientQueries.addPatient,[userId,recoveryDate,DateReceivingPositiveResult]))[0]
        return res;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const getPatient=async(userId)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const pat= (await pool.query(patientQueries.getPatient, [userId]))[0]
             return pat;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const numOfPatientINMonth=async()=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        const num=(await pool.query(patientQueries.numOfPatientInMonth))
             return num;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const showPatients =async()=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
        
            const patients = (await pool.query(patientQueries.getAllPatients))
             if(patients)
             return patients;
        return []
    } catch(err) {
        console.log('Error: ', err);
    }
}