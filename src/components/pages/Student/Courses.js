import React from 'react';
import {
	Course,
	CourseArrow,
	CoursesContainer,
	CoursesDetails,
	CoursesList,
	CoursesProgress,
	CoursesTitle,
	CoursesWrapper,
	Left,
	PlayButton,
	Player,
	PlayerBottomBar,
	ProgressBar,
	ProgressLabel,
	Right,
	SoundButton,
	Start,
	Stop,
	Timer,
} from './styles';

function Courses(props) {
	return (
		<CoursesContainer>
			<Left>
				<CoursesWrapper>
					<CoursesDetails>
						<CoursesTitle>Meus Cursos</CoursesTitle>
						<CoursesProgress>
							<ProgressBar />
							<ProgressLabel>75% concluído</ProgressLabel>
						</CoursesProgress>
					</CoursesDetails>
					<CoursesList>
						<Course>
							Educação Financeira <CourseArrow />
						</Course>
						<Course>
							Renda Fixa <CourseArrow />
						</Course>
						<Course>
							Tesouro Direto <CourseArrow />
						</Course>
					</CoursesList>
				</CoursesWrapper>
			</Left>
			<Right>
				<Player>
					<PlayerBottomBar>
						<PlayButton />
						<SoundButton />
						<Timer>
							<Start>10:30</Start>
							<Stop>11:00</Stop>
						</Timer>
					</PlayerBottomBar>
				</Player>
			</Right>
		</CoursesContainer>
	);
}

export default Courses;
