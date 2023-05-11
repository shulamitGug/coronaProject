const getVaccinationsByUserId2="SELECT firstName,dateReceivingVaccine,companyName,numV FROM vaccinations natural join users natural join company where userId =?"
const addVaccination="INSERT INTO vaccinations (userId, dateReceivingVaccine,companyId,numV) VALUES(?,?,?,?)"
const numOfPeopleDidNotNotGetV="SELECT count(*) as number FROM users WHERE userId NOT IN (SELECT userId FROM vaccinations)"
const getVaccinationsByUserId="select count(*) as num from vaccinations where userId=? "
export default
{
    getVaccinationsByUserId,
    addVaccination,
    numOfPeopleDidNotNotGetV
}