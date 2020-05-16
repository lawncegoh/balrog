var request = require('request');

// Get ID Document
var options = {
  'method': 'GET',
  'url': 'https://razerhackathon.sandbox.mambu.com/api/settings/iddocumenttemplates',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic VGVhbTY0OnBhc3MyNzgyOTU2Qzk=',
    'Cookie': 'AWSALB=Zy0zpWUeWGMkZP7+HSl3Lr5Bwv0gMCT6MaykSIJKKsic27c2rWy08vMl/hLnN7dYugu9y1f//9leCyTTFUewXBQYesoV9UOGdsPnmE69l5kvCbUC3E9lySJFh1lJ; AWSALBCORS=Zy0zpWUeWGMkZP7+HSl3Lr5Bwv0gMCT6MaykSIJKKsic27c2rWy08vMl/hLnN7dYugu9y1f//9leCyTTFUewXBQYesoV9UOGdsPnmE69l5kvCbUC3E9lySJFh1lJ'
  }
};

const getIDDocument = (req, res) => {request(options, (error, results) => { 
  if (error) {
    console.log('hereeeeeeeeeeeee')
    res.status(400).send('Unable.....')
    throw new Error(error)
  
  };
  res.status(200).send(results.body)
})};

// Get Transaction Channels
var transactionChannelsOptions = {
  'method': 'GET',
  'url': 'https://razerhackathon.sandbox.mambu.com/api/transactionchannels\n',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic VGVhbTY0OnBhc3MyNzgyOTU2Qzk=',
    'Cookie': 'AWSALB=ZW8SRVg4rOYTabBUmdCz4DakFlSE4xzosVPkvtxlwdyJA/UiSRnpm1oFdW2AddbmaV5LAOKTGa6mr+Ovvzk+YUlsc9WBKs0w3jzmoffpDy/a76GAhNo+SSfmb4mv; AWSALBCORS=ZW8SRVg4rOYTabBUmdCz4DakFlSE4xzosVPkvtxlwdyJA/UiSRnpm1oFdW2AddbmaV5LAOKTGa6mr+Ovvzk+YUlsc9WBKs0w3jzmoffpDy/a76GAhNo+SSfmb4mv'
  }
};
const getTransactionChannels = (req, res) => request(transactionChannelsOptions, function (error, response) { 
  if (error) throw new Error(error);
  res.status(200).send(response.body)
});

// Get Branch ID
var getBranchIdOptions = {
'method': 'GET',
'url': 'https://razerhackathon.sandbox.mambu.com/api/branches/Team64',
'headers': {
  'Content-Type': 'application/json',
  'Authorization': 'Basic VGVhbTY0OnBhc3MyNzgyOTU2Qzk=',
  'Cookie': 'AWSALB=iuSX9Zu808NnP+lwG/c58KW8/SBfDIVPc29JeMz+Wc3QRP3Ue3ny6rwkXwYIk4L4mLhWwvjPyvroAJ0FnZ+bNy6cM3xISIMyf+2LeZooJd11kV8aSmji5XfxxfwB; AWSALBCORS=iuSX9Zu808NnP+lwG/c58KW8/SBfDIVPc29JeMz+Wc3QRP3Ue3ny6rwkXwYIk4L4mLhWwvjPyvroAJ0FnZ+bNy6cM3xISIMyf+2LeZooJd11kV8aSmji5XfxxfwB'
}
};

const getBranchID = (req, res) => {
  request(getBranchIdOptions, function (error, response) { 
    if (error) throw new Error(error);
    // console.log(response)
    // console.log(response.body);
    res.status(200).send(response.body)
  });    
}

// Create Client Account
var clientAccountOptions = {
  'method': 'POST',
  'url': 'https://razerhackathon.sandbox.mambu.com/api/groups',
  'headers': {
    'Content-Type': ['application/json', 'application/json'],
    'Authorization': 'Basic VGVhbTY0OnBhc3MyNzgyOTU2Qzk=',
    'Cookie': 'AWSALB=OlueeFKW8e+aMPsY4BwWmPLPUAzuIg+G51b0wGfiOR8EbcVGvl5Shl78zz6MPvebGiu748qU5rZ2eDY9n4hCc24LXKlryc5vIkDEH6Smp6JbUrSIRZYJPANMrlXa; AWSALBCORS=OlueeFKW8e+aMPsY4BwWmPLPUAzuIg+G51b0wGfiOR8EbcVGvl5Shl78zz6MPvebGiu748qU5rZ2eDY9n4hCc24LXKlryc5vIkDEH6Smp6JbUrSIRZYJPANMrlXa'
  },
  body: ''
};
const createSMEAccount = (req, res) => {
  clientAccountOptions.body = JSON.stringify(req.body);

  request(clientAccountOptions, function (error, response) { 
  if (error) throw new Error(error);
  // console.log(req.body)
  // console.log(clientAccountOptions)
  // console.log(response.body);
  res.status(200).send(response.body)
})};



var savingsOptions = {
    'method': 'POST',
    'url': 'https://razerhackathon.sandbox.mambu.com/api/savings',
    'headers': {
      'Content-Type': ['application/json', 'application/json'],
      'Authorization': 'Basic VGVhbTY0OnBhc3MyNzgyOTU2Qzk=',
      'Cookie': 'AWSALB=afXCOOTuUgsdmyUin/qP/I7hRWr0FG0X8auwm2wr6d8alc9RKWsE/jud3ZlfgDMqOrUUOSSNng3s6UTwj6gkA0GCicKwMy+xN79bbeY6hWU8YVNR6tljBILJ/tds; AWSALBCORS=afXCOOTuUgsdmyUin/qP/I7hRWr0FG0X8auwm2wr6d8alc9RKWsE/jud3ZlfgDMqOrUUOSSNng3s6UTwj6gkA0GCicKwMy+xN79bbeY6hWU8YVNR6tljBILJ/tds'
    },
    body: ''
}



var savingsBody = {
  "savingsAccount": {
      "name": "Digital Account",
      "accountHolderType": "GROUP",
      "accountHolderKey": "",
      "accountState": "APPROVED",
      "productTypeKey": "8a8e878471bf59cf0171bf6979700440",
      "accountType": "CURRENT_ACCOUNT",
      "currencyCode": "SGD",
      "allowOverdraft": "true",
      "overdraftLimit": "100",
      "overdraftInterestSettings": {
          "interestRate": 5
      },
      "interestSettings": {
        "interestRate": "1.25"
      }
  }
}

const createSavingsAcc = (req, res) => {
  savingsBody.savingsAccount.accountHolderKey = req.body.accountHolderKey
  savingsOptions.body = JSON.stringify(savingsBody)

  request(savingsOptions, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
    
    res.status(200).send(response.body)
  });  
}













var loanOptions = {
  'method': 'POST',
  'url': 'https://razerhackathon.sandbox.mambu.com/api/loans',
  'headers': {
    'Content-Type': ['application/json', 'application/json'],
    'Authorization': 'Basic VGVhbTY0OnBhc3MyNzgyOTU2Qzk=',
    'Cookie': 'AWSALB=afXCOOTuUgsdmyUin/qP/I7hRWr0FG0X8auwm2wr6d8alc9RKWsE/jud3ZlfgDMqOrUUOSSNng3s6UTwj6gkA0GCicKwMy+xN79bbeY6hWU8YVNR6tljBILJ/tds; AWSALBCORS=afXCOOTuUgsdmyUin/qP/I7hRWr0FG0X8auwm2wr6d8alc9RKWsE/jud3ZlfgDMqOrUUOSSNng3s6UTwj6gkA0GCicKwMy+xN79bbeY6hWU8YVNR6tljBILJ/tds'
  },
  body: ''
};

var loanBody = {
    "loanAccount": {
        "accountHolderType": "GROUP",
        "accountHolderKey":  "",
        "productTypeKey": "8a8e867271bd280c0171bf768cc31a89",
        "assignedBranchKey": "",
        "loanName": "Student Loan",
        "loanAmount": 1010,
        "interestRate": "2",
        "arrearsTolerancePeriod": "0",
        "gracePeriod": "0",
        "repaymentInstallments": "10",
        "repaymentPeriodCount": "1",
        "periodicPayment": "0",
        "repaymentPeriodUnit": "WEEKS",
        "disbursementDetails": {
            "customInformation": [
                {
                    "value": "unique identifier for this transaction",
                    "customFieldID": "IDENTIFIER_TRANSACTION_CHANNEL_I"
                }
            ]
        }
    }
}
const createLoanAcc = (req, res) => {
  loanBody.loanAccount.accountHolderKey = req.body.accountHolderKey
  loanBody.loanAccount.assignedBranchKey = req.body.assignedBranchKey
  loanOptions.body = JSON.stringify(loanBody)

  request(loanOptions, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
    res.status(200).send(response.body)
  })
};


module.exports = {
  getIDDocument,
  getTransactionChannels,
  getBranchID,
  createSMEAccount,
  createSavingsAcc,
  createLoanAcc
}
