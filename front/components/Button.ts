import styled, { css } from 'styled-components/native';

// injectGlobal`
// 	body {
// 		padding: 30px;
// 	}
// `
interface StyledBtnProps {
	// color
	primary_1?: boolean;
	primary_2?: boolean;
	primary_3?: boolean;

	// type
	text?: boolean;

	// round
	round_0?: boolean;
	round_1?: boolean;
	round_2?: boolean;
	round_3?: boolean;
	round_4?: boolean;
	round_5?: boolean;

	// height
	height_1?: boolean;
	height_3?: boolean;
	height_4?: boolean;

}

export const Btn = styled.TouchableOpacity<StyledBtnProps>`
align-items: center;
	justify-content: center;
	height: 32px;
	border-radius: 8px;
	background-color: #eeeeee;

	${props => props.primary_1 && css``}
	${props => props.primary_2 && css` background-color: #49b792;	`}
	${props => props.primary_3 && css && css`
		background-color: #289a7e;
	`}

	${props => props.text && css` background-color: transparent; `}

	${props => props.round_0 && css` border-radius: 0; `}
	${props => props.round_1 && css` border-radius: 3px; `}
	${props => props.round_3 && css` border-radius: 8px; `}
	${props => props.round_5 && css` border-radius: 16px;	`}

	${props => props.height_1 && css`
		height: 22px;
	`}
	${props => props.height_3 && css`
		height: 45px;
	`}
	${props => props.height_4 && css`
		height: 60px;
	`}
`

export const BtnCont = styled.Text`
	font-size: 14px;
	font-weight: 500;
	letter-spacing: -.05em;
	color: ${props => (props.primary_3 ? "#ffffff" : "#515151")};
`

// export const BtnCont = Btn.withComponent('Text')`
// 	font-size: 14px;
// 	font-weight: 500;
// 	letter-spacing: -.05em;
// 	color: ${props => (props.primary_3 ? "#ffffff" : "#515151")};
// `
