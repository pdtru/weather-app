import Footer from './Footer';
import MainContainer from './MainContainer';

class App {
  render = () => {
    document.body.innerHTML = '';
    document.body.append(new MainContainer().render(), new Footer().render());
  };
}

export default App;
