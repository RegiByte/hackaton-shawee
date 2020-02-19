import styled from 'styled-components';

export const Container = styled.section`
	min-height: 100vh;
	background: #e0dbdb;
	display: flex;
	flex-direction: column;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
`;

export const CoursesContainer = styled.div`
	display: flex;
	width: 100%;
`;
export const Left = styled.div`
	border-right: 2px solid #ccc;
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: flex-end;
	min-width: 350px;
`;
export const CoursesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.2);
	margin-right: 20px;
	margin-top: 20px;
`;
export const CoursesTitle = styled.div`
	padding: 20px 0;
	font-weight: 500;
	font-size: 18px;
`;
export const CoursesDetails = styled.div`
	background: #bbb;
	padding-left: 20px;
	padding-bottom: 20px;
`;
export const CoursesProgress = styled.div``;
export const ProgressBar = styled.div`
	background: ${props => props.theme.accentColor};
	border-radius: 20px;
	width: 80%;
	height: 15px;
`;

export const ProgressLabel = styled.div`
	margin-top: 8px;
`;
export const CoursesList = styled.div``;
export const Course = styled.div`
	cursor: pointer;
	padding: 25px 70px 25px 20px;
	position: relative;
	transition: background-color 200ms;
	&:nth-child(odd) {
		background: #d7d7d7;
		&:hover {
			background: #ccc;
		}
	}
	&:nth-child(even) {
		background: #bbb;
		&:hover {
			background: #ccc;
		}
	}
`;
export const CourseArrow = styled.i.attrs({
	className: 'fas fa-chevron-right',
})`
	position: absolute;
	top: 25px;
	right: 10px;
`;
export const Right = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
`;
export const Player = styled.div`
	width: 800px;
	height: 400px;
	background: white;
	position: relative;
	margin-left: 20px;
	margin-top: 20px;
`;
export const PlayerBottomBar = styled.div`
	position: absolute;
	width: 100%;
	height: 40px;
	display: flex;
	bottom: 0;
	left: 0;
	border-top: 1px solid rgba(0,0,0,.2);
	align-items: center;
`;
export const PlayButton = styled.i.attrs({
	className: 'fas fa-play',
})`
	padding: 0 10px;
`;
export const SoundButton = styled.i.attrs({
	className: 'fas fa-volume-up',
})`
	padding: 0 10px;
`;
export const Timer = styled.div`
	display: flex;
`;
export const Start = styled.div`
	position:relative;
	&:after {
		content: '/';
		padding: 0 5px;
	}
`;
export const Stop = styled.div``;
