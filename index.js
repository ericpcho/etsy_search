$.getJSON('http://localhost:8080/v2/listings/active')

// 'use strict'
// const etsy_api = 'zw8s7fttg89x8cm4e4x88n39';
// const etsy_url = 'https://openapi.etsy.com/v2/listings/active';
// const STORE = [];
// let input = []

// function getDataFromApi(searchTerm, callback) {
// const findData = {
//     api_key: etsy_api,
//     q: searchTerm,
// }

// $.getJSON(etsy_url, findData, callback);
// }

// function watchSubmit() {
//   $('.search-form').submit(event => {
//     event.preventDefault();
//     console.log("Submit button working");
//     const queryTarget = $(event.currentTarget).find('.search-input');
//     const query = queryTarget.val();
//     input = query;
//     // clear out the input
//     queryTarget.val("");
//     getDataFromApi(query, displayEtsySearchData);
//     // $('.js-search-results').removeClass("hidden");
//   });
// }

// function storeEtsySearchData(data) {
//   console.log(data);
//   // nextPageToken = data.nextPageToken
//   // prevPageToken = data.prevPageToken
//   data.items.map((item, index) => STORE.push(item));
// }

// function displayEtsySearchData() {
//   $('container').html(results);
//   const results = STORE.map(item => renderResult(item));
// }

// function renderResult(item) {
//   return `
//   <div class= "imgdiv">
      
//   </div>
//   `;
// }

// function handleEvents(){
//   watchSubmit();
//   displayEtsySearchData();

// }

// $(handleEvents);