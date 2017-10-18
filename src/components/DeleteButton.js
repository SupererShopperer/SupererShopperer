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
        return (
            <button onClick={() => {this.props.removeButtonHandler(this.props.index, this.props.price)}}> X </button>
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