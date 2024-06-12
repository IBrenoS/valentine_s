import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaInterativo = () => {
  const locaisEspeciais = [
    {
      nome: "Primeiro Encontro",
      coordenadas: [-12.942941824943544, -38.457261400218876],
      historia: "Este é o lugar onde tivemos nosso primeiro encontro (Vovó Celia). Eu queria criar isso com um mapa melhor para ser visualizado, mas tenho que pagar taxas em dolar para hospedagem ou funções fora do limite. Valores caros pra caralho, estou fora, amor kkkkkkkkkkkkkkkkkkkk",
    },
  ];

  return (
    <div className="h-screen">
      <MapContainer center={[-12.942941824943544, -38.457261400218876]} zoom={13} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locaisEspeciais.map((local, index) => (
          <Marker key={index} position={local.coordenadas}>
            <Popup>
              <strong>{local.nome}</strong><br />
              {local.historia}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapaInterativo;
