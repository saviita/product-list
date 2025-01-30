import { useState } from 'react';
import { PRODUCTS } from './constants/products';

const App = () => {
	const [sortBy, setSortBy] = useState(0);
	const [cart, setCart] = useState([]);

	const sortedProducts = sortProducts(PRODUCTS, sortBy);
	console.log(cart);
	return (
		<>
			<header>
				<h1>Desserts</h1>
				<div>
					<button onClick={() => setSortBy(0)}>Default</button>
					<button onClick={() => setSortBy(1)}>Name</button>
					<button onClick={() => setSortBy(2)}>Price</button>
				</div>
			</header>

			<main>
				<section>
					{sortedProducts.map(product => {
						const productInCart = cart.find(
							itemInCart => itemInCart.id === product.id
						);

						return <article key={product.id}>
							<picture>
								<source
									media='(min-width: 1024px)'
									srcSet={product.imgDesktop}
								/>
								<source media='(min-width: 768px)' srcSet={product.imgTablet} />
								<source media='(min-width: 320px)' srcSet={product.imgMobile} />
								<img src={product.imgMobile} alt='' />
							</picture>
							{!productInCart && 
								<button onClick={() => addToCart(product, cart, setCart)}>Add to cart</button>
							}	

							{productInCart &&
							<div>
								<button onClick={() => decrementQuantity(product, cart, setCart)}>
									<img
										src='/assets/images/icon-decrement-quantity.svg'
										alt=''
										/>
								</button>
								<span>{product.quantity}</span>
								<button onClick={() => incrementQuantity(product, cart, setCart)}>
									<img
										src='/assets/images/icon-increment-quantity.svg'
										alt=''
										/>
								</button>
							</div>
									}
							<div>
								<span>{product.name}</span>
								<h2>{product.title}</h2>
								<span>{product.price}</span>
							</div>

							
						</article>
				</section>

				<section>
					<h3>Your cart ({cart.length})</h3>
					{!productInCart && 
					<img src='/assets/images/illustration-empty-cart.svg' alt='' />}

					{productInCart &&

					cart.map(product => {
						return <>
							<div>
								<h3>{product.name} </h3>
								<span>{product.quantity}</span>
								<span>{product.price}</span>
								<span>{product.price * product.quantity}</span>
							</div>
							<img onClick={() => removeFromCart(product, cart, setCart)} src="/public/assets/images/icon-remove-item.svg" alt="" />
						</>
					})
					
					}
				</section>
				})}
			</main>
		</>
	);
};

const sortProducts = (products, sortBy) => {
	// Lógica para ordenar
	const copyProducts = [...products];
	if (sortBy === 0) return copyProducts;
	if (sortBy === 1)
		return copyProducts.sort((a, b) => a.name.localeCompare(b.name));
	if (sortBy === 2) return copyProducts.sort((a, b) => a.price - b.price);
	//devuelves productos ordenados
};

const addToCart = (product, cart, setCart) => {
	setCart([...cart, {...product, quantity: 1}]);
	
};

const removeFromCart = (product, cart, setCart) => {
	const updateCart = cart.filter(productInCart => productInCart.id !== product.id)

	setCart(updateCart)
}

const incrementQuantity = (product, cart, setCart) => {
	const updateCart = cart.map(productInCart => {
		if (productInCart.id === product.id)
			productInCart.quantity++;
		
		return productInCart;
	})

	setCart(updateCart)
}

const decrementQuantity = (product, cart, setCart) => {
	const updateCart = cart.map(productInCart => {
		if (productInCart.id === product.id)
			productInCart.quantity--;

		return productInCart
		}
	)

	setCart(updateCart)
}

export default App;
