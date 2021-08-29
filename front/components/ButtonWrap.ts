import styled, { css } from 'styled-components/native';
import Button from './Button'


interface StyledBtnWrapProps {
	vertical?: boolean
}

// 버튼 wrapper
const ButtonWrap = styled.View<StyledBtnWrapProps>`
	flex: none;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	${props => props.vertical && css`
	flex-direction: column;
    `}
`;

export default ButtonWrap