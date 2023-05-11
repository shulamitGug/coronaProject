import { StatusCodes } from "http-status-codes";
import { getCompanyByName,addNewCompany,showCompanies} from "../models/companyModel/companyModel.js"
const addCompany = async(req,res)=>
{
    const {companyName} = req.body
    const comp=await getCompanyByName(companyName)
  if(comp)
  {
  res.status(StatusCodes.EXPECTATION_FAILED).json({error: "The company is already exist"})
  return;
  }else
  {
    const newComp = await addNewCompany(companyName); 
    if(!newComp)
    {
        res.status(StatusCodes.OK).json(newComp)
        return
    }
    else
    {
        res.status(500).json("errrrr")
    }
  }
}
const getCompanies = async(req,res)=>
{
  const company=await showCompanies()
  if(!company)
  {
  res.status(StatusCodes.NOT_FOUND).json({error: "err"})
  return
  }
  else
  {
        res.status(StatusCodes.OK).json(company)
        return
  }   
} 
export
{
    addCompany,
    getCompanies
}