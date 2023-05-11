import ConnectDB from "../../db/connect.js"
import UserQueries from "./userQueries.js"
export const addUser=async(firstName,lastName,id,birthDate,phone,telephone,city,street,buildNum)=>
{
    const pool = ConnectDB.getConnectionPool()
    try {
             const res = (await pool.query(UserQueries.addUserQ,[firstName,lastName,id,birthDate,phone,telephone ,city,street,buildNum]))[0]
             return res;
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const getUserById = async (id) => {
    const pool = ConnectDB.getConnectionPool()
    try {
        const user = (await pool.query(UserQueries.getUserById, [id]))[0]
        return user
    } catch(err) {
        console.log('Error: ', err);
    }
}
export const showUsers =async()=>
{
    let users
    const pool = ConnectDB.getConnectionPool()
    try {
        
             users = (await pool.query(UserQueries.showUsers))
             if(users)
             return users;
        return []
    } catch(err) {
        console.log('Error: ', err);
    }
}
