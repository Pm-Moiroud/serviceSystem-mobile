import React from 'react';

import {Text, View} from 'react-native';
type LandingPageProps = {};

const LandingPage = (props: LandingPageProps) => {
  console.log(props);
  return (
    <View>
      <Text>LandingPage</Text>
    </View>
  );
};

export default LandingPage;
