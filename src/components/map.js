//AIzaSyBD5r_xfTw8Je2yKNruxW-1RSvMPfZzG0g
import {Component} from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.501, -0.09]

export class SRmap extends Component {
  render() {
    return (
      <div id="mapid" style={{ height: '100%'}}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', margin: "3px" , zIndex: "0"}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

export default SRmap;