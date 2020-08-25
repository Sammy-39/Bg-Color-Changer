import React from 'react';

import "./style.css";

import ColorPicker from "../ColorPicker/index";

class Background extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
          color : "white"
        };
    }

    onColorChange = (e) => {
        this.setState({
          color: e.target.value
        });
    };

    render = () => {
      return(
         <div
            style = {{backgroundColor: this.state.color}}
            className="bg-container">
          <ColorPicker 
              onChange={this.onColorChange} 
              currentColor={this.state.color} />
        </div> 
      );
    };
}

export default Background;