import Datamap from "datamaps";
var bubble_map = new Datamap({
  element: document.getElementById("india"),
  scope: "india",
  geographyConfig: {
    popupOnHover: true,
    highlightOnHover: true,
    borderColor: "#444",
    borderWidth: 0.5,
    dataUrl:
      "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json"
    //dataJson: topoJsonData
  },
  fills: {
    MAJOR: "#306596",
    MEDIUM: "#0fa0fa",
    MINOR: "#bada55",
    defaultFill: "#dddddd"
  },
  data: {
    JH: { fillKey: "MINOR" },
    MH: { fillKey: "MINOR" }
  },
  setProjection: function(element) {
    var projection = d3.geo
      .mercator()
      .center([78.9629, 23.5937]) // always in [East Latitude, North Longitude]
      .scale(1000);
    var path = d3.geo.path().projection(projection);
    return { path: path, projection: projection };
  }
});
