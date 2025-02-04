import styled from 'styled-components';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media screen and (width>1024px) {
		flex-direction: row;
	}
`;
export { StyledMain };
