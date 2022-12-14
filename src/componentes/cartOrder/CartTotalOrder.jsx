import React, { useContext } from 'react';
import CartOrderItem from './CartOrderItem';
import AppContext from '../../context/AppContext';
import '../../styles/CartTotalOrder.scss';

import icon from '../../assets/icons/icon_close.png';


const CartTotalOrder = () => {

	const { state } = useContext(AppContext);

	const totalOrder = () => {
		const reducer = (counter, actualValue) => counter + actualValue.precio;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}


	return (
		<aside className="CartTotalOrder py-3">
			<div className="title-container">
				{/* <img src={"jjk"} alt="arrow TODO" /> */}
				<p className="title"> MI PEDIDO</p>
			</div>
			<div className="my-order-content">

				{state.cart.map(eachItem => (
					<CartOrderItem product={eachItem} key={`orderItem-${eachItem.id}`} />

				))}

				<div className="order py-5">
					<p>
						<span>Total</span>
					</p>
					<p>${totalOrder()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default CartTotalOrder;
