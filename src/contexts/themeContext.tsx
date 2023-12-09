import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  InitialState,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
  MD3Theme,
} from 'react-native-paper';
import {NavigationTheme} from 'react-native-paper/lib/typescript/types';

type ThemeMode = 'light' | 'dark';

interface IThemeContext {
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
  theme: MD3Theme;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [initialState, setInitialState] = useState<InitialState | undefined>();

  const theme = useMemo(
    () => (themeMode === 'light' ? MD3LightTheme : MD3DarkTheme),
    [themeMode],
  );

  const toggleThemeMode = useCallback(() => {
    setThemeMode(prevThemeMode =>
      prevThemeMode === 'light' ? 'dark' : 'light',
    );
    AsyncStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem('themeMode');
        const state = JSON.parse(savedStateString ?? 'light');

        setInitialState(state);
      } catch (error) {
        console.error(error);
      }
    };

    restoreState();
  }, []);

  const themeContextValue: IThemeContext = useMemo(
    () => ({
      themeMode,
      toggleThemeMode,
      theme,
    }),
    [themeMode, toggleThemeMode, theme],
  );

  const {LightTheme, DarkTheme} = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
      primary: 'red',
    },
  };

  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
      primary: 'red',
    },
  };

  const combinedTheme: NavigationTheme & MD3Theme =
    themeMode === 'light' ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <NavigationContainer
        theme={combinedTheme}
        initialState={initialState}
        onStateChange={toggleThemeMode}>
        {children}
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (Object.keys(themeContext).length === 0) {
    throw new Error('useThemeContext must be used within a ThemeContext');
  }

  return themeContext;
};

export default useThemeContext;
