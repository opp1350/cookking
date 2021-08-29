import styled, { css } from 'styled-components/native';
<<<<<<< HEAD
import { COLORS, FONTSIZES, FONTS } from '../constants'

interface StyledBtnProps {
	// color
	primary_500?: boolean;
	primary_600?: boolean;
	primary_700?: boolean;

	// type
	text?: boolean;
	bottomFixed?: boolean;

	// round : 기본 solid
	round?: boolean;

	// height
	large?: boolean;
	// medium? : boolean;
	small?: boolean;

}

interface StyledBtnContProps {
	white?: boolean;
	disabled?: boolean;
}

export const ButtonText = styled.Text<StyledBtnContProps>`
	${FONTS.fontMedium};
	font-size: ${FONTSIZES.body3}px;
	color: ${props => (props.white ? `${COLORS.white}` : `${COLORS.gray_700}`)};
`

const Button = styled.TouchableOpacity<StyledBtnProps>`
	flex: 1;
	width: auto;
	margin: 0 4px;
	padding: 0 8px;
	align-items: center;
	justify-content: center;
	height: 32px;
	border-radius: 4px;
	background-color: ${COLORS.gray_200};

	${props => props.primary_700 && css` background-color: ${COLORS.primary_700};`}
	${props => props.primary_600 && css` background-color: ${COLORS.primary_600};`}
	${props => props.primary_500 && css && css
		` background-color: ${COLORS.primary_500};`}

	${props => props.text && css` ${COLORS.transparent}`}
	${props => props.bottomFixed && css`
		margin: 0 -16px;
		height: 60px;
		border-radius: 0;
	`}

	${props => props.round && css` border-radius: 50px;`}

	${props => props.large && css` height: 45px; `}
	${props => props.small && css`height: 22px; `}
`

export default Button
=======

// injectGlobal`
// 	body {
// 		padding: 30px;
// 	}
// `
interface StyledBtnProps {
	// color
	primary_1? : boolean;
	primary_2? : boolean;
	primary_3? : boolean;

	// type
	text? : boolean;

	// round
	round_0? : boolean;
	round_1? : boolean;
	round_2? : boolean;
	round_3? : boolean;
	round_4? : boolean;
	round_5? : boolean;

	// height
	height_1? : boolean;
	height_3? : boolean;
	height_4? : boolean;

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
>>>>>>> 1c12a9884405243c67466a7b59c05cbfa1ce53f3
