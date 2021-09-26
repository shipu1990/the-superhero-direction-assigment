import React from 'react';
import './Artist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare } from '@fortawesome/free-solid-svg-icons';


const Artist = (props) => {
    const {name, img, honorarium, position, sex} = props.artist;
    const plusIcon = <FontAwesomeIcon icon ={faPlusSquare} />
    return (
        <div className="artist-box">
            <img src={img} alt="Artist Image" />
            <h2 className="artist-name">Name: {name}</h2>
            <p className="artist-para">Position: {position}</p>
            <p className="artist-para">sex: {sex}</p>
            <p className="artist-para">Honorarium: {honorarium}</p>
            <button onClick={()=>props.handleArtist(props.artist)} className="artist-btn">{plusIcon} Add Artist In Your List</button>
        </div>
    );
};

export default Artist;