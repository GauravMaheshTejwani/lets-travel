var platform = new H.service.Platform({
    'apikey': 'NRy8M68xGRfKZBEpJebodG2XF-hOHxvslzauKsfXCN4'
  });
  

// //////////////////////////////////////////////////////////////
// // Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();
var service = platform.getSearchService();

let lendmark = document.querySelector('.main-heading').textContent;

service.geocode({
    q: lendmark
}, (result) => {
    var map = new H.Map(
        document.querySelector('.map'),
        defaultLayers.vector.normal.map,
        {
          zoom: 15,
          center: result.items[0].position
        });
     map.addObject(new H.map.Marker(result.items[0].position));
     var ui = H.ui.UI.createDefault(map, defaultLayers);   
}, alert);

// ////////////////////////////////////////////////////

// // Assumption: the platform is instantiated
// // geocoder = platform.getGeocodingService();

// // var geocodingParams = {
// //       searchText: 'Sydney Opera House'
// //     },
// //     onResult = function(result) {
// //       console.log(result);
// //     },
// //     onError = function(error) {
// //        console.log(error);
// //     };
// // geocoder.geocode(geocodingParams, onResult, onError);

// // platform.getSearchService().geocode({
// //     q: '5 Rue Daunou, 75000 Paris, France'
// //   }, console.log, console.error);


// // Instantiate (and display) a map object:

// // let platform = new H.service.Platform({
// //     'app_id': 'p4tl7vKAUzephz5HdTgm',
// //     'app_code': 'XcGd4b7LkvK4Rs5QLZXLxw'
// // });

// // let platform = new H.service.Platform({
// //     'app_id': 'jsm_lkf6LYwqbxGA1KqZtg',
// //     'app_code': 's75jF_7ajUitJJpNGeuCLecKae-d34ZlasIxaH4a-t4WkJo9SpLa-tF1oYKf0gobOAKKxuG5xmlCxkBK0HVI9w'
// // });

// function landmarkGeocode() {
//     let title = document.querySelector('h1').textContent;
//     var geocoder = platform.getGeocodingService(),
//       landmarkGeocodingParameters = {
//         searchtext: title, 
//         jsonattributes : 1
//       };
  
//     geocoder.search(
//       landmarkGeocodingParameters,
//       showMap,
//       (e)=> console.log(e)
//     );
//   }

//   function showMap(result){
//     let location = result.response.view[0].result[0].place.locations[0].displayPosition;
//    // console.log(location);
//     //Layer of our map is created  
//     let defaultLayers = platform.createDefaultLayers();

//     // Initialize the map
//     let map = new H.Map(
//     document.querySelector('.map'),
//     defaultLayers.vector.normal.map,
//     { 
//       zoom: 15,
//       center: { lat: location.latitude, lng: location.longitude }
//     });

//     //adding marker
//     let marker = new H.map.Marker({lat: location.latitude, lng: location.longitude});
//     map.addObject(marker);
  
//     // Create the default UI:
//     var ui = H.ui.UI.createDefault(map, defaultLayers);
//   }

//   landmarkGeocode();


// var platform = new H.service.Platform({
//     'apikey': 's75jF_7ajUitJJpNGeuCLecKae-d34ZlasIxaH4a-t4WkJo9SpLa-tF1oYKf0gobOAKKxuG5xmlCxkBK0HVI9w'
// });

// var defaultLayers = platform.createDefaultLayers();
// var service = platform.getSearchService();

// let lendmark = document.querySelector('.main-heading').textContent;
// service.geocode({
//     q: lendmark
//   }, (result) => {
//     var map = new H.Map(
//         document.querySelector('.map'),
//         defaultLayers.vector.normal.map,
//         {
//           zoom: 7.9,
//           center: result.items[0].position
//         });
//     map.addObject(new H.map.Marker(result.items[0].position));
//     var ui = H.ui.UI.createDefault(map, defaultLayers);
//   }, alert);