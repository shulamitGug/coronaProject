import { StatusCodes } from "http-status-codes";
import { getPatient,addNewPatient, showPatients,numOfPatientINMonth} from "../models/patientsModel/patientModel.js"
import { getUserById } from "../models/userModel/userModel.js";
const addPatient = async(req,res)=>
{
  const {userId,recoveryDate,DateReceivingPositiveResult } = req.body
  if(recoveryDate<DateReceivingPositiveResult)
  {
    res.status(StatusCodes.notValid).json({error: "recovery Date can not be befor the Date of Receiving Positive Result "})
    return;  
  }

    const user=await getUserById(userId)

    if(!user)
    {
    res.status(StatusCodes.NOT_FOUND).json({error: "User does not exist"})
    return;
    }
  const exist=await getPatient(userId)

  if(exist)
  {
  res.status(StatusCodes.EXPECTATION_FAILED).json({error: "The user has been sick before"})
  return;
  }
  else
  {
    const patient = await addNewPatient(userId,recoveryDate,DateReceivingPositiveResult); 
    if(!patient)
    {
        res.status(StatusCodes.OK).json(patient)
        return
    }
    else
    {
        res.status(500).json("cant add")
        return
    }
  }
}
const getPatientByUserId = async(req,res)=>
{
  const {userId}=req.body
  const patient=await getPatient(userId)
  if(!patient)
  {
  res.status(StatusCodes.NOT_FOUND).json({error: "patient does not exists"})
  return
  }
  else
  {
        res.status(StatusCodes.OK).json(patient)
        return
  }   
} 
const getPatients = async(req,res)=>
{
  const patients=await showPatients()
  if(!patients)
  {
  res.status(StatusCodes.NOT_FOUND).json({error: "err"})
  return
  }
  else
  {
        res.status(StatusCodes.OK).json(patients)
        return
  }   
} 
const getNumOfPatInMonth = async(req,res)=>
{
  const numbers=await numOfPatientINMonth()
  if(!numbers)
  {
  res.status(StatusCodes.NOT_FOUND).json({error: "failed"})
  return
  }
  else
  {
        res.status(StatusCodes.OK).json(numbers)
        return
  }   
} 
export
{
    addPatient,
    getPatientByUserId,
    getPatients,
    getNumOfPatInMonth
}