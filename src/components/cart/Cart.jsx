import {
	StyledCart,
	StyledTitle,
	StyledEmptyImg,
	StyledProductsCart,
	StyledProductName,
	StyledProductQuantity,
	StyledUnityPrice,
	StyledTotalPrice,
	StyledButtonOrder
} from './cart.styles';

const Cart = ({ cart, setCart, totalProductsInCart }) => {
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
							<>
								<StyledProductsCart>
									<div>
										<StyledProductName>{product.name} </StyledProductName>
										<StyledProductQuantity>
											{product.quantity}x
										</StyledProductQuantity>
										<StyledUnityPrice>${product.price}</StyledUnityPrice>
										<StyledTotalPrice>
											${product.price * product.quantity}
										</StyledTotalPrice>
									</div>
									<img
										onClick={() => removeFromCart(product, cart, setCart)}
										src='/assets/images/icon-remove-item.svg'
										alt=''
									/>
								</StyledProductsCart>
							</>
						);
					})}
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
