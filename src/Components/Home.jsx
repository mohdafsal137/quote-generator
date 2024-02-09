import React from 'react'
 import '../Components/Home.css'
import { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBSpinner } from 'mdb-react-ui-kit';



function Home() {

    const [quote, setQuote] = useState({ quote: 'The less of the World, the freer you live.', author: 'Vince Lombardi' })
    const [load, setload] = useState(false)
    const URL = 'https://dummyjson.com/quotes';

    const fetchData = async () => {
        let response = await fetch(URL);
        let data = await response.json();
        let randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)]
        setQuote(randomQuote)
        console.log(quote);
        setload(false)
    }

    const handlerquote = () => {
        setQuote({})
        setload(true)
        fetchData();
    }

    return (
       <div className='container box'>
           <h1 className='head'>Random Quotes Generator</h1>
            <div className=' mx-auto shadow outerContainer'>
           
            {!load ?
                <div className='quote'>

                    <h4><em>' {quote.quote} '</em></h4>
                    <em className='author'>-{quote.author}</em>

                </div> : <MDBSpinner className='loading' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            }
            <button onClick={handlerquote} className='mt-4 generatorBtn btn btn-primary'> Generate </button>
        </div>
       </div>

       
    )
}

export default Home