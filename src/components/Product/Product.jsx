import {
	StyledImg,
	StyledAdd,
	StyledType,
	StyledName,
	StyledPrice,
	StyledInfo,
	StyledArticle,
	StyledIconCart,
	StyledDivQuantity,
	StyledQuantity,
	StyledIconQuantity
} from './product.styles';

const Product = ({ product, cart, setCart, productInCart }) => {
	return (
		<StyledArticle>
			<picture>
				<source media='(min-width: 1024px)' srcSet={product.imgDesktop} />
				<source media='(min-width: 768px)' srcSet={product.imgTablet} />
				<source media='(min-width: 320px)' srcSet={product.imgMobile} />
				<StyledImg src={product.imgMobile} alt='' />
			</picture>
			{!productInCart && (
				<StyledAdd onClick={() => addToCart(product, cart, setCart)}>
					<StyledIconCart
						src='/public/assets/images/icon-add-to-cart.svg'
						alt=''
					/>{' '}
					Add to cart
				</StyledAdd>
			)}

			{productInCart && (
				<StyledDivQuantity>
					<StyledQuantity
						onClick={() => decrementQuantity(product, cart, setCart)}
					>
						<StyledIconQuantity
							src='/assets/images/icon-decrement-quantity.svg'
							alt=''
						/>
					</StyledQuantity>
					<span>{productInCart.quantity}</span>
					<StyledQuantity
						onClick={() => incrementQuantity(product, cart, setCart)}
					>
						<StyledIconQuantity
							src='/assets/images/icon-increment-quantity.svg'
							alt=''
						/>
					</StyledQuantity>
				</StyledDivQuantity>
			)}

			<StyledInfo>
				<StyledType>{product.name}</StyledType>
				<StyledName>{product.title}</StyledName>
				<StyledPrice>${product.price}</StyledPrice>
			</StyledInfo>
		</StyledArticle>
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
