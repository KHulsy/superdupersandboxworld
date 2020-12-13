// PLAYING AROUND WITH SOME EXAMPLES
import Datamap from "datamaps";

var bombMap = new Datamap({
  element: document.getElementById("container"),
  scope: "world",
  projection: "mercator",
  dataProvider: {
    map: "worldLow",
    getAreasFromMap: true
  },
  areasSettings: {
    selectedColor: "#CC0000",
    selectable: true
  },
  geographyConfig: {
    popupOnHover: true,
    highlightOnHover: true,
    borderColor: "rgba(0,200,255, 0.8)",
    highlightFillColor: "rgba(0,200,255, 0.6)"
  },
  fills: {
    COUNTRY_FILL_COLOR: "rgba(0,200,255, 0.3)",
    BUBBLE_FILL_COLOR: "rgba(0, 200, 255, 0.6)",
    BUBBLE_HIGHLIGHT_COLOR: "rgba(0, 200, 255, 0.9)",
    defaultFill: "rgba(0,200,255, 0.1)"
  },
  data: {
    PRK: { fillKey: "COUNTRY_FILL_COLOR" },
    RUS: { fillKey: "COUNTRY_FILL_COLOR" },
    PRC: { fillKey: "COUNTRY_FILL_COLOR" },
    IND: { fillKey: "COUNTRY_FILL_COLOR" },
    GBR: { fillKey: "COUNTRY_FILL_COLOR" },
    FRA: { fillKey: "COUNTRY_FILL_COLOR" },
    PAK: { fillKey: "COUNTRY_FILL_COLOR" },
    USA: { fillKey: "COUNTRY_FILL_COLOR" }
  }
});

var bombs = [
  {
    name: "Joe 4",
    radius: 25,
    yield: 400,
    country: "USSR",
    fillKey: "BUBBLE_FILL_COLOR",
    significance: 'First fusion weapon test by the USSR (not "staged")',
    date: "1953-08-12",
    latitude: 50.07,
    longitude: 78.43
  },
  {
    name: "Tsar Bomba",
    radius: 45,
    yield: 50000,
    country: "USSR",
    fillKey: "BUBBLE_FILL_COLOR",
    significance:
      "Largest thermonuclear weapon ever tested—scaled down from its initial 100 Mt design by 50%",
    date: "1961-10-31",
    latitude: 73.482,
    longitude: 54.5854
  },
  {
    name: "Tsar Bomba",
    radius: 25,
    yield: 50000,
    country: "UK",
    fillKey: "BUBBLE_FILL_COLOR",
    significance:
      "Largest thermonuclear weapon ever tested—scaled down from its initial 100 Mt design by 50%",
    date: "1961-10-31",
    latitude: 51.74,
    longitude: 0.67
  }
];
//draw bubbles for bombs
bombMap.bubbles(bombs, {
  borderColor: "rgba(0,200,255, 0.7)",
  highlightFillColor: "rgba(0,200,255, 0.9)",
  borderWidth: 3,
  fillOpacity: 0.5,
  popupTemplate: function(geo, data) {
    return [
      '<div class="hoverinfo">' + data.name,
      "<br/>Payload: " + data.yield + " kilotons",
      "<br/>Country: " + data.country + "",
      "<br/>Date: " + data.date + "",
      "</div>"
    ].join("");
  }
});

var presidentialTrips = [
  {
    origin: {
      latitude: 38.895111,
      longitude: -77.036667
    },
    destination: {
      latitude: 32.066667,
      longitude: 34.783333
    }
  },
  {
    origin: {
      latitude: 38.895111,
      longitude: -77.036667
    },
    destination: {
      latitude: 19.433333,
      longitude: -99.133333
    }
  },
  {
    origin: {
      latitude: 38.895111,
      longitude: -77.036667
    },
    destination: {
      latitude: 9.933333,
      longitude: -84.083333
    }
  },
  {
    origin: {
      latitude: 38.895111,
      longitude: -77.036667
    },
    destination: {
      latitude: 54.597,
      longitude: -5.93
    }
  },
  {
    origin: {
      latitude: 38.895111,
      longitude: -77.036667
    },
    destination: {
      latitude: 52.516667,
      longitude: 13.383333
    }
  },
  {
    origin: {
      latitude: 38.895111,
      longitude: -77.036667
    },
    destination: {
      latitude: 14.692778,
      longitude: -17.446667
    }
  },
  {
    origin: {
      latitude: 38.895111,
      longitude: -77.036667
    },
    destination: {
      latitude: -26.204444,
      longitude: 28.045556
    }
  },
  {
    origin: {
      latitude: 38.895111,
      longitude: -77.036667
    },
    destination: {
      latitude: -6.8,
      longitude: 39.283333
    }
  },
  {
    origin: {
      latitude: 38.895111,
      longitude: -77.036667
    },
    destination: {
      latitude: 59.329444,
      longitude: 18.068611
    }
  },
  {
    origin: {
      latitude: 38.895111,
      longitude: -77.036667
    },
    destination: {
      latitude: 59.95,
      longitude: 30.3
    }
  }
];

bombMap.arc(presidentialTrips, {
  strokeWidth: 2,
  strokeColor: "rgba(0,200,255, 0.3)"
});

// d3.select("svg").style("fill", "red");
bombMap.svg.selectAll(".datamaps-subunit").on("click", function(geography) {
  alert(geography.properties.name);
});
bombMap.svg
  .selectAll(".datamaps-subunit")
  .on("mouseenter", function(geography) {
    const { ...props } = geography;
    console.log(props["geometry"].coordinates);
  });
