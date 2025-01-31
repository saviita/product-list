import { PRODUCTS } from '../../constants/products';
import Product from '../Product/Product';

const Products = ({ cart, setCart, sortBy }) => {
	const sortedProducts = sortProducts(PRODUCTS, sortBy);
	return (
		<>
			{sortedProducts.map(product => {
				const productInCart = cart.find(
					itemInCart => itemInCart.id === product.id
				);
				return (
					<Product
						key={product.id}
						product={product}
						cart={cart}
						setCart={setCart}
						productInCart={productInCart}
					/>
				);
			})}
		</>
	);
};
export default Products;

const sortProducts = (products, sortBy) => {
	// Lógica para ordenar
	const copyProducts = [...products];
	if (sortBy === 0) return copyProducts;
	if (sortBy === 1)
		return copyProducts.sort((a, b) => a.name.localeCompare(b.name));
	if (sortBy === 2) return copyProducts.sort((a, b) => a.price - b.price);
	//devuelves productos ordenados
};
