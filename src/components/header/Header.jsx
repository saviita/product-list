import {
	StyledButton,
	StyledFilter,
	StyledTitle,
	StyledHeader
} from './Header.styles';

const Header = ({ setSortBy, sortBy }) => {
	return (
		<StyledHeader>
			<StyledTitle>Desserts</StyledTitle>
			<StyledFilter>
				<StyledButton $sortBy={sortBy} $number={0} onClick={() => setSortBy(0)}>
					Default
				</StyledButton>
				<StyledButton $sortBy={sortBy} $number={1} onClick={() => setSortBy(1)}>
					Name
				</StyledButton>
				<StyledButton $sortBy={sortBy} $number={2} onClick={() => setSortBy(2)}>
					Price
				</StyledButton>
			</StyledFilter>
		</StyledHeader>
	);
};
export default Header;
