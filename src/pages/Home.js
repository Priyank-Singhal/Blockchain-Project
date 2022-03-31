import React from 'react';
import Footer from '../components/Footer';
import Content1 from '../components/Content1';
import FAQs from '../components/FAQs';
import Cards from '../components/Cards'
import topics from '../components/data'
import Nav2 from '../components/Nav2'

function App() {
  return (
    <div className='App'>
      <Nav2 />
      <Content1 id="content1  " />
      <section className='menu section'>
        {topics.map((topic) => <Cards {...topic} />)}
      </section>
      <FAQs id="faq"/>
      <Footer className="footer"/>
    </div>
  )
}

export default App;

