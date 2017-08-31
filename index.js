const etsy_api = 'zw8s7fttg89x8cm4e4x88n39';
const etsy_url = 'https://openapi.etsy.com/v2/listings/active';
const STORE = [];

function getDataFromApi(searchTerm, callback) {
const findData = {
    count:integer,
    q: searchTerm,
    key: etsy_api
}

$.getJSON(etsy_url, findData, callback);
}

function watchSubmit() {
  $(".search-button").submit(event => {
    event.preventDefault();
    console.log("Submit button working");
    const queryTarget = $(event.currentTarget).find('.search-input');
    const query = queryTarget.val();
    // input = query;
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayEtsySearchData);
    // $('.js-search-results').removeClass("hidden");
  });
}

// function displayEtsySearchData(data) {
//   console.log(data);
//   // nextPageToken = data.nextPageToken
//   // prevPageToken = data.prevPageToken
//   data.items.map((item, index) => STORE.push(item));
//   const results = STORE.map(item => renderResult(item));
//   $('container').html(results);
// }

// function renderResult(item) {
//   return `
//   <div class= "imgdiv">
      
//   </div>
//   `;
// }

function handleEvents(){
  watchSubmit();

}

$(handleEvents);