import React, { useState } from 'react'
import Card from "../components/Card.jsx";
import "../styles/MainProducts.css"

function MainProducts({products , cover}) {

    const [tab , setTab] = useState(null);
    
    return (
        <div className='category'> 

            <div className='category-links'>
                {
                    Object.keys(products).map((category) => (
                        <div className='link' onClick={() => {setTab(category)}}>
                            {category} 
                        </div>
                        ))
                }
            </div>

            <div>
                { tab &&

                    <div className='listing'> 

                        <div className='cover'>
                        <img src={cover[tab]} alt="" />
                        </div>        

                        <div className='cards'>
                            {
                                products[tab].map((item) => (
                                    <Card className='card'  item = {item} ></Card>
                                ))
                            }
                        </div>
                    </div>
                }
            </div>

        </div>
        
        
      )
}

export default MainProducts
