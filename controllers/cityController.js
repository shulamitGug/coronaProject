import { StatusCodes } from "http-status-codes";
import { getCity,addNewCity,showCities} from "../models/cityModel/cityModel.js"
const addCity = async(req,res)=>
{
    const {cityName} = req.body
    const city=await getCity(cityName)
  if(city)
  {
  res.status(StatusCodes.EXPECTATION_FAILED).json({error: "The city is already exist"})
  return;  
 }
  else
  {
    const newCity = await addNewCity(cityName); 
    if(!newCity)
    {
        res.status(StatusCodes.OK).json(city)
        return
    }
    else
    {
        res.status(500).json("errrrr")
    }
  }
}
const getCities = async(req,res)=>
{
  const cities=await showCities()
  if(!cities)
  {
  res.status(StatusCodes.NOT_FOUND).json({error: "err"})
  return
  }
  else
  {
        res.status(StatusCodes.OK).json(cities)
        return
  }   
} 
export
{
    addCity,
    getCities
}