import React from 'react';
import {Card, Icon, Image} from "semantic-ui-react";

const CharacterCard = (props) => {

    const characterImagesObj = {
        "Luke Skywalker" : "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
        "C-3PO": "https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png"
    }
        
    const {name, hairColor, eyeColor, skinColor, gender, homeworld, species} = props;

    return (
        <Card>
            <Image src={characterImagesObj[name]}/>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
            </Card.Content>
        </Card>
    )
}

export default CharacterCard;