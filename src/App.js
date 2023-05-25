
import { Container } from 'react-bootstrap';
import Header from './commponets/header/Header';
import Work_experience from './commponets/work _experience/work _experience';
import Footer from './commponets/footer/footer';

function App() {
  return (
    <Container className='fondo2'>
      <Header/>
      <Work_experience/>
      <Footer></Footer>
    </Container>
  );
}

export default App;
