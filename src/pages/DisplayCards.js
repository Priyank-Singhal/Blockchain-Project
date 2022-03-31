import React from 'react'
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';
import CardInfo from '../components/CardInfo';
import topics from '../components/data'
import { useParams } from 'react-router-dom';

const DisplayCards = () => {
    const params = useParams();
    const pageId = parseInt(params.id)
    let data = "";
    topics.map(topic => {
        if(JSON.stringify(topic.id) == pageId) {
            data = topic;
        }else {
        }
    })
    return (
        <div className='App'>
            <Nav2 />
            <CardInfo {...data} />
            <Footer />
        </div>
    )
}
export default DisplayCards