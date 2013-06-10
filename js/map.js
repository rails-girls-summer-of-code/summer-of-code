
var map = new OpenLayers.Map('map');
var wms = new OpenLayers.Layer.WMS( "OpenLayers WMS",
"http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );
map.addLayer(wms);



var pinStyle = new OpenLayers.StyleMap({
    pointRadius: '${count}',
    fillColor: "#ff0000",
    strokeWidth: 1,
    strokeColor: "#666666"
});

var vectorLayer = new OpenLayers.Layer.Vector("Overlay", { styleMap: pinStyle});

function addMarkerToLayer(vectorLayer, data) {
    var point = new OpenLayers.Geometry.Point(data.x, data.y);
    var marker = new OpenLayers.Feature.Vector(point, {count: data.count+2});
    vectorLayer.addFeatures(marker);
}

for(var city in mapData){
    addMarkerToLayer(vectorLayer, mapData[city]);
}

map.addLayer(vectorLayer);
map.zoomTo(2);
map.setCenter(new OpenLayers.LonLat(53, 13))
