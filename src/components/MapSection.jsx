import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import hopitaux from "../data/hopitaux.json";

// Icônes
const hospitalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/883/883407.png",
  iconSize: [35, 35],
});
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

// Composant pour le trajet
const RoutingMachine = ({ start, end }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !start || !end) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
      lineOptions: {
        styles: [{ color: "blue", weight: 6 }],
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      show: false,
      routeWhileDragging: false,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, start, end]);

  return null;
};

export default function MapSection() {
  const [userPos, setUserPos] = useState(null);
  const [selectedHopital, setSelectedHopital] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos([pos.coords.latitude, pos.coords.longitude]);
      },
      () => alert("Impossible d’obtenir votre position")
    );
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-12 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Carte interactive des hôpitaux 🏥
        </h2>
        <p className="text-gray-500 mt-2">
          Cliquez sur un hôpital pour afficher le trajet depuis votre position.
        </p>
      </div>

      <div className="w-[90%] md:w-[80%] h-[650px] rounded-2xl overflow-hidden shadow-lg">
        <MapContainer
          center={[-18.9102, 47.5256]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Position utilisateur */}
          {userPos && (
            <Marker position={userPos} icon={userIcon}>
              <Tooltip>Ma position</Tooltip>
            </Marker>
          )}

          {/* Hôpitaux */}
          {hopitaux.map((hopital, i) => (
            <Marker
              key={i}
              position={hopital.center}
              icon={hospitalIcon}
              eventHandlers={{
                click: () => setSelectedHopital(hopital),
              }}
            >
              <Tooltip>{hopital.name}</Tooltip>
            </Marker>
          ))}

          {/* Trajet */}
          {userPos && selectedHopital && (
            <RoutingMachine start={userPos} end={selectedHopital.center} />
          )}
        </MapContainer>
      </div>
    </section>
  );
}
