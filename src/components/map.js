import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Gmap extends Component {

 
  render() {
     const lat = this.props.lat;
     const lng = this.props.lng;
    return (

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBRXtcENtFZq1UuHYwMdD7-UbGQEPvFLrw" }}
          defaultCenter={{lat:lat,lng:lng}}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Gmap;