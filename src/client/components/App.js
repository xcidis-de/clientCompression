import React, { Component } from "react";
import axios from 'axios';

export default class App extends Component {
  //text only.
  constructor(props) {
    super(props);
    this.reader = this.reader.bind(this);
    this.syncPost = this.syncPost.bind(this);
  }
  componentDidMount() {
    const input = document.getElementById("compress");

    input.addEventListener("change", event => {
      let file = [...event.target.files];
      console.log(file)
      this.reader(file[0]);
    });
  }

  syncPost(data){
    axios.post('/downloads', JSON.stringify(data))
  }

  reader(file) {
      var chunks = 2048;
      var offset = 0;
      var fr = new FileReader();

      fr.onload = () => {
          var slice = new Uint8Array(fr.result);
          this.syncPost(slice)//async post here
          offset += chunks;
          next();
      };

      fr.onerror = () => {
          // break & start over? continue? file probably corrupted???
          console.log('error');
          throw new Error('broke');
      };
      next();
  
      function next() {
          //slices part of file, passes to api's buffer
          let slice;
          if (offset >= file.size) {
              slice = file.slice(offset, file.size)
              if(!slice[0]){
                 return
              }
              fr.readAsArrayBuffer(slice);
          }
          slice = file.slice(offset, offset + chunks);
          fr.readAsArrayBuffer(slice);
      }
  }
  render() {
    return (
      <div>
        <form encType="multipart/form-data" action='/downloads' method='post' onSubmit={()=>{return false}}>
          <input type="file" id="compress" name="compress" accept="*" />
        </form>
      </div>
    );
  }
}
