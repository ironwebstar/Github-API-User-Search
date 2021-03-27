import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoadingIndicator from './components/LoadingIndicator';

const Search = lazy(() => import('./pages/Search/index'));

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Suspense fallback={<LoadingIndicator fullScreen />}>
        <Router>
          <Switch>
            <Route exact path="/" component={Search} />
          </Switch>
        </Router>
      </Suspense>
    </QueryClientProvider>
  </ChakraProvider>
);
