import React from 'react';

import {ThemeContextProvider} from './src/contexts/themeContext';
import RootNavigation from './src/router/index';
const App = () => {
  console.info('props');
  return (
    <ThemeContextProvider>
      <RootNavigation />
    </ThemeContextProvider>
  );
};

export default App;
