import { store } from './app/store'
import { Provider } from 'react-redux'
import './App.scss';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/home/Home';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <Provider store={store}>
        <div className="main">
          <Navbar />
          <Home />
          <Footer />
        </div>
    </Provider>
  );
}

export default App;
