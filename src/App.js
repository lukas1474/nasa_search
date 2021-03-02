import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import MainView from './components/views//MainView/MainView';
import './styles/bootstrap.scss';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <MainView/>
      </MainLayout>
    </div>
  );
}

export default App;
