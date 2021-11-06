const connector = require('../DBConnector');
const Employee = require('../model/employee');
const Suggestion = require('../model/suggestion');

module.exports.generate = async () => {
    const connected = await connector.getConnection();
    if(!connected) return;

    // queries are limited
    // const suggestions = await Employee.find(
    //     {},
    //     ['FirstName']
    // );
    const suggestions = await Employee.aggregate([
        {
            $group: {
                _id: '$FirstName',
                firstName: { "$first": "$FirstName" },
                count: { $sum: 1 } 
            } ,
        },
        // project
        {
            $project: {
                description: '$firstName',
                category: 'autocomplete',
                filter: 'keyword',
                count: '$count'
            }
        }
    ])
    // console.log(suggestions);
    return suggestions;  
};