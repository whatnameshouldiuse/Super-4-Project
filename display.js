var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");
var test;
function getParams() {
  var searchParamsArr = document.location.search.split("&");

  var year = searchParamsArr[0].split("=").pop();
  var make = searchParamsArr[1].split("=").pop();
  var model = searchParamsArr[2].split("=").pop();
  var DIY = searchParamsArr[3].split("=").pop();

  var format = searchParamsArr[1].split("=").pop();
  console.log(year);
  console.log(model);
  const url =
    "https://ebay-search-result.p.rapidapi.com/search/" +
    year +
    "+" +
    model +
    "+" +
    make +
    "+" +
    DIY;
  console.log(url);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "402b25724bmshf69e0ef6d35e97fp1b90cajsnf585321ecb5e",
      "X-RapidAPI-Host": "ebay-search-result.p.rapidapi.com",
    },
  };

  try {
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.results.slice(0, 6));
        var results = data.results.slice(0, 6);
        for (var i = 1; i <= results.length; i++) {
          document.getElementById(`e${i}`).textContent =
            "Product: " +
            results[i]["title"] +
            " Price" +
            results[i]["price"];
         
    var aTag = document.createElement("a")
     aTag.setAttribute("href", results[i]["url"]);
     aTag.setAttribute("target", results[i]["blank"]);
    //  aTag.setAttribute("alt", results[i]["url"]);
     console.log(aTag)
          var imageTag = document.createElement("img");
          imageTag.setAttribute("src", results[i]["image"]);
//append image to a tag 
// apppend anker tag to the id 
    aTag.appendChild(imageTag)
    document.getElementById(`e${i}`).appendChild(aTag);
        //   document.getElementById(`e${i}`).appendChild(imageTag);

          console.log(results[i]);
        }

        return data;
      });
  } catch (error) {
    console.error(error);
  }
}
getParams();


var searchParamsArr = document.location.search.split("&");
var year = searchParamsArr[0].split("=").pop();
var make = searchParamsArr[1].split("=").pop();
var model = searchParamsArr[2].split("=").pop();
var DIY = searchParamsArr[3].split("=").pop();

const url = 'https://youtube-data8.p.rapidapi.com/search/?q='+
year +
"+" +
model +
"+" +
make +
"+" +
DIY+'&hl=en&gl=US&maxResults=3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '402b25724bmshf69e0ef6d35e97fp1b90cajsnf585321ecb5e',
		'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
    }
};

async function test(){

    try {
        fetch(url, options)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // console.log(data.results.slice(0, 3));
            // var results = data.results.slice(0, 3);
            for (var i = 0; i < 3; i++) {
                data.contents[i]
// console.log(data.contents[i])
// document.getElementById(`y${i}`).value



                // console.log(data.items[i])
            //   document.getElementById(`y${i}`).textContent 
                // "Product: " +
                // results[i]["title"] +
                // " Price" +
                // results[i]["price"] +
                // " Url" +
                // results[i]["url"];
    
            //   var aTag = document.createElement("img");
            //   aTag.setAttribute("src", results[i]["image"]);
    
            //   document.getElementById(`e${i}`).appendChild(aTag);
    
            //   console.log(results[i]);
            }
    console.log(data) 
            return data;
          });
      } catch (error) {
        console.error(error);
      }
    }
    test();

console.log("Hello");