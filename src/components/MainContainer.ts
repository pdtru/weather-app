import Header from './Header';
import Content from './Content';

class MainContainer {
  header = new Header();
  content = new Content();

  render = () => {
    const container = document.createElement('div');
    container.className = 'main-container';

    container.append(this.header.render(), this.content.render());

    return container;
  };
}

export default MainContainer;
