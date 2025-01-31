const Cart = ({ cart, setCart, totalProductsInCart }) => {
	return (
		<>
			<h3>Your cart ({totalProductsInCart})</h3>
			{cart.length === 0 && (
				<img src='/assets/images/illustration-empty-cart.svg' alt='' />
			)}
			{cart.length > 0 &&
				cart.map(product => {
					return (
						<>
							<div>
								<h3>{product.name} </h3>
								<span>{product.quantity}</span>
								<span>{product.price}</span>
								<span>{product.price * product.quantity}</span>
							</div>
							<img
								onClick={() => removeFromCart(product, cart, setCart)}
								src='/assets/images/icon-remove-item.svg'
								alt=''
							/>
						</>
					);
				})}
		</>
	);
};

export default Cart;

const removeFromCart = (product, cart, setCart) => {
	const updateCart = cart.filter(
		productInCart => productInCart.id !== product.id
	);

	setCart(updateCart);
};
