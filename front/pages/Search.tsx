import React from 'react'
import Container from '../components/Container'
import Button, { ButtonText } from '../components/Button'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Search() {
	const navigation = useNavigation()
	return (
		<Container>
			<Text>Search</Text>
			<Button onPress={() => navigation.navigate('Count', { title: '서치에서 눌렀다 임마!' })}>
				<ButtonText>카운터로</ButtonText>
			</Button>
		</Container>
	)
}

export default Search
