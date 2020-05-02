var map = L.map('tove-valley-map').setView([52.125376, -0.962026], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([52.125376, -0.962026]).addTo(map)
    // .bindPopup('Tove Valley Cottages<br>')
    .openPopup();
