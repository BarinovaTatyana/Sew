var map;
DG.then(function() {
    map = DG.map('map', {
        center: [54.985638, 73.374083],
        zoom: 16
    });
    DG.marker([54.985638, 73.374083]).addTo(map).bindPopup('Meowbt');
});