import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const GlobalLayout: FC<PropsWithChildren> = ({children}) => {
  const insets = useSafeAreaInsets();
  console.info('insets', insets);
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}>
      {children}
    </View>
  );
};

export default GlobalLayout;
