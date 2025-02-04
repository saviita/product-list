import { useState } from 'react';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import MainContainer from './components/main-container/MainContainer';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [sortBy, setSortBy] = useState(0);
	const [cart, setCart] = useState([]);

	return (
		<>
			<GlobalStyles />
			<Header sortBy={sortBy} setSortBy={setSortBy} />
			<MainContainer>
				<Products cart={cart} setCart={setCart} sortBy={sortBy} />
				<Cart cart={cart} setCart={setCart} />
			</MainContainer>
		</>
	);
};

export default App;
