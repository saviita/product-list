import {
	StyledButton,
	StyledFilter,
	StyledTitle,
	StyledHeader
} from './Header.styles';

const Header = ({ setSortBy }) => {
	return (
		<StyledHeader>
			<StyledTitle>Desserts</StyledTitle>
			<StyledFilter>
				<StyledButton onClick={() => setSortBy(0)}>Default</StyledButton>
				<StyledButton onClick={() => setSortBy(1)}>Name</StyledButton>
				<StyledButton onClick={() => setSortBy(2)}>Price</StyledButton>
			</StyledFilter>
		</StyledHeader>
	);
};
export default Header;
