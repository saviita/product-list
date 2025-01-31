const Product = ({ product, cart, setCart, productInCart }) => {
	return (
		<article>
			<picture>
				<source media='(min-width: 1024px)' srcSet={product.imgDesktop} />
				<source media='(min-width: 768px)' srcSet={product.imgTablet} />
				<source media='(min-width: 320px)' srcSet={product.imgMobile} />
				<img src={product.imgMobile} alt='' />
			</picture>
			{!productInCart && (
				<button onClick={() => addToCart(product, cart, setCart)}>
					Add to cart
				</button>
			)}

			{productInCart && (
				<div>
					<button onClick={() => decrementQuantity(product, cart, setCart)}>
						<img src='/assets/images/icon-decrement-quantity.svg' alt='' />
					</button>
					<span>{product.quantity}</span>
					<button onClick={() => incrementQuantity(product, cart, setCart)}>
						<img src='/assets/images/icon-increment-quantity.svg' alt='' />
					</button>
				</div>
			)}

			<div>
				<span>{product.name}</span>
				<h2>{product.title}</h2>
				<span>{product.price}</span>
			</div>
		</article>
	);
};

export default Product;

const addToCart = (product, cart, setCart) => {
	setCart([...cart, { ...product, quantity: 1 }]);
};

const incrementQuantity = (product, cart, setCart) => {
	const updateCart = cart.map(productInCart => {
		if (productInCart.id === product.id) productInCart.quantity++;

		return productInCart;
	});

	setCart(updateCart);
};

const decrementQuantity = (product, cart, setCart) => {
	const updateCart = cart.map(productInCart => {
		if (productInCart.id === product.id) productInCart.quantity--;

		return productInCart;
	});

	setCart(updateCart);
};
