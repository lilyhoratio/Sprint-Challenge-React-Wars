import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Card, Icon, Image} from "semantic-ui-react";
import "./../index.scss";

const CharacterCard = (props) => {

    const {name, hairColor, eyeColor, skinColor, gender, homeworld, species} = props;

    const characterSpecies = species[0];
    console.log("SPECIES", characterSpecies)

    const characterImagesObj = {
        "Luke Skywalker" : "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
        "C-3PO": "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png",
        "R2-D2": "https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png",
        "Darth Vader": "https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg",
        "Leia Organa": "https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg",
        "Owen Lars": null,
        "Beru Whitesun lars": null,
        "R5-D4": null,
        "Biggs Darklighter": "https://upload.wikimedia.org/wikipedia/en/9/90/Biggsdarklighter.jpg",
        "Obi-Wan Kenobi": "https://upload.wikimedia.org/wikipedia/en/c/c5/Obiwan1.jpg"
    }

    const [speciesObj, setSpeciesObj] = useState({})

    // useEffect( () => {
    //     axios.get(`{characterSpecies}`)
    //     .then(res => {
    //         console.log(res)
    //         const data = res.data.results;
    //         setSpeciesObj(data);
    //     })
    //     .catch(error => console.log("API error:", error))
    //   },[])

    return (
        // <Card className="card-container" style = {{height: "300px", width: "250px"}}>
        <Card className="card-container">
            <Image style = {{maxWidth: "100%", maxHeight: "70%", width: "auto", height: "auto", objectFit: "contain"}} src={characterImagesObj[name] === null ? "https://affordableamericaninsurance.com/avanti-group/wp-content/uploads/sites/99/2015/07/no-image-300x300.png" : characterImagesObj[name]}  />
            <Card.Content>
                {/* <Card.Meta>{species}</Card.Meta> */}
                <Card.Header>{name}</Card.Header>
                <Card.Description>{name} is a {gender==="n/a" ? "gender nonconforming being" : gender} with {eyeColor} eyes, {skinColor} skin, and {hairColor==="n/a"||hairColor==="none" ? "no" : hairColor} hair.</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default CharacterCard;