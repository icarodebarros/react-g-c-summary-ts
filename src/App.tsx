import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <Layout>
      
      {/* New sintax since react-router-dom v6 */}
      <Routes>
        {/* No need for the 'exact' word anymore */}
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
      
    </Layout>
  );
}

export default App;
