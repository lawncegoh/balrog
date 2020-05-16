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



module.exports = {
  getIDDocument,
  getTransactionChannels,
  getBranchID
}
