import React, { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import Navbar from '../../UI/Navbar';
import { COURSES, HELP, INVESTIMENTS } from '../../../constants/studentTabs';
import Courses from './Courses';
import Investiments from './Investiments';

function Student({ history }) {
	const tabMatch = window.location.search.match(/tab=([a-zA-Z]+)/);
	const [activeTab, setActiveTab] = useState(tabMatch ? tabMatch[1] : COURSES);

	useEffect(() => {
		if (activeTab) {
			history.push(`/estudante/?tab=${activeTab}`);
		}
	}, [activeTab]);

	return (
		<Container>
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
			<Content>
				{activeTab === COURSES && <Courses />}
				{activeTab === INVESTIMENTS && <Investiments />}
				{activeTab === HELP && <div>conteudo da pagina help</div>}
			</Content>
		</Container>
	);
}

export default Student;
