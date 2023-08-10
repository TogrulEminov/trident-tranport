    
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [40.372974, 49.853148],
        zoom: 13,
        controls: []
    }, {
        suppressMapOpenBlock: true
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl', {
        position: {
            top: 100,
            left: 10
        }
    });
    myMap.geoObjects.add(new ymaps.Placemark([40.372974, 49.853148], {}, {
        iconLayout: 'default#image',
        iconImageHref: './assets/media/marker.png',
        iconImageSize: [61, 77],
        iconImageOffset: [-42, -65]
    }));
}