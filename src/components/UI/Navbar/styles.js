import styled, { css } from 'styled-components';
import profile from '../../../assets/profile.png';
import logo from '../../../assets/logo193.png';

export const Container = styled.nav`
	border-bottom: 1px solid rgba(143, 143, 143, 0.5);
	display: flex;
	justify-content: space-between;
`;
export const NavLogo = styled.img.attrs({
	src: logo,
})`
	width: 70px;
	height: 70px;
`;
export const Left = styled.div``;
export const Right = styled.div`
	display: flex;
`;
export const Tabs = styled.div`
	display: flex;
	margin-right: 40px;
`;
export const Tab = styled.div`
	align-self: flex-end;
	padding: 0 10px 20px 10px;
	cursor: pointer;
	${props =>
		props.active &&
		css`
			border-bottom: 3px solid ${props.theme.primaryColor};
		`}
`;
export const Profile = styled.div`
	align-self: center;
	margin-right: 40px;
`;
export const ProfileIcon = styled.img.attrs({
	src: profile,
})`
	width: 60px;
	height: 60px;
`;
export const Content = styled.div``;
