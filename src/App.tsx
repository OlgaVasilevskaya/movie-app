import React from 'react';

import AppRoutes from './routes';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <AppRoutes />
  </ErrorBoundary>
);

export default App;
