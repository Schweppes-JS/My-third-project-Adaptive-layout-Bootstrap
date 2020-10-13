function initMap() {
    let opt = {
        center: {lat: 49.444694, lng: 32.057712},
        zoom: 15
    }
    var map = new google.maps.Map(document.getElementById('map'), opt);
}