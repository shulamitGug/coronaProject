import { StatusCodes } from "http-status-codes";
import { addUserVaccination,getNumVacc,getNumPeopleDidNotGetYet} from "../models/vaccinationsModel/vaccinationsModel.js"
import { getUserById } from "../models/userModel/userModel.js";
import { getCompanyByName } from "../models/companyModel/companyModel.js";
const addVaccination = async(req,res)=>
{
    const {userId,dateReceivingVaccine,CompanyName } = req.body
    console.log(userId+"kjk");
    const user=await getUserById(userId)
    console.log(user+"sss");
    if(!user)
    {
    res.status(StatusCodes.NOT_FOUND).json({error: "User does not exist"})
    return
    }
  const exist=await getNumVacc(userId)
  console.log(exist.num);
  if(exist.num>3)
  res.status(StatusCodes.EXPECTATION_FAILED).json({error: "User already got 4 Vaccination"})
  else
  {
    const company=await getCompanyByName(CompanyName);
    if(!company)
    {
      res.status(StatusCodes.NOT_FOUND).json({error: "company does not exist"})
    return
    }
    const vacc = await addUserVaccination(userId,dateReceivingVaccine,company.companyId,exist.num+1); 
    if(!vacc)
    {
        res.status(StatusCodes.OK).json(vacc)
        return
    }
    else
    {
        res.status(500).json("errrrr")
    }
  }
}
const getNumPeopleDidNotGet = async(req,res)=>
{
  const res1=await getNumPeopleDidNotGetYet()
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
export
{
    addVaccination,
    getNumPeopleDidNotGet
}