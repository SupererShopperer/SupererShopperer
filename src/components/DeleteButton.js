import React, { Component } from 'react';
// import Checkbox from 'material-ui/Checkbox';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle'

const styles= {
    checkbox: {
        marginBottom: 16,
        marginLeft: 0
    }
}

class DeleteButton extends Component {
    render () {
        console.log('ITEM HELP ME!!!', this.props.item)
        console.log('whats in the INDEXXXXX?', this.props.index)
        return (
            <button onClick={() => {this.props.removeButtonHandler(this.props.index, this.props.item.price)}}> X </button>
            // <Checkbox 
            // onCheck={() => this.props.removeButtonHandler(this.props.index, this.props.price)} 
            // checkIcon={<RemoveCircle />}
            // unchckedIcon={<RemoveCircle />}
            // style={styles.checkbox}
            // />
        )
    }
}

export default DeleteButton;