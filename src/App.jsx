import'./App.jsx'
import Header from './component/Header/Header.jsx';
import Navbar from './component/Navbar/Navbar.jsx';
import Content from './component/content/Content.jsx';
import About from './component/About/About.jsx';
import Contact from './component/contact/Contact.jsx';
import Footer from './component/Footer/Footer.jsx';

function App() {
  

  return (
    <>
      <Navbar />
      <Header />
      <Content />
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App ;
