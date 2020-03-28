var wms_layers = [];


        var lyr_GoogleMapSatellite_0 = new ol.layer.Tile({
            'title': 'Google Map Satellite',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MUNICIPIOS_1 = new ol.format.GeoJSON();
var features_MUNICIPIOS_1 = format_MUNICIPIOS_1.readFeatures(json_MUNICIPIOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_1.addFeatures(features_MUNICIPIOS_1);
var lyr_MUNICIPIOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIOS_1, 
                style: style_MUNICIPIOS_1,
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_1.png" /> MUNICIPIOS'
            });
var format_DEPARTAMENTOS_2 = new ol.format.GeoJSON();
var features_DEPARTAMENTOS_2 = format_DEPARTAMENTOS_2.readFeatures(json_DEPARTAMENTOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOS_2.addFeatures(features_DEPARTAMENTOS_2);
var lyr_DEPARTAMENTOS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTAMENTOS_2, 
                style: style_DEPARTAMENTOS_2,
                interactive: false,
                title: '<img src="styles/legend/DEPARTAMENTOS_2.png" /> DEPARTAMENTOS'
            });

lyr_GoogleMapSatellite_0.setVisible(true);lyr_MUNICIPIOS_1.setVisible(true);lyr_DEPARTAMENTOS_2.setVisible(true);
var layersList = [lyr_GoogleMapSatellite_0,lyr_MUNICIPIOS_1,lyr_DEPARTAMENTOS_2];
lyr_MUNICIPIOS_1.set('fieldAliases', {'NA2': 'NA2', 'PPL': 'PPL', 'AREA_KM': 'AREA_KM', 'PERIMETRO': 'PERIMETRO', });
lyr_DEPARTAMENTOS_2.set('fieldAliases', {'NA2': 'NA2', 'AREA_KM': 'AREA_KM', 'PERIMETRO': 'PERIMETRO', });
lyr_MUNICIPIOS_1.set('fieldImages', {'NA2': 'TextEdit', 'PPL': 'TextEdit', 'AREA_KM': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_DEPARTAMENTOS_2.set('fieldImages', {'NA2': 'TextEdit', 'AREA_KM': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_MUNICIPIOS_1.set('fieldLabels', {'NA2': 'inline label', 'PPL': 'inline label', 'AREA_KM': 'inline label', 'PERIMETRO': 'inline label', });
lyr_DEPARTAMENTOS_2.set('fieldLabels', {'NA2': 'no label', 'AREA_KM': 'no label', 'PERIMETRO': 'no label', });
lyr_DEPARTAMENTOS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});