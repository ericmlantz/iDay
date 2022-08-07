import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import EstimateEditScreen from '../screens/EstimateEditScreen'
import EstimatesScreen from '../screens/EstimatesScreen'
import colors from '../config/colors'
import NewEstimateButton from './NewEstimateButton'
import AccountScreen from '../screens/AccountScreen'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: true }}>
    <Tab.Screen
      name="Estimates"
      component={EstimatesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="book" color={color} size={size} />
        )
      }}
    />
    <Tab.Screen
      name="EstimateEdit"
      component={EstimateEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewEstimateButton
            onPress={() => navigation.navigate('EstimateEdit')}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
        headerShown: true,
        headerTitle: 'New Estimate'
      })}
    />
    <Tab.Screen
      name="Accounts"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        )
      }}
    />
  </Tab.Navigator>
)
export default AppNavigator
