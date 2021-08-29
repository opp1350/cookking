import React from 'react'
import Container from '../components/Container'
import { Text, TouchableOpacity } from 'react-native'
import Button, { ButtonText } from '../components/Button'
import ButtonWrap from '../components/ButtonWrap'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { HomeNavigatorParams } from '../navigator/HomeNavigator'
import useCount from '../hooks/useCount'
import styled from 'styled-components/native'

type HomeRouteProps = RouteProp<HomeNavigatorParams, 'Count'>

const ActionButton = styled.TouchableOpacity`
	background: black;
	padding: 8px;
	align-items: center;
	width: 48%;
`
const Label = styled.Text`
	color: white;
	font-size: 24px;
`
const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 8px;
`

function Count() {
	const navigation = useNavigation()
	const { params } = useRoute<HomeRouteProps>()
	const { count, add, sub } = useCount()

	return (
		<Container>
			<Text>{params.title}</Text>
			<Container>
				<Text>{count}</Text>
				<Row>
					<ActionButton onPress={() => add(1)}>
						<Label>+</Label>
					</ActionButton>

					<ActionButton onPress={() => sub(1)}>
						<Label>-</Label>
					</ActionButton>
				</Row>
			</Container>
			<ButtonWrap>
				<Button bottomFixed primary_700 onPress={() => navigation.goBack()}>
					<ButtonText white>뒤로가기</ButtonText>
				</Button>
			</ButtonWrap>
		</Container>
	)
}

export default Count
