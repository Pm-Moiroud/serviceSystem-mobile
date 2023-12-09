import React, {FC} from 'react';
import {View} from 'react-native';

import {useStyles} from '~utils/useStyles';

const LoginScreen: FC = () => {
  console.info('props');

  const s = useStyles(theme => ({
    container: {
      backgroundColor: theme.colors.primary,
    },
  }));
  return <View style={{flex: 1, ...s.container}} />;
};

export default LoginScreen;
