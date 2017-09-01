'use strict'
const STORE = [];
const etsy_api = 'zw8s7fttg89x8cm4e4x88n39';
const etsy_url = 'http://localhost:5000/v2/listings/active';
let input;


function getDataFromApi(searchTerm, callback) {
  const findData = {
    includes: 'Images(url_570xN)',
    limit: 12,
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
    getDataFromApi(query, storeEtsySearchData);
    // $('.js-search-results').removeClass("hidden");
  });
}

function storeEtsySearchData(data) {
  console.log(data);
  // nextPageToken = data.nextPageToken
  // prevPageToken = data.prevPageToken
  data.results.map((item, index) => STORE.push(item));
  // getImgFromApi(storeEtsyImgData);
  const listingData = STORE.map(item => renderResult(item));
  $('.bottom-half').html(listingData);
}

function renderResult(item) {
  return `
  <img class= "thumbnails" src="${item.Images[0].url_570xN}">
  `
}

// function getImgFromApi(callback) {
//   const findData = {
//     includes: ['rank'],
//     api_key: etsy_api,
//   }
//   for (let i=0; i<STORE.length; i++){
//     const etsy_url_image = `http://localhost:5000/v2/listings/${STORE[i].listing_id}/images/`
//   $.getJSON(etsy_url_image, findData, callback);
// }}

// function storeEtsyImgData(data) {
//   console.log(data);
//   // nextPageToken = data.nextPageToken
//   // prevPageToken = data.prevPageToken
//   data.results.map((item, index) => STORE.push(item));
//   const imgData = STORE.map(item => renderResult(item));
//   $('.container').html(imgData);
// }

function handleEvents() {
  watchSubmit();

}

$(handleEvents);