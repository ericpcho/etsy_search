'use strict'
const etsy_api = 'zw8s7fttg89x8cm4e4x88n39';
const etsy_url = 'http://localhost:5000/v2/listings/active';
const STORE = [];
let input = [];

function getDataFromApi(searchTerm, callback) {
  const findData = {
    api_key: etsy_api,
    tags: searchTerm,
<<<<<<< HEAD
}
=======
  }

  $.getJSON(etsy_url, findData, callback);
>>>>>>> 9c5234018ebd8530be5e9b433b8703b2cbc32d3d

}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    console.log("Submit button working");
    const queryTarget = $(event.currentTarget).find('.js-search-input');
    const query = queryTarget.val();
    console.log(query);
    input = query;
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayEtsySearchData);
    // $('.js-search-results').removeClass("hidden");
  });
}

<<<<<<< HEAD
 function displayEtsySearchData(data) {
    console.log(data);
    // nextPageToken = data.nextPageToken
    // prevPageToken = data.prevPageToken
    data.results.map((item, index) => STORE.push(item));
    const newdata = STORE.map(item => renderResult(item));
    $('container').html(newdata);
  }
=======
function displayEtsySearchData(data) {
  console.log(data);
  // nextPageToken = data.nextPageToken
  // prevPageToken = data.prevPageToken
  data.results.map((item, index) => STORE.push(item));
  const rawdata = STORE.map(item => renderResult(item));
  $('.container').html(rawdata);
}
>>>>>>> 9c5234018ebd8530be5e9b433b8703b2cbc32d3d

function renderResult(item) {

  return `
<<<<<<< HEAD
  <div class= "imgdiv">
  
=======
  <div class= "imgdiv">  
    <a class="js-etsy_url" href="${item.url}">click here</a>
>>>>>>> 9c5234018ebd8530be5e9b433b8703b2cbc32d3d
  </div>
  `;
}





function handleEvents() {
  watchSubmit();

}

$(handleEvents);