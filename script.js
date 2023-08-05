let map;
let layers = [];
async function fetchSeaLevelData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async function displaySeaLevelDataOnMap() {
    const sea9 = await fetchSeaLevelData(
      "https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::9inch-sea-level-rise-high-tide.geojson?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D"
    );

    const sea21 = await fetchSeaLevelData(
      "https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::21inch-sea-level-rise-high-tide.geojson?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D"
    );

    const sea36 = await fetchSeaLevelData(
      "https://bostonopendata-boston.opendata.arcgis.com/datasets/boston::36inch-sea-level-rise-high-tide.geojson?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D"
    );



    let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    })

let layer1 = L.geoJSON(sea9,{
                         style: function(){
                             return {fillColor: "red"}
                        }
                     })

let layer2 = L.geoJSON(sea21,{
                         style: function(){
                             return {fillColor: "green"}
                        }
                     })
let layer3 = L.geoJSON(sea36,{
                            style: function(){
                            return {fillColor: "blue"}
                       }
                    })   

var map = L.map('map', {
        center:[42.3601, -71.0589],
        zoom: 13,
        layers: [osm, layer1, layer2, layer3]
    });                   
var overlayMaps = {
    "9 in": layer1,
    "21 in": layer2,
    '36 in': layer3
};

var baseMaps = {
    "OpenStreetMap": osm,
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

  }
  displaySeaLevelDataOnMap() 
//document object methods DOM
//     let selectedLevels = getSelectedSeaLevels()
//     for(const level of selectedLevels) {
//             if (level=='9'){
//                 const layer1 = L.geoJSON(sea9,{
//                     style: function(){
//                         return {fillColor: "red"}
//                     }
//                 }).addTo(map);
//                 layers.push(layer1)
//             }
//             if (level!='9'){

//             }
//             if (level=='21') {
//                    const layer2 = L.geoJSON(sea21,{
//                     style: function(){
//                         return {fillColor: "green"}
//                     }
//                 }).addTo(map);
//                 layers.push(layer2)
//             }
//             if (level=='36'){
//                 const layer3 = L.geoJSON(sea36,{
//                     style: function(){
//                         return {fillColor: "blue"}
//                     }
//                 }).addTo(map);
//                 layers.push(layer3)
//             }
                

//     }
//     console.log(layers)
//   }

// function getSelectedSeaLevels() {
//     const checkboxes = document.querySelectorAll('input[name="action"]');
//     const selectedSeaLevels = [];

//     for(const box of checkboxes){
//         if(box.checked){
//             selectedSeaLevels.push(box.value)
//         }
//     }
//     return selectedSeaLevels;
//   }

//   const radioButtons = document.querySelectorAll('input[name="action"]');
//     radioButtons.forEach(radioButton => {
//       radioButton.addEventListener("change", displaySeaLevelDataOnMap);
//     });

