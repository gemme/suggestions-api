const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  "FaDocId": {
    "type": "Number"
  },
  "_fndIndex.raw": {
    "type": "String"
  },
  "Salutation": {
    "type": "String"
  },
  "FirstName": {
    "type": "String"
  },
  "MiddleName": {
    "type": "String"
  },
  "LastName": {
    "type": "String"
  },
  "Email": {
    "type": "String"
  },
  "City": {
    "US": {
      "type": "String"
    },
    "AR": {
      "type": "String"
    },
    "KO": {
      "type": "String"
    }
  },
  "Region": {
    "US": {
      "type": "String"
    },
    "AR": {
      "type": "String"
    },
    "KO": {
      "type": "String"
    }
  },
  "State": {
    "US": {
      "type": "String"
    },
    "AR": {
      "type": "String"
    },
    "KO": {
      "type": "String"
    }
  },
  "Country": {
    "US": {
      "type": "String"
    },
    "AR": {
      "type": "String"
    },
    "KO": {
      "type": "String"
    }
  },
  "DateOfBirth": {
    "type": "Date"
  },
  "StartDate": {
    "type": "Date"
  },
  "Gender": {
    "type": "String"
  },
  "CreatedBy": {
    "type": "String"
  },
  "LastUpdatedBy": {
    "type": "String"
  },
  "CreationDate": {
    "type": "Date"
  },
  "LastUpdateDate": {
    "type": "Date"
  },
  "Position": {
    "type": "String"
  },
  "PositionLevel": {
    "type": "String"
  },
  "Directs": {
    "type": "Number"
  },
  "Total": {
    "type": "Number"
  },
  "Salary": {
    "type": "Number"
  },
  "Award": {
    "type": "String"
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);