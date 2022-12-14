import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';  //TODO
import '../../styles/CartOrderItem.scss';

import icon from '../../assets/icons/icon_close.png';
import {
	Trash2,
	Trash2Fill,
	Trash3Fill,
	TrashFill,
	X,
	XCircle,
	XCircleFill,
	XLg,
	XSquare,
	XSquareFill
} from "react-bootstrap-icons";





const CartOrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext)//TODO

	const handleRemove = product => {//TODO
		removeFromCart(product)
	}


	return (
		<div className="CartOrderItem">
			<figure>
				<img src={product.imagen} alt={product.descripcion} />
			</figure>
			<p>{product.descripcion}</p>
			<p>{product.precio}</p>
			{/* <img src={icon} alt="close" onClick={ () =>handleRemove(product)}/ TODO> */}
			<button alt="close" onClick={() => handleRemove(product)}><XLg/></button>
		</div>
	);
}

export default CartOrderItem;
