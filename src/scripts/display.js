var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");

var searchParamsArr = document.location.search.split("&");
var year = searchParamsArr[0].split("=").pop();
var make = searchParamsArr[1].split("=").pop();
var model = searchParamsArr[2].split("=").pop();
var DIY = searchParamsArr[3].split("=").pop();

async function getEbay() {
  const url =
    "https://ebay-search-result.p.rapidapi.com/search/" +
    year +
    "+" +
    model +
    "+" +
    make +
    "+" +
    DIY;

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
        var results = data.results;
        var ebaySection = $('#ebay-section');
        var ListingsGrid = $('<div class="w-11/12 grid grid-cols-2 gap-6"></div>');

        for (var i = 1; i <= 8; i++) {
          var ebayListing = $('<div>');
          ebayListing.addClass('w-full p-4 rounded-lg border-4 bg-amber-600/80 border-orange-700/70');
          ebayListing.addClass('flex flex-col items-center');
          ebayListing.addClass('transition ease-in hover:bg-orange-600/90 hover:border-orange-800');

          var aLink = $('<a>');
          aLink.attr('href', results[i]['url']);
          aLink.attr('target', results[i]['blank']);
          aLink.addClass('w-fit h-fit relative z-1')

          var prodImage = $('<img>');
          prodImage.attr('src', results[i]['image']);

          var prodTitle = $('<h2>');
          prodTitle.html(results[i]['title']);
          prodTitle.addClass('text-white py-3');

          var prodPrice = $('<h3>');
          prodPrice.html(results[i]['price']);
          prodPrice.addClass('text-white font-bold');

          aLink.append(prodImage);
          aLink.append(prodTitle);
          aLink.append(prodPrice);

          ebayListing.append(aLink);
          
          ListingsGrid.append(ebayListing);
        }
        ebaySection.append(ListingsGrid);
        ebaySection.children('svg').remove();
        return data;
      });
  } catch (error) {
    console.error(error);
  }
}

async function getYoutube(){
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

  try {
      fetch(url, options)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var youtubeSection = $('#youtube-section');
          for (var i = 0; i < 3; i++) {
            var embedUrl = 'https://www.youtube-nocookie.com/embed/' + data.contents[i]['video']['videoId'];
            
            var aspectDiv = $('<div>');
            aspectDiv.addClass('w-full aspect-w-16 aspect-h-9');

            var iFrame = $('<iframe>');
            iFrame.addClass('inset-0 w-full h-full');
            iFrame.attr('src', embedUrl);
            iFrame.attr('frameborder', 0);

            aspectDiv.append(iFrame);
            youtubeSection.append(aspectDiv);
            console.log(aspectDiv.html());
          }
          youtubeSection.children('svg').remove();
          return data;
        });
  } catch (error) {
    console.error(error);
  }
}

getEbay();
getYoutube();
$('#back').on('click', function() {
  window.location.href = 'index.html';
});