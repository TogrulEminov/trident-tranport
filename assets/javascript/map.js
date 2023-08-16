ymaps.ready(init);
function init() {
  var o = new ymaps.Map(
    "map",
    { center: [40.372974, 49.853148], zoom: 13, controls: [] },
    { suppressMapOpenBlock: !0 }
  );
  o.behaviors.disable("scrollZoom"),
    o.controls.add("zoomControl", { position: { top: 100, left: 10 } }),
    o.geoObjects.add(
      new ymaps.Placemark(
        [40.372974, 49.853148],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "./assets/media/marker.png",
          iconImageSize: [61, 77],
          iconImageOffset: [-42, -65],
        }
      )
    ),
    mapmyMap.controls.remove("geolocationControl"),
    mapmyMap.controls.remove("searchControl"),
    mapmyMap.controls.remove("trafficControl"),
    mapmyMap.controls.remove("typeSelector"),
    mapmyMap.controls.remove("fullscreenControl"),
    mapmyMap.behaviors.disable("scrollZoom"),
    mapmyMap.controls.remove("rulerControl"),
    mapmyMap.geoObjects.add(placemark);
}
