import { StatusBar } from 'expo-status-bar'
import { Button, View, StyleSheet, Text, ViewStyle } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import 'react-native-gesture-handler'

interface HomeScreenProps {
	children: React.ReactNode
	style?: ViewStyle
}

function HomeScreen({ children, style }: HomeScreenProps) {
	const insets = useSafeAreaInsets()
	return <View style={{ paddingTop: insets.top, ...style }}>{children}</View>
}

function MainPage() {
	return (
		<SafeAreaProvider>
			<HomeScreen style={styles.container}>
				<Text>app</Text>
				<Button title='пушка' />
			</HomeScreen>
		</SafeAreaProvider>
	)
}
function Gg1() {
	return (
		<View>
			<Text>Пока</Text>
		</View>
	)
}
const Drawer = createDrawerNavigator()

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Drawer.Navigator
					screenOptions={{
						// headerLeft: () => null,
						// header: () => null,
						headerTitleStyle: {
							color: 'transparent',
						},
						headerTintColor: 'white',
						headerStyle: {
							backgroundColor: '#141416',
						},
						drawerStyle: {
							backgroundColor: '#141416',
							width: 240,
						},
						drawerContentContainerStyle: { backgroundColor: '#141416' },
						drawerLabelStyle: {
							color: '#b1b5c3',
							fontWeight: 'bold',
						},
					}}>
					<Drawer.Screen
						name='Главная'
						component={MainPage}
					/>
					<Drawer.Screen
						name='Poka'
						component={Gg1}
					/>
				</Drawer.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})

