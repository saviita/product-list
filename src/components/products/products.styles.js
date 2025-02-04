import styled from 'styled-components';

const StyledProducts = styled.section`
	display: grid;
	grid-template-columns: repeat(1, 1fr);

	@media screen and (width>768px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 24px 32px;
	}
`;

export { StyledProducts };
