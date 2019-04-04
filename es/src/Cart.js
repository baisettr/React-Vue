import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], cart: {}, totalCost: 0 }
    }
    componentDidMount() {
        const items = [{ title: 1, desc: 'item1', price: 20 }, { title: 2, desc: 'item2', price: 10 }, { title: 3, desc: 'item3', price: 15 }, { title: 4, desc: 'item4', price: 20 }];
        this.setState({ items });
    }

    handleAddItem = (item, e) => {
        let newItem = JSON.parse(JSON.stringify(item));
        const newItemId = item.title;
        let quantity = 0;
        const cart = this.state.cart;
        if (cart[newItemId]) {
            quantity = cart[newItemId].quantity + 1;
        } else {
            quantity = 1;
        }
        newItem.quantity = quantity;
        cart[newItemId] = newItem;
        this.setState({ cart });
    }
    handleRemoveItem = (itemId, e) => {
        let delItemId = itemId;
        const cart = this.state.cart;
        if (cart[delItemId]) {

            if (cart[delItemId].quantity === 1) {
                delete cart[delItemId];
            } else {
                cart[delItemId].quantity -= 1;
            }
        }
        this.setState({ cart });
    }

    DisplayCart = () => {
        const cart = this.state.cart;
        let cartItems = [];
        let totalCost = 0;
        for (let id in cart) {
            let item = cart[id];
            let displayItem = <div key={id} className="list-items"> <h4>{item.desc} quantity: {item.quantity} price: {item.quantity * item.price}</h4></div>
            cartItems = [...cartItems, displayItem];
            totalCost += item.quantity * item.price;
        }

        let total = <h4 key={"total"}>Total: {totalCost}</h4>;
        cartItems = [...cartItems, total];
        return cartItems;
    }
    render() {
        return (
            <div className="Cart">
                <div className="class-items">
                    <h4>List Items</h4>
                    <div>
                        {this.state.items.map((item, index) =>
                            <div
                                key={index} className="list-items">
                                <h6>{item.title}</h6>
                                <h6>{item.desc + " " + item.price}</h6>
                                <button onClick={this.handleAddItem.bind(this, item)}>Add</button>
                                <button onClick={this.handleRemoveItem.bind(this, item.title)}>Remove</button>
                            </div>
                        )}
                    </div>

                </div>
                <div className="cart-items">
                    <h4>List Items</h4>
                    <div>
                        <this.DisplayCart />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;