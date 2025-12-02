import { Routes, Route, Navigate } from 'react-router-dom';
import './i18n';
import LanguageRouter from './components/LanguageRouter';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Redirect root to default language */}
        <Route path="/" element={<Navigate to="/ka" replace />} />
        
        {/* Language routes */}
        <Route path="/:lang" element={
          <LanguageRouter>
            <Layout />
          </LanguageRouter>
        } />
      </Routes>
    </div>
  );
}

export default App
