import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class Checkout extends Component {
    
    render () {
        console.log('addeditemstocart', this.props.addedToCart);
        let itemsArray = this.props.addedToCart.map((item, index) => {
            console.log('item ', item.title);
            return ( // must put parenthesis on this line to render correctly
            <TableRow>
                <TableRowColumn>{item.title}</TableRowColumn>
                <TableRowColumn>{item.price}</TableRowColumn>
                <TableRowColumn>
                    <DeleteButton
                        /* index={index}
                        price={item.price} */
                        removeButtonHandler={this.props.removeButtonHandler}
                        item={item}
                        index={index}
                    />
                </TableRowColumn>
            </ TableRow>

        )});
          console.log('addeditemstocart', this.props.addedToCart);
          console.log('itemsArray', itemsArray);
        return (
            <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Item</TableHeaderColumn>
                        <TableHeaderColumn>Price</TableHeaderColumn>
                        <TableHeaderColumn>Delete</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {itemsArray}
                </TableBody>
            </Table>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="LG834R73YRMD4"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>
            </div>
        )
    }
}

export default Checkout;