import { useState } from 'react';
import { PRODUCTS } from './constants/products';

const App = () => {
	const [sortBy, setSortBy] = useState(0);
	const [cart, setCart] = useState(0)

	const sortedProducts = sortProducts(PRODUCTS, sortBy);
	const cartProducts = 

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
					{sortedProducts.map(product => (
						<article key={product.id}>
							<picture>
								<source
									media='(min-width: 1024px)'
									srcSet={product.imgDesktop}
								/>
								<source media='(min-width: 768px)' srcSet={product.imgTablet} />
								<source media='(min-width: 320px)' srcSet={product.imgMobile} />
								<img src={product.imgMobile} alt='' />
							</picture>
							<button onClick={() => addToCart(product, cart, setCart)}>Add to cart</button>
							<div>
								<button>
									<img
										src='/assets/images/icon-decrement-quantity.svg'
										alt=''
									/>
								</button>
								<span>1</span>
								<button>
									<img
										src='/assets/images/icon-increment-quantity.svg'
										alt=''
									/>
								</button>
							</div>
							<div>
								<span>{product.name}</span>
								<h2>{product.title}</h2>
								<span>{product.price}</span>
							</div>
						</article>
					))}
				</section>

				<section>
					<h3>Your cart</h3>
					<img src='/assets/images/illustration-empty-cart.svg' alt='' />
					<div>

					</div>

					<div>
						<span>Total order</span>
						<span>$46.50</span>
					</div>

					<button>Confirm order</button>
				</section>
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
	setCart([...cart, product])

}

export default App;
