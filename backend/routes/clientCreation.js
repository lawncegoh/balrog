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
  // body: JSON.stringify({"client":{"firstName":"Celeste","lastName":"Goh","preferredLanguage":"ENGLISH","notes":"Enjoys playing RPG","assignedBranchKey":"8a8e878e71c7a4d70171ca6401ba1253"},"idDocuments":[{"identificationDocumentTemplateKey":"8a8e867271bd280c0171bf7e4ec71b01","issuingAuthority":"Immigration Authority of Singapore","documentType":"NRIC/Passport Number","validUntil":"2021-09-12","documentId":"S9812345A"}],"addresses":[],"customInformation":[{"value":"Singapore","customFieldID":"countryOfBirth"},{"value":"58f5add7-3d0b-4640-84a9-43829f70d115","customFieldID":"razerID"}]})
  body: ''
};
const createSMEAccount = (req, res) => {
  clientAccountOptions.body = JSON.stringify(req.body);

  request(clientAccountOptions, function (error, response) { 
  if (error) throw new Error(error);
  console.log(req.body)
  console.log(clientAccountOptions)
  console.log(response.body);
  res.status(200).send(response.body)
})};


module.exports = {
  getIDDocument,
  getTransactionChannels,
  getBranchID,
  createSMEAccount
}
