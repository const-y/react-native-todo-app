import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import TodoState from './src/context/todo/TodoState';
import ScreenState from './src/context/screen/ScreenState';
import MainLayout from './src/MainLayout';

async function loadFonts() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

const App = () => {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onError={e => console.error(e)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  );
};

export default App;
