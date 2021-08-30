import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './navigator/AppNavigator'
import { RecoilRoot } from 'recoil'
// 나중에 전역으로 적용할 수 있는 방법을 찾은 뒤 위치를 이동시켜야함. 일단 테스트용으로 폰트를 App.tsx에 추가함.
import { useFonts } from 'expo-font';


export default function App() {
	let [fontsLoaded] = useFonts({
		'NotoSansKR-Bold': require('./assets/font/NotoSansKR-Bold.otf'),
		'NotoSansKR-Medium': require('./assets/font/NotoSansKR-Medium.otf'),
		'NotoSansKR-Regular': require('./assets/font/NotoSansKR-Regular.otf'),
		'NotoSansKR-Light': require('./assets/font/NotoSansKR-Light.otf')
	});

	if (!fontsLoaded) {
		return <>로딩중..</>
	} 
	return (
		<RecoilRoot>
			<NavigationContainer>
				<AppNavigator />
			</NavigationContainer>
		</RecoilRoot>
	)
}
