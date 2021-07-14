//import { useGeographic } from './lib/OpenLayers/ol/proj'; //  'ol/proj';
//useGeographic();  // Se supone que con esta función se activan las funciones geográficas , o algo así :) :)

window.onload = init // es lo mismo que simplemente llamar la función  "init()" , solo que se espera hasta que se cargue completamente la página.


// center: [-101.5, 20.5], // no está agarrando las coordenadas
function init() {
    const map = new ol.Map({
        view: new ol.View({
            center: [0, 0],
            zoom: 4
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: "mi_mapa"
    })
}