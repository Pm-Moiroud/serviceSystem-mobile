import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {useCallback} from 'react';

import GlobalLayout from '~layouts/GlobalLayout';
import LoginScreen from '~screens/Login';
import RegisterScreen from '~screens/Register';

const UnauthTabNavigation = createBottomTabNavigator();

const UnauthOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const UnauthNavigation = () => {
  console.info('props');

  const renderEmptyTabBar = useCallback(() => null, []);

  const renderLoginWithLayout = useCallback(
    () => (
      <GlobalLayout>
        <LoginScreen />
      </GlobalLayout>
    ),
    [],
  );

  const renderRegisterWithLayout = useCallback(
    () => (
      <GlobalLayout>
        <RegisterScreen />
      </GlobalLayout>
    ),
    [],
  );

  return (
    <UnauthTabNavigation.Navigator
      screenOptions={UnauthOptions}
      tabBar={renderEmptyTabBar}>
      <UnauthTabNavigation.Screen
        name="Login"
        component={renderLoginWithLayout}
      />
      <UnauthTabNavigation.Screen
        name="Register"
        component={renderRegisterWithLayout}
      />
    </UnauthTabNavigation.Navigator>
  );
};

export default UnauthNavigation;
