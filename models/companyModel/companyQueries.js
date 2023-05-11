const getCompanyByName="select * from company where companyName=?"
const getCompanyById="select * from company where companyId=?"
const addCompany="INSERT INTO company (companyName) VALUES(?)"
const getCompanies="select * from company"
export default
{
    getCompanyByName,
    addCompany,
    getCompanyById,
    getCompanies
}