import React from 'react';
import {Container, CoursesLi, CoursesUl, MyCoursesSection, Nav, NavBar, NavOpt} from './styles';
import logo from '../../../assets/logo193.png';
import {Img} from "../Home/styles";
import {Link as RouterLink} from "react-router-dom";

function Cursos(props) {
	return (
		<Container>
			<Nav>
				<RouterLink to='/'>
					<Img src={logo} alt='Logo'/>
				</RouterLink>
				<NavBar>
					<NavOpt>Cursos</NavOpt>
					<NavOpt>Investimentos</NavOpt>
					<NavOpt>Ajuda</NavOpt>
					<NavOpt>Perfil</NavOpt>
				</NavBar>
			</Nav>
			<MyCoursesSection>
				<CoursesUl>
					<CoursesLi></CoursesLi>
					<CoursesLi></CoursesLi>
					<CoursesLi></CoursesLi>
					<CoursesLi></CoursesLi>
				</CoursesUl>
			</MyCoursesSection>
		</Container>
	);
}

export default Cursos;
