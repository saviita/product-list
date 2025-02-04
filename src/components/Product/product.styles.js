import styled from 'styled-components';

const StyledArticle = styled.article`
	display: flex;
	flex-direction: column;
`;

const StyledImg = styled.img`
	border-radius: 8px;
`;

const StyledAdd = styled.button`
	position: relative;
	top: -20px;
	width: 160px;
	padding: 12px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	align-self: center;
	gap: 8px;
	border-radius: 50px;
	border: 1px solid #ad8a85;
	background-color: #fcf8f6;
	font-size: 14px;
	font-weight: 600;
`;

const StyledIconCart = styled.img`
	width: 20px;
	height: 20px;
`;

const StyledType = styled.span`
	color: #87635a;
	font-size: 14px;
	font-weight: 400;
`;

const StyledName = styled.h2`
	color: #260f08;
	font-size: 16px;
	font-weight: 600;
	margin: 0;
`;

const StyledPrice = styled.span`
	color: #c73b0f;
	font-size: 16px;
	font-weight: 600;
`;

const StyledInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

const StyledDivQuantity = styled.div`
	position: relative;
	top: -20px;
	width: 160px;
	padding: 12px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-self: center;
	background-color: #c73b0f;
	border-radius: 50px;
	color: white;
	font-size: 14px;
`;

const StyledQuantity = styled.button`
	width: 18px;
	height: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50px;
	border: 2px solid white;
	background-color: #c73b0f;
	padding: 0;
`;

const StyledIconQuantity = styled.img`
	width: 10px;
	height: 10px;
`;

export {
	StyledImg,
	StyledAdd,
	StyledType,
	StyledName,
	StyledPrice,
	StyledInfo,
	StyledArticle,
	StyledIconCart,
	StyledDivQuantity,
	StyledQuantity,
	StyledIconQuantity
};
