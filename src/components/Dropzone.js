import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
 
class Dropzone extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
      <DropzoneArea
        onChange={this.handleChange.bind(this)}
        acceptedFiles={['image/*']}
        maxFileSize={5000000}
        filesLimit="5"
        dropzoneText="Upload Property Images Here"
        />
    )
  }
}
 
export default Dropzone;