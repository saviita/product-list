import styled from 'styled-components';

const StyledCart = styled.div`
	padding: 24px;
	display: flex;
	flex-direction: column;
`;

const StyledTitle = styled.h3`
	color: #c73b0f;
	font-size: 24px;
	font-weight: 700px;
`;

const StyledEmptyImg = styled.img`
	width: 128px;
	height: 128px;
	align-self: center;
`;

const StyledProductsCart = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 16px;
	border-bottom: 1px solid gray;
`;

const StyledProductName = styled.h3`
	font-size: 14px;
	font-weight: 600;
`;

const StyledProductQuantity = styled.span`
	color: #c73b0f;
	font-size: 14px;
	font-weight: 600;
	margin-right: 8px;
`;

const StyledUnityPrice = styled.span`
	color: #87635a;
	font-size: 14px;
	font-weight: 400;
	margin-right: 8px;
`;

const StyledTotalPrice = styled.span`
	color: #87635a;
	font-size: 14px;
	font-weight: 600;
`;

const StyledButtonOrder = styled.button`
	background-color: #c73b0f;
	width: 279px;
	padding: 16px 24px;
	margin-top: 32px;
	border-radius: 50px;
	border: none;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 14px;
`;

const StyledTotal = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledTotalProductsPrice = styled.span`
	color: #260f08;
	font-size: 24px;
	font-weight: 700;
`;

export {
	StyledTitle,
	StyledCart,
	StyledEmptyImg,
	StyledProductsCart,
	StyledProductName,
	StyledProductQuantity,
	StyledUnityPrice,
	StyledTotalPrice,
	StyledButtonOrder,
	StyledTotalProductsPrice,
	StyledTotal
};
