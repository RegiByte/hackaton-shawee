import styled, { css } from 'styled-components';

export const Container = styled.section`
	background: #eee;
`;

export const Reasons = styled.div`
	display: flex;
	padding: 10px;
	justify-content: center;
	flex-direction: column;

	${props => props.theme.media.desktop`
		flex-direction: row;
	`}
`;
export const Reason = styled.div`
	padding: 10px;
`;
export const ReasonTitleImage = styled.img`
	background: #800024;
	padding: 20px 20px;
	margin: 1px 30px 0 0;
	border-radius: 100%;
	position: absolute;
	left: 30px;
`;

export const ReasonTitleContent = styled.div`
	flex: 1;
`;

export const ReasonTitle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	text-align: left;
	padding: 3px 100px;
`;

export const ReasonContent = styled.div`
	color: #999;
	text-align: left;
	padding: 1px 90px;
	margin-left: 100px;

	${props => props.theme.media.phone`
		max-width: 100%;
	`}
	
	${props => props.theme.media.tablet`
		padding: 1px 90px;
		margin-left: 100px;
		margin: 0;
	`}

	${props => props.theme.media.desktop`
		max-width: 300px;
		padding: 30px 90px;
	`}
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: #8d8d8d;
	z-index: 10;
`;

export const Img = styled.img`
	width: 150px;
	height: 150px;

	${props =>
		props.collapsed &&
		css`
			width: 80px;
			height: 80px;
		`}
`;

export const Links = styled.ul`
	display: flex;
	font-size: ${props => props.theme.buttonFontSize};
`;
export const Link = styled.li`
	padding: 30px;
	color: #e4e1df;
	font-weight: bold;
	cursor: pointer;
	margin: 0px 10px;

	a {
		color: inherit;
		text-decoration: none;
	}
`;
export const Login = styled.a`
	padding: 30px 20px;
	color: #e4e1df;
	font-weight: bold;
	cursor: pointer;
	font-size: ${props => props.theme.buttonFontSize};
`;
export const OpenAccountButton = styled.a`
	margin: 0 Auto;
	text-align: Center;
	background: ${props => props.theme.accentColor};
	font-size: ${props => props.theme.buttonFontSize};
	border-radius: 4px;
	padding: 18px 32px;
	font-family: ${props => props.theme.buttonFontFamily};
	color: white;
	font-weight: bold;
	cursor: pointer;
`;

export const BannerContainer = styled.section`
	min-height: 400px;
	background: #8d8d8d;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`
	font-family: ${props => props.theme.titleFontFamily}
	padding: 20px;
	margin-top: 20px;
	margin-bottom: 40px;
	font-weight: bold;
	font-size: ${props => props.theme.titleFontSize};
	text-align: center;
`;

export const Differentials = styled.section`
	background: #e4e1df;
	padding: 500px 80px;
	margin: 40px 70px;
	border-radius: 10px;
	-webkit-box-shadow: 0px 0px 9px -2px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 9px -2px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 9px -2px rgba(0, 0, 0, 0.75);
	${props => props.theme.media.desktop`
	padding: 300px 80px;
	margin: 70px 100px;
	border-radius: 10px;
 -webkit-box-shadow: 0px 0px 9px -2px rgba(0,0,0,0.75);
 -moz-box-shadow: 0px 0px 9px -2px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 9px -2px rgba(0,0,0,0.75);
	`}
`;

export const DifferentialsTitle = styled.h1`
	font-family: ${props => props.theme.titleFontFamily};
	margin-top: -480px;
	margin-bottom: 40px;
	font-weight: bold;
	font-size: ${props => props.theme.titleFontSize};
	text-align: center;
	${props => props.theme.media.desktop`
	margin-bottom: 40px;
	margin-top: -280px;
	`}
`;

export const BannerContainerFoot = styled.section`
	display: flex;
	min-height: 200px;
	background: #8d8d8d;
	display: flex;
	align-items: center;
`;

export const MarketingText = styled.h3`
	text-align: center;
	justify-content: center;
	padding: 1px 30px;
	${props => props.theme.media.desktop`
	font-size: 20px;
	margin-left: 100px`}
`;

export const OpenAccountButtonFoot = styled.a`
	margin: 0 Auto;
	text-align: Center;
	background: black;
	font-size: 10px;
	border-radius: 4px;
	padding: 10px 20px;
	font-family: ${props => props.theme.buttonFontFamily};
	color: white;
	font-weight: bold;
	cursor: pointer;
	margin-right: 50px;
	${props => props.theme.media.desktop`
	padding: 18px 32px;
	font-size: 20px;
	margin-right: 100px
	
	`}
`;

export const CopyrightFooter = styled.section`
	display: flex;
	min-height: 90px;
	background: black;
	display: flex;
	align-items: center;
`;

export const Copyright = styled.footer`
	color: white;
	font-family: ${props => props.theme.buttonFontFamily};
	font-weight: bold;
	font-size: 16px;
	text-align: center;
	margin-left: 50px;
	${props => props.theme.media.desktop`
	font-size: 19px;
	margin-left: 300px;
	`}
`;
