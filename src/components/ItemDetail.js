import React, { Component } from 'react';
import axios from 'axios';

class ItemDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  componentWillMount() {

    axios.post('http://localhost:8080/getItemById', {
      _id: this.props.productId,
    })
    .then((response) => {
      console.log(response)
      this.setState(response.data[0])
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  render() {

    return (
      <div style={container} >
        <div style={item} >
          <h2>{this.state.title}</h2>
          <div style={details} >
            <img style={imgStyle} src={this.state.img} />
            <div style={summary}> {this.state.summary} </div>
            <div style={description}> {this.state.description} </div>
            <div style={row}>
              <div style={left}> Number in stock:  {this.state.stock_available} </div>
              <div style={right}> Price:  {this.state.price} </div>
            </div>
            <div style={row}>
              <div style={right}> <button> Add to Cart </button> </div>
            </div>
          </div>
        </div>
        <div style={basket} ></div>
      </div>
    );
  }
}

const container =  {
  "width": "100%",
  "height": "750px"
};

const summary =  {
  "display": "inline-block",
  "width": "80%",
  "margin": "0 auto",
  "marginTop": "20px",
  "fontSize": "18px"
};

const description = JSON.parse(JSON.stringify(summary));
description.fontSize = "14px";

const row = JSON.parse(JSON.stringify(summary));

const left = JSON.parse(JSON.stringify(summary));
left.width = "45%";
left.textAlign = "left";
left.float = "left";
left.fontSize = "14px";


const right = JSON.parse(JSON.stringify(summary));
right.width = "45%";
right.textAlign = "right";
right.float = "right";


const imgStyle = {
  "display": "inline-block",
  "float" : "left",
  "marginLeft": "150px",
  "marginTop": "30px",
  "width": "auto",
  "height": "250px"
};

const item = {
  "textAlign": "center",
  "display": "inline-block",
  "float" : "left",
  "width": "80%",
  "height": "100%"
};

const details = {
  "display": "inline-block",
  "float" : "left",
  "width": "80%",
  "marginLeft": "70px",
  "height": "80%"
};

const basket =  {
  "display": "inline-block",
  "width": "20%",
  "height": "100%"
};

export default ItemDetail;
