ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([99.583557, -1.303198, 101.327686, -0.370483]);
var wms_layers = [];


        var lyr_googlemaps_0 = new ol.layer.Tile({
            'title': 'google maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Padangadm_1 = new ol.format.GeoJSON();
var features_Padangadm_1 = format_Padangadm_1.readFeatures(json_Padangadm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Padangadm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padangadm_1.addFeatures(features_Padangadm_1);
var lyr_Padangadm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padangadm_1, 
                style: style_Padangadm_1,
                popuplayertitle: "Padang adm",
                interactive: true,
                title: '<img src="styles/legend/Padangadm_1.png" /> Padang adm'
            });
var format_KUNJUNGAN_2 = new ol.format.GeoJSON();
var features_KUNJUNGAN_2 = format_KUNJUNGAN_2.readFeatures(json_KUNJUNGAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KUNJUNGAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KUNJUNGAN_2.addFeatures(features_KUNJUNGAN_2);
var lyr_KUNJUNGAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KUNJUNGAN_2, 
                style: style_KUNJUNGAN_2,
                popuplayertitle: "KUNJUNGAN",
                interactive: true,
                title: '<img src="styles/legend/KUNJUNGAN_2.png" /> KUNJUNGAN'
            });
var format_Kostkamicsvshp_3 = new ol.format.GeoJSON();
var features_Kostkamicsvshp_3 = format_Kostkamicsvshp_3.readFeatures(json_Kostkamicsvshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kostkamicsvshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kostkamicsvshp_3.addFeatures(features_Kostkamicsvshp_3);
var lyr_Kostkamicsvshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kostkamicsvshp_3, 
                style: style_Kostkamicsvshp_3,
                popuplayertitle: "Kostkami.csv.shp",
                interactive: true,
                title: '<img src="styles/legend/Kostkamicsvshp_3.png" /> Kostkami.csv.shp'
            });
var format_Kostkamicsv_4 = new ol.format.GeoJSON();
var features_Kostkamicsv_4 = format_Kostkamicsv_4.readFeatures(json_Kostkamicsv_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kostkamicsv_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kostkamicsv_4.addFeatures(features_Kostkamicsv_4);
var lyr_Kostkamicsv_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kostkamicsv_4, 
                style: style_Kostkamicsv_4,
                popuplayertitle: "Kostkami.csv",
                interactive: true,
                title: '<img src="styles/legend/Kostkamicsv_4.png" /> Kostkami.csv'
            });
var format_Jalur_5 = new ol.format.GeoJSON();
var features_Jalur_5 = format_Jalur_5.readFeatures(json_Jalur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jalur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalur_5.addFeatures(features_Jalur_5);
var lyr_Jalur_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalur_5, 
                style: style_Jalur_5,
                popuplayertitle: "Jalur",
                interactive: true,
                title: '<img src="styles/legend/Jalur_5.png" /> Jalur'
            });

lyr_googlemaps_0.setVisible(true);lyr_Padangadm_1.setVisible(true);lyr_KUNJUNGAN_2.setVisible(true);lyr_Kostkamicsvshp_3.setVisible(true);lyr_Kostkamicsv_4.setVisible(true);lyr_Jalur_5.setVisible(true);
var layersList = [lyr_googlemaps_0,lyr_Padangadm_1,lyr_KUNJUNGAN_2,lyr_Kostkamicsvshp_3,lyr_Kostkamicsv_4,lyr_Jalur_5];
lyr_Padangadm_1.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', });
lyr_KUNJUNGAN_2.set('fieldAliases', {'NO': 'NO', 'NAMA TEMPAT': 'NAMA TEMPAT', 'X': 'X', 'y': 'y', });
lyr_Kostkamicsvshp_3.set('fieldAliases', {'id': 'id', 'Lokasi': 'Lokasi', 'X': 'X', 'Y': 'Y', 'Luas_w_kos': 'Luas_w_kos', 'JmlahKamar': 'JmlahKamar', 'J_penghuni': 'J_penghuni', 'J_p_mhsITP': 'J_p_mhsITP', });
lyr_Kostkamicsv_4.set('fieldAliases', {'id': 'id', 'Lokasi': 'Lokasi', 'Titik_x': 'Titik_x', 'Titik_y': 'Titik_y', 'Luas_w_kos': 'Luas_w_kos', 'JmlahKamar': 'JmlahKamar', 'J_penghuni': 'J_penghuni', 'J_p_mhsITP': 'J_p_mhsITP', });
lyr_Jalur_5.set('fieldAliases', {'id': 'id', 'Nama_jalur': 'Nama_jalur', 'Panjang_JL': 'Panjang_JL', 'Type_JL': 'Type_JL', });
lyr_Padangadm_1.set('fieldImages', {'Id': 'Range', 'kecamatan': 'TextEdit', });
lyr_KUNJUNGAN_2.set('fieldImages', {'NO': 'Range', 'NAMA TEMPAT': 'TextEdit', 'X': 'TextEdit', 'y': 'TextEdit', });
lyr_Kostkamicsvshp_3.set('fieldImages', {'id': 'TextEdit', 'Lokasi': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Luas_w_kos': 'TextEdit', 'JmlahKamar': 'Range', 'J_penghuni': 'Range', 'J_p_mhsITP': 'Range', });
lyr_Kostkamicsv_4.set('fieldImages', {'id': '', 'Lokasi': '', 'Titik_x': '', 'Titik_y': '', 'Luas_w_kos': '', 'JmlahKamar': '', 'J_penghuni': '', 'J_p_mhsITP': '', });
lyr_Jalur_5.set('fieldImages', {'id': 'TextEdit', 'Nama_jalur': 'TextEdit', 'Panjang_JL': 'TextEdit', 'Type_JL': 'ValueMap', });
lyr_Padangadm_1.set('fieldLabels', {'Id': 'inline label - always visible', 'kecamatan': 'inline label - always visible', });
lyr_KUNJUNGAN_2.set('fieldLabels', {'NO': 'inline label - always visible', 'NAMA TEMPAT': 'inline label - always visible', 'X': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_Kostkamicsvshp_3.set('fieldLabels', {'id': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Luas_w_kos': 'inline label - always visible', 'JmlahKamar': 'inline label - always visible', 'J_penghuni': 'inline label - always visible', 'J_p_mhsITP': 'inline label - always visible', });
lyr_Kostkamicsv_4.set('fieldLabels', {'id': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Titik_x': 'inline label - always visible', 'Titik_y': 'inline label - always visible', 'Luas_w_kos': 'inline label - always visible', 'JmlahKamar': 'header label - visible with data', 'J_penghuni': 'inline label - always visible', 'J_p_mhsITP': 'inline label - always visible', });
lyr_Jalur_5.set('fieldLabels', {'id': 'inline label - always visible', 'Nama_jalur': 'inline label - always visible', 'Panjang_JL': 'inline label - visible with data', 'Type_JL': 'inline label - always visible', });
lyr_Jalur_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});