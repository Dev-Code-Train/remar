import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Meet } from './pages/Meet';
import { Products } from './pages/Products';
import { Localitation } from './pages/Localitation';
import { WhatsAppWidget } from './components/WhatsAppWidget';

function App() {
  return (
    <>
      <Header/>
      <section id="Home"> <Home/> </section>
      <section id="Meet"> <Meet/> </section>
      <section id="Products"> <Products/> </section>
      <section id="Localitation"> <Localitation/> </section>
      <WhatsAppWidget/>
    </>
  );
}

export default App;