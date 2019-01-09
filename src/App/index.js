import React, { Component } from 'react';
import './App.css';
import styled, {css} from 'styled-components';
import AppLoyout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';
import Dashboard from '../Dashboard';
import Content from '../Shared/Content'

class App extends Component {
  render() {
    return (
      <AppLoyout>
        <AppProvider>
          <AppBar />
          <Content>
             <Settings/>
             <Dashboard />
          </Content>
        </AppProvider>
      </AppLoyout>
    );
  }
}

export default App;
