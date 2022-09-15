import React from "react";
import { Container, SuccessMap } from "./styles";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const Success = () => {
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section>
        <h2>Ivan, gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección</span>
      </section>
      <SuccessMap>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={8}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </SuccessMap>
    </Container>
  );
};

export default Success;
