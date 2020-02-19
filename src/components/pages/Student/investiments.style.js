import styled from 'styled-components';

export const InvestmentsContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 900px;
	margin: 0 auto;
	padding-top: 20px;
`;
export const InvestmentsTitleContainer = styled.div`
	text-align: center;
`;
export const InvestmentsTitle = styled.span`
	background: #aaa;
	border-radius: 8px;
	padding: 10px 20px;
	margin: 0 auto;
`;
export const InvestmentWallets = styled.div`
	display: flex;
	margin-top: 60px;
	align-items: center;
`;
export const InvestmentWallet = styled.div`
	width: 200px;
	margin: 0 20px;
	border-radius: 8px;
	background: #bbb;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const InvestmentWalletTitle = styled.div`
	font-weight: bold;
	font-size: 16px;
`;
export const InvestmentWalletContent = styled.div`
	margin-top: 15px;
`;
export const WalletAboutButton = styled.span`
	margin-top: 40px;
	position: relative;
	background: black;
	text-align: center;
	padding: 10px 20px;
	color: white;
	border-radius: 8px;
`;
export const MyInvestments = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	padding-bottom: 100px;
`;
export const MyInvestmentsTitle = styled.div``;
export const InvestmentsList = styled.div`
	margin-top: 20px;
`;
export const Investment = styled.div`
	padding: 15px 0;
	display: flex;
	align-items: center;
	&:nth-child(odd) {
		background: #bcbcbc;
	}
	&:nth-child(even) {
		background: #d3d3d3;
	}
`;
export const Left = styled.div`
	flex: 1;
	padding-left: 20px;
`;
export const Right = styled.div`
	display: flex;
	align-items: center;
	padding-right: 20px;
`;
export const InvestmentTitle = styled.div``;
export const InvestmentTotal = styled.div`
	margin-right: 20px;
`;
export const InvestmentDetailsButton = styled.div`
	background: black;
	color: white;
	padding: 5px 20px;
	border-radius: 6px;
	cursor: pointer;
`;
