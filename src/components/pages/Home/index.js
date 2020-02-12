import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	font-family: ${props => props.theme.titleFontFamily};
	font-size: ${props => props.theme.titleFontSize};
	color: ${function(props) {
		return props.theme.primaryColor;
	}};
`;

function Home(props) {
	return <Container>Teste</Container>;
}

export default Home;
