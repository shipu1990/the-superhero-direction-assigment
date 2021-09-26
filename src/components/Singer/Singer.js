import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import Cart from '../Cart/Cart';
import './Singer.css'

const Singer = () => {
    const [artists, setArtists] = useState ([]);
    const[carts, setCarts] = useState([]);
    console.log(carts);
    useEffect(()=>{
        fetch('./singers.JSON')
        .then(res=>res.json())
        .then(data=>setArtists(data))
    },[])

    const handleArtist = (artist) =>{
        const newCart = [...carts, artist];
        setCarts(newCart);
    }
    return (
        <div>
            {/* Singer Top Info  Section*/}
            <div className="singer-top">
                <h3 className="budget-title">Minimum Budget will be <span>200000</span> for your Concert</h3>
            </div>
            {/* All Artist info Section */}

            <div className="singer-container">
                <div className="artist-container">
                    {
                    artists.map(artist =><Artist
                        key={artist.id}
                        handleArtist={handleArtist} 
                        artist={artist}>
                    </Artist>)
                    }
                </div>

               {/* Concert Cart  */}
                <div className="cart-container">
                    <Cart carts={carts}></Cart>
                </div>
            </div>
        </div>
      
    );
};

export default Singer;