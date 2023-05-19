import './App.css';
import { Route, Routes } from 'react-router-dom';
import ShareLayout from './components/ShareLayout';
import Tweets from './pages/Tweets';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShareLayout />} >
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
