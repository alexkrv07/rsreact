import Layout from 'components/Layout/Layout';
import PageAboutUs from 'pages/PageAboutUs/PageAboutUs';
import PageMain from 'pages/PageMain/PageMain';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageMain />} />
        <Route path="about" element={<PageAboutUs />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
