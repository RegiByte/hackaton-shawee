import React from 'react';
import {
	Investment,
	InvestmentDetailsButton,
	InvestmentsContainer,
	InvestmentsList,
	InvestmentsTitle,
	InvestmentsTitleContainer,
	InvestmentTitle,
	InvestmentTotal,
	InvestmentWallet,
	InvestmentWalletContent,
	InvestmentWallets,
	InvestmentWalletTitle,
	Left,
	MyInvestments,
	MyInvestmentsTitle,
	Right,
	WalletAboutButton,
} from './investiments.style';

function Investments(props) {
	return (
		<InvestmentsContainer>
			<InvestmentsTitleContainer>
				<InvestmentsTitle>
					Perfil de Investidor: Experiente <span className='fas fa-chevron-down' />
				</InvestmentsTitle>
			</InvestmentsTitleContainer>
			<InvestmentWallets>
				<InvestmentWallet>
					<InvestmentWalletTitle>Carteira Recomendada</InvestmentWalletTitle>
					<InvestmentWalletContent>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dignissimos eveniet
						facere illo inventore magnam necessitatibus nulla, provident quaerat qui quo recusandae
						totam voluptas, voluptatibus.
					</InvestmentWalletContent>
					<WalletAboutButton>Saiba Mais</WalletAboutButton>
				</InvestmentWallet>
				<InvestmentWallet>
					<InvestmentWalletTitle>Carteira Recomendada</InvestmentWalletTitle>
					<InvestmentWalletContent>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dignissimos eveniet
						facere illo inventore magnam necessitatibus nulla, provident quaerat qui quo recusandae
						totam voluptas, voluptatibus.
					</InvestmentWalletContent>
					<WalletAboutButton>Saiba Mais</WalletAboutButton>
				</InvestmentWallet>
				<InvestmentWallet>
					<InvestmentWalletTitle>Carteira Recomendada</InvestmentWalletTitle>
					<InvestmentWalletContent>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, dignissimos eveniet
						facere illo inventore magnam necessitatibus nulla, provident quaerat qui quo recusandae
						totam voluptas, voluptatibus.
					</InvestmentWalletContent>
					<WalletAboutButton>Saiba Mais</WalletAboutButton>
				</InvestmentWallet>
			</InvestmentWallets>
			<MyInvestments>
				<MyInvestmentsTitle>Meus Investimentos</MyInvestmentsTitle>
				<InvestmentsList>
					<Investment>
						<Left>
							<InvestmentTitle>Renda Fixa</InvestmentTitle>
						</Left>
						<Right>
							<InvestmentTotal>R$ 25.000,00</InvestmentTotal>
							<InvestmentDetailsButton>Ver Mais</InvestmentDetailsButton>
						</Right>
					</Investment>
					<Investment>
						<Left>
							<InvestmentTitle>Renda Fixa</InvestmentTitle>
						</Left>
						<Right>
							<InvestmentTotal>R$ 25.000,00</InvestmentTotal>
							<InvestmentDetailsButton>Ver Mais</InvestmentDetailsButton>
						</Right>
					</Investment>
					<Investment>
						<Left>
							<InvestmentTitle>Renda Fixa</InvestmentTitle>
						</Left>
						<Right>
							<InvestmentTotal>R$ 25.000,00</InvestmentTotal>
							<InvestmentDetailsButton>Ver Mais</InvestmentDetailsButton>
						</Right>
					</Investment>
					<Investment>
						<Left>
							<InvestmentTitle>Renda Fixa</InvestmentTitle>
						</Left>
						<Right>
							<InvestmentTotal>R$ 25.000,00</InvestmentTotal>
							<InvestmentDetailsButton>Ver Mais</InvestmentDetailsButton>
						</Right>
					</Investment>
				</InvestmentsList>
			</MyInvestments>
		</InvestmentsContainer>
	);
}

export default Investments;
