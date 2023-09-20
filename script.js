const url = 'https://community-edmunds.p.rapidapi.com/api/vehiclereviews/v2/%7BmakeNiceName%7D/%7BmodelNiceName%7D/2013?api_key=%3CREQUIRED%3E&sortby=thumbsUp%3AASC&pagenum=1&pagesize=10&fmt=json';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '81f6bca746mshca8f29cb22b46fcp18c0d3jsnde77a6d4f3f7',
		'X-RapidAPI-Host': 'community-edmunds.p.rapidapi.com'
	}
};


	fetch(url)
  .then (function (response) {
   return response.json();
 })
 .then (function(data) {
   console.log(data);
  return data
 })
