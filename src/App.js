import './App.css';
import { Route, Routes } from 'react-router-dom';
import ShareLayout from './components/ShareLayout';
import Tweets from './pages/Tweets';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ShareLayout />} >
          <Route exact index element={<Home />} />
          <Route exact path="/tweets" element={<Tweets />} />
          <Route exact path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
