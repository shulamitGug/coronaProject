const getPatientByUserId="SELECT userName,phone,recoveryDate,DateReceivingPositiveResult FROM patient natural join users where userId =?"
const addPatient="INSERT INTO patient (userId, recoveryDate,DateReceivingPositiveResult) VALUES(?,?,?)"
const getAllPatients="SELECT firstName,lastName,phone,recoveryDate,DateReceivingPositiveResult FROM patient natural join users"
const getPatient="select * from patient where userId=?"
const numOfPatientInMonth="SELECT date_range.date, COUNT(patient.patientId) AS active_patients FROM (SELECT DATE(DateReceivingPositiveResult + INTERVAL n DAY) AS date FROM patient, (SELECT a + b * 10 AS n FROM (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS units, (SELECT 0 AS b UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) AS tens WHERE (a + b * 10) < DATEDIFF(CURDATE(), CURDATE() - INTERVAL 1 MONTH) + 1 ) AS numbers) AS date_range LEFT JOIN patient  ON date_range.date BETWEEN patient.DateReceivingPositiveResult AND patient.recoveryDate GROUP BY date_range.date order by date"

export default
{
    addPatient,
    getPatientByUserId,
    getAllPatients,
    getPatient,
    numOfPatientInMonth
}