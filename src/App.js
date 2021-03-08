import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import RecommendedVideo from './components/recommendedVideo/recommendedVideo';
import SearchPage from './components/searchPage/searchPage';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/search/:searchTerm'>
            <div className='app_page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path='/'>
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
