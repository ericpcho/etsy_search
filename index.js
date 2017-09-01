'use strict'
const STORE = [];
const etsy_api = 'zw8s7fttg89x8cm4e4x88n39';
const etsy_url = 'http://localhost:5000/v2/listings/active';
let input;
let nextPage;
let prevPage;

function getDataFromApi(searchTerm, callback) {
  const findData = {
    includes: 'Images(url_570xN)',
    limit: 12,
    offset: 0,
    api_key: etsy_api,
    tags: searchTerm,
  }

  nextPage = findData.offset + 12
  prevPage = findData.offset + 12
  console.log(nextPage);
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
  const listingData = STORE.splice(0,12).map(item => renderResult(item));
  $('.bottom-half').html(listingData);
}

function renderResult(item) {
  nextPage > 0 ? $(".nextpage-button").removeClass("hidden") : $(".nextpage-button").addClass("hidden")
  nextPage > 12 ? $(".prevpage-button").removeClass("hidden") : $(".prevpage-button").addClass("hidden")

  return `
  <a data-imgid="${item.Images[0].url_570xN}" class = "thumbnailAnchor">
  <img class= "thumbnails" src="${item.Images[0].url_570xN}"></a>
  `
}

function clickThumbnail(){
  $('.bottom-half').on("click", ".thumbnailAnchor", event => {
    console.log(event.currentTarget);
    const imgId = $(event.currentTarget).data('imgid')
    $(".middle-half").html(`<img width="500" height="350" src="${imgId}"></img>`)
  })
}

function goToNextPage(){
  $('.js-start-page').on("click", ".nextpage-button", event => {
    const findData = {
      includes: 'Images(url_570xN)',
      limit: 12,
      offset: nextPage,
      api_key: etsy_api,
      tags: input,
    }
    nextPage = findData.offset + 12
    $.getJSON(etsy_url, findData, storeEtsySearchData);
  })
}

function goToPrevPage(){
  $('.js-start-page').on("click", ".prevpage-button", event => {
    const findData = {
      includes: 'Images(url_570xN)',
      limit: 12,
      offset: nextPage-24,
      api_key: etsy_api,
      tags: input,
    }
    nextPage = findData.offset+12
    $.getJSON(etsy_url, findData, storeEtsySearchData);
  })
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
clickThumbnail();
goToNextPage();
goToPrevPage();
}

$(handleEvents);