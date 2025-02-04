import styled from 'styled-components';

const StyledTitle = styled.h1`
	font-family: 'Red Hat Text';
`;

const StyledFilter = styled.div`
	font-family: 'Red Hat Text';
	display: flex;
	flex-direction: row;
	gap: 24px;
`;

const StyledButton = styled.button`
	border: 1px solid #c73b0f;
	border-radius: 50px;
	width: 100px;
	height: 34px;
	color: ${({ $sortBy, $number }) => ($sortBy === $number ? 'white' : 'black')};
	background-color: ${({ $sortBy, $number }) =>
		$sortBy === $number ? '#c73b0f' : 'white'};
`;

const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	padding-block: 26px;
`;

export { StyledTitle, StyledFilter, StyledButton, StyledHeader };
