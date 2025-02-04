import {
	StyledCart,
	StyledTitle,
	StyledEmptyImg,
	StyledProductsCart,
	StyledProductName,
	StyledProductQuantity,
	StyledUnityPrice,
	StyledTotalPrice,
	StyledButtonOrder,
	StyledTotalProductsPrice,
	StyledTotal
} from './cart.styles';

const Cart = ({ cart, setCart }) => {
	const totalProductsInCart = cart.reduce((acc, product) => {
		return acc + product.quantity;
	}, 0);
	console.log(cart);

	const totalPrice = cart.reduce((acc, product) => {
		return acc + product.quantity * product.price;
	}, 0);

	return (
		<>
			<StyledCart>
				<StyledTitle>Your cart ({totalProductsInCart})</StyledTitle>
				{cart.length === 0 && (
					<StyledEmptyImg
						src='/assets/images/illustration-empty-cart.svg'
						alt=''
					/>
				)}
				{cart.length > 0 &&
					cart.map(product => {
						return (
							<StyledProductsCart key={product.id}>
								<div>
									<StyledProductName>{product.name} </StyledProductName>
									<StyledProductQuantity>
										{product.quantity}x
									</StyledProductQuantity>
									<StyledUnityPrice>
										${product.price.toFixed(2)}
									</StyledUnityPrice>
									<StyledTotalPrice>
										${(product.price * product.quantity).toFixed(2)}
									</StyledTotalPrice>
								</div>
								<img
									onClick={() => removeFromCart(product, cart, setCart)}
									src='/assets/images/icon-remove-item.svg'
									alt=''
								/>
							</StyledProductsCart>
						);
					})}
				<StyledTotal>
					<span>Order Total</span>
					<StyledTotalProductsPrice>
						${totalPrice.toFixed(2)}
					</StyledTotalProductsPrice>
				</StyledTotal>
				<StyledButtonOrder>Confirm Order</StyledButtonOrder>
			</StyledCart>
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
