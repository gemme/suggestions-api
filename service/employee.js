const connector = require('../DBConnector');
const Employee = require('../model/employee');
const fs = require('fs');
var path = require('path');

module.exports.loadData = async () => {
    try{
        const db = await connector.getConnection();
        console.log('Connection Succesfuly');
        const buffer = fs.readFileSync(path.join(__dirname, 'data.json'));
        const employees = await Employee.find();
        console.log(employees);
        if(employees.length === 0){
            Employee.create(JSON.parse(buffer.toString()))
                .then(() => {
                    console.log('models created');
                })
                .catch(err => {
                    console.log('models error', err);
                });
        } else {
            console.log('dataset');
        }
    } catch(error){

    }
}