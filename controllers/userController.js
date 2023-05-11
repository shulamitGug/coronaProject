import { StatusCodes } from "http-status-codes";
import { addUser,getUserById,showUsers} from "../models/userModel/userModel.js"
import {getCity} from "../models/cityModel/cityModel.js"
const addNewUser = async(req,res)=>
{
  const {firstName,lastName,phone,telephone,userId,birthDate,cityName,street,buildingNumber } = req.body
  if(userId<100000000||userId>999999999)
  {
    res.status(StatusCodes.notValid).json({error: "User id is not valid"})
    return;
  }
  const exist=await getUserById(userId)
  if(exist)
  {
  res.status(StatusCodes.NOT_FOUND).json({error: "User is already exists"})
  return;
  }
  else
  {
    const myCity=await getCity(cityName);
    if(!myCity)
    {
    res.status(StatusCodes.NOT_FOUND).json({error: "We have no deliveries to this city"})
    return;
    }
    const user = await addUser(firstName,lastName,userId,birthDate,phone,telephone,myCity.cityId,street,buildingNumber); 
    if(!user)
    {
        res.status(StatusCodes.OK).json(user)
        return
    }
    else
    {
        res.status(500).json("errrrr")
        return
    }
  }
}
const getAllUsers = async(req,res)=>
{
  const res1=await showUsers()
  if(!res1)
  {
  res.status(StatusCodes.NOT_FOUND).json({error: "User is not exists"})
  return
  }
  else
  {
        res.status(StatusCodes.OK).json(res1)
        return
  }   
} 
const getDetailUserById = async(req,res)=>
{
    const {userId}=req.body;
  const user=await getUserById(userId)
  if(!user)
  {
  res.status(StatusCodes.NOT_FOUND).json({error: "User does not exists"})
  return
  }
  else
  {
        res.status(StatusCodes.OK).json(user)
        return
  }   
}  
export {
    addNewUser,
    getAllUsers,
    getDetailUserById
}
