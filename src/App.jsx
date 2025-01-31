import { useState } from 'react';
import { PRODUCTS } from './constants/products';
import Header from './header/Header';
import Products from './products/Products';
import Cart from './cart/Cart';

const App = () => {
	const [sortBy, setSortBy] = useState(0);
	const [cart, setCart] = useState([]);

	const sortedProducts = sortProducts(PRODUCTS, sortBy);
	const totalProductsInCart = cart.reduce((acc, product) => {
		return acc + product.quantity;
	}, 0);
	console.log(cart);
	return (
		<>
			<Header sortBy={sortBy} setSortBy={setSortBy}></Header>
			<Products
				cart={cart}
				setCart={setCart}
				sortedProducts={sortedProducts}
			></Products>
			<Cart
				cart={cart}
				setCart={setCart}
				totalProductsInCart={totalProductsInCart}
			></Cart>
		</>
	);
};

export default App;

const sortProducts = (products, sortBy) => {
	// Lógica para ordenar
	const copyProducts = [...products];
	if (sortBy === 0) return copyProducts;
	if (sortBy === 1)
		return copyProducts.sort((a, b) => a.name.localeCompare(b.name));
	if (sortBy === 2) return copyProducts.sort((a, b) => a.price - b.price);
	//devuelves productos ordenados
};
