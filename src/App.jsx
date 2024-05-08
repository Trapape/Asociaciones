import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layouts/LayoutComponent.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import AboutScreen from './screens/AboutScreen.jsx';
import ServiceScreen from './screens/ServiceScreen.jsx';
import ForumScreen from './screens/ForumScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/About" element={<AboutScreen />} />
          <Route path="/Service" element={<ServiceScreen />} />
          <Route path="/Forum" element={<ForumScreen />} />
          <Route path="/Contact" element={<ContactScreen />} />
        </Routes>
        </Layout>
    </Router>
  );
}

export default App;
