import './App.scss';
import Header from '../header/Header';
import Welcome from '../welcome/Welcome';
import Featured from '../featured/Featured';
import Popular from '../popular/Popular';
import Why from '../why/Why';
import Testimonials from '../testimonials/Testimonials';
import Help from '../help/Help';
import Started from '../started/Started';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="App clear">
        <header>
          <Header/>
        </header>
        <main>
          <Welcome/>
          <Featured/>
          <Popular/>
          <Why/>
          <Testimonials/>
          <Help/>
          <Started/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}

export default App;
