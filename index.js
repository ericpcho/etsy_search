'use strict'
const etsy_api = 'zw8s7fttg89x8cm4e4x88n39';
const etsy_url = 'http://localhost:5000/v2/listings/active';
const STORE = [];
let input = [];

function getDataFromApi(searchTerm, callback) {
  const findData = {
    api_key: etsy_api,
    tags: searchTerm,
  }

  $.getJSON(etsy_url, findData, callback);

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

function displayEtsySearchData(data) {
  console.log(data);
  // nextPageToken = data.nextPageToken
  // prevPageToken = data.prevPageToken
  data.results.map((item, index) => STORE.push(item));
  const rawdata = STORE.map(item => renderResult(item));
  $('.container').html(rawdata);
}

function renderResult(item) {

  return `
  <div class= "imgdiv">  
    <a class="js-etsy_url" href="${item.url}">click here</a>
  </div>
  `;
}





function handleEvents() {
  watchSubmit();

}

$(handleEvents);