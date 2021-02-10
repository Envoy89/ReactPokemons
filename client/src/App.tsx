import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFoundPage from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
      <Footer />
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
