import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton'
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle'


const styles = {
  marginBottom: '16',
  marginLeft: '0'
};

class DeleteButton extends Component {
    render () {
        return (
            // <button onClick={() => {this.props.removeButtonHandler(this.props.index, this.props.item.price)}}> X </button>
            <IconButton 
                tooltip="SVG Icon"
                onClick={() => this.props.removeButtonHandler(this.props.index, this.props.item.price)} 
                iconStyle={styles}
            > 
            <RemoveCircle />
            </IconButton>
        )
    }
}

export default DeleteButton;