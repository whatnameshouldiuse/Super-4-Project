// GET https://youtube.googleapis.com/youtube/v3/playlists?key=[YOUR_API_KEY] HTTP/1.1
// fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBniUrdA_ATDmJ6H5XjB3ByFZKSnmMqp38&playlistId=PLvahqwMqN4M2euuB96bo7rnVMcakCkIRZ")
fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBniUrdA_ATDmJ6H5XjB3ByFZKSnmMqp38&playlistId=PLvahqwMqN4M2euuB96bo7rnVMcakCkIRZ")
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data)
    })

    

    // Construct the request
// Replace MyAppID with your Production AppID
// var url = "http://svcs.ebay.com/services/search/FindingService/v1";
// url += "?OPERATION-NAME=findItemsByKeywords";
// url += "&SERVICE-VERSION=1.0.0";
// url += "&SECURITY-APPNAME=Gildardo-team4-PRD-e92d3cfae-e5bdc1db";
// url += "&GLOBAL-ID=EBAY-US";
// url += "&RESPONSE-DATA-FORMAT=JSON";
// url += "&callback=_cb_findItemsByKeywords";
// url += "&REST-PAYLOAD";
// url += "&keywords=harry%20potter";
// url += "&paginationInput.entriesPerPage=3";

// fetch(url)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data){
//         console.log(data)
//     })