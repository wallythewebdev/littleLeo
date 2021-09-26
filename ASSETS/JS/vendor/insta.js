// var token = '1362124742.7b33a8d.6613a3567f0a425f9852055b8ef743b7',
//     num_photos = 10, // maximum 20
//     container = document.getElementById( 'wallysFeed' ), // it is our <ul id="wallysFeed">
//     scrElement = document.createElement( 'script' );
 
// window.mishaProcessResult = function( data ) {
// 	for( x in data.data ){
// 		container.innerHTML += '<li><img src="' + data.data[x].images.low_resolution.url + '"></li>';
// 	}
// }
 
// scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
// document.body.appendChild( scrElement );