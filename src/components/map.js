import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SRmap extends Component {
  static defaultProps = {
    center: {
      lat: 19.07,
      lng: 72.87
    },
    zoom: 11
  };
 
  render() {
    return (

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBRXtcENtFZq1UuHYwMdD7-UbGQEPvFLrw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SRmap;