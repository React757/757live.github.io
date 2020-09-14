import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Countries.scss'

const Countries = (props) => {

    const countries = props.itemsAll.map((item, index) => (
        
        
        <Link to= {{ pathname: `/recipe/${item.answer}`,
                  state: {item: item.answer  } }} > </Link>

       
            <div className="countryCard" key={index}>
                <div className="countryCard__flag">
                    <img className= "countryCard__flagImg" src={item.image} alt={`${item.question} flag`} />
                </div>
                <div className="countryCard__description">
                    <h1 className="countryCard__primary">{item.question}</h1>
                    <ul className="countryCard__itemList">
                        <li className="countryCard__item"><span>Population: </span> population </li>
                       
                        
                    </ul>
                </div>

            </div>
        
    ))
    return (
        <>
            <div className='countries-container'>
                {countries}
            </div>
        </>
    );
}

export default Countries;
