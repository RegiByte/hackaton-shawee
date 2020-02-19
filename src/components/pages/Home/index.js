import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import logo from '../../../assets/logo193.png';
import {
	BannerContainer,
	BannerContainerFoot,
	Container, Copyright,
	CopyrightFooter,
	Differentials,
	DifferentialsTitle,
	Img,
	Link,
	Links,
	Login,
	MarketingText,
	Nav,
	OpenAccountButton,
	OpenAccountButtonFoot,
	Reason,
	ReasonContent,
	Reasons,
	ReasonTitle,
	ReasonTitleContent,
	ReasonTitleImage,
	Title,
} from './styles';

function Home() {
	return (
		<Container>
			<BannerContainer>
				<Nav>
					<RouterLink to='/'>
						<Img src={logo} alt='Logo'/>
					</RouterLink>
					<Links>
						<Link>Contato</Link>
						<Link>Sobre</Link>
						<Link>Ajuda</Link>
						<RouterLink to='/Cursos'>
							<Link>Cursos</Link>
						</RouterLink>
					</Links>
					<Login>Login</Login>
				</Nav>
				<OpenAccountButton>Abrir Minha Conta</OpenAccountButton>
			</BannerContainer>
			<Title>POR QUE USAR A INVESTSCHOOL?</Title>
			<Reasons>
				<Reason>
					<ReasonTitle>
						<ReasonTitleImage/>
						<ReasonTitleContent>Motivo 1</ReasonTitleContent>
					</ReasonTitle>
					<ReasonContent>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aut ea earum
						fuga nulla, obcaecati, odio omnis optio quia quibusdam quidem ratione tenetur veniam
						voluptate! Consequatur dolorem eligendi et fugiat impedit libero nesciunt, odit placeat
						qui quidem repudiandae temporibus?
					</ReasonContent>
				</Reason>
				<Reason>
					<ReasonTitle>
						<ReasonTitleImage/>
						Motivo 2
					</ReasonTitle>
					<ReasonContent>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur
						corporis cumque deserunt dignissimos, distinctio doloribus dolorum ducimus ea eaque
						error ex facilis iste magnam minima natus odio, officia officiis provident quas quasi,
						quidem quis rem repellat totam unde vitae?
					</ReasonContent>
				</Reason>
				<Reason>
					<ReasonTitle>
						<ReasonTitleImage/>
						Motivo 3
					</ReasonTitle>
					<ReasonContent>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda atque commodi
						consequuntur corporis deserunt dicta doloremque dolorum earum error explicabo incidunt
						inventore laudantium maiores nam nisi nobis odio officia omnis provident quibusdam
						reiciendis sunt, tempora unde veniam voluptas, voluptatibus!
					</ReasonContent>
				</Reason>
			</Reasons>
			<Differentials>
				<DifferentialsTitle>DIFERENCIAIS</DifferentialsTitle>
			</Differentials>
			<BannerContainerFoot>
				<MarketingText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, eos?
				</MarketingText>
				<OpenAccountButtonFoot>Abrir Minha Conta</OpenAccountButtonFoot>
			</BannerContainerFoot>
			<CopyrightFooter>
				<Copyright>Todos os direitos reservados</Copyright>
			</CopyrightFooter>
		</Container>
	);
}

export default Home;
