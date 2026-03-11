import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
// @ts-ignore
import icon from 'leaflet/dist/images/marker-icon.png';
// @ts-ignore
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Project {
  id: number;
  name: string;
  village: string;
  beneficiaries: number;
  lat: number;
  lng: number;
  type: string;
}

const projects: Project[] = [
  { id: 1, name: "Forage d'eau potable", village: "Kpalimé", beneficiaries: 450, lat: 6.9103, lng: 0.6333, type: "Eau" },
  { id: 2, name: "Soutien scolaire", village: "Atakpamé", beneficiaries: 200, lat: 7.5333, lng: 1.1333, type: "Éducation" },
  { id: 3, name: "Coopérative maraîchère", village: "Aného", beneficiaries: 120, lat: 6.2281, lng: 1.5917, type: "Femmes" },
  { id: 4, name: "Reforestation communautaire", village: "Kara", beneficiaries: 300, lat: 9.5511, lng: 1.1931, type: "Environnement" },
];

export const ProjectMap: React.FC = () => {
  return (
    <div className="h-[500px] w-full rounded-[32px] overflow-hidden shadow-xl border-8 border-white">
      <MapContainer center={[8.6195, 0.8248]} zoom={7} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {projects.map((project) => (
          <Marker key={project.id} position={[project.lat, project.lng]}>
            <Popup>
              <div className="p-2">
                <h3 className="font-lora font-bold text-lg text-human-red mb-1">{project.name}</h3>
                <p className="text-sm font-bold text-charcoal mb-1">{project.village}</p>
                <p className="text-xs text-warm-gray">{project.beneficiaries} bénéficiaires</p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-human-red-pale text-human-red text-[10px] font-bold rounded-full uppercase">
                  {project.type}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
