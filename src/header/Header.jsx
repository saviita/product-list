const Header = ({ sortBy, setSortBy }) => {
	return (
		<>
			<h1>Desserts</h1>
			<div>
				<button onClick={() => setSortBy(0)}>Default</button>
				<button onClick={() => setSortBy(0)}>Name</button>
				<button onClick={() => setSortBy(0)}>Price</button>
			</div>
		</>
	);
};
export default Header;
