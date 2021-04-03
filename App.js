import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import { ProfessionScreen } from './src/screens'

const App = () => {
  return (
    <PaperProvider>
      <ProfessionScreen />
    </PaperProvider>
  );
};

export default App
