import React from 'react';
import { Container, Left, NavLogo, Profile, ProfileIcon, Right, Tab, Tabs } from './styles';
import { COURSES, HELP, INVESTIMENTS } from '../../../constants/studentTabs';
import { Link } from 'react-router-dom';

function Navbar({ activeTab, setActiveTab }) {
	return (
		<Container>
			<Left>
				<Link to='/'>
					<NavLogo />
				</Link>
			</Left>
			<Right>
				<Tabs>
					<Tab onClick={() => setActiveTab(COURSES)} active={activeTab === COURSES}>
						Cursos
					</Tab>
					<Tab onClick={() => setActiveTab(INVESTIMENTS)} active={activeTab === INVESTIMENTS}>
						Investimentos
					</Tab>
					<Tab onClick={() => setActiveTab(HELP)} active={activeTab === HELP}>
						Ajuda
					</Tab>
				</Tabs>
				<Profile>
					<ProfileIcon />
				</Profile>
			</Right>
		</Container>
	);
}

export default Navbar;
