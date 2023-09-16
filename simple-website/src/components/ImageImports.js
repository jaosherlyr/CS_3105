import { ImageCard } from "./index";

import ImageOne from "../media/Venti-tbhk.png";
import ImageTwo from "../media/Strawberry.png";
import ImageThree from "../media/draken.png";
import ImageFour from "../media/Fangs-OC.png";
import ImageFive from "../media/TurtlePainting.png";
import ImageSix from "../media/ErosAndPsyche.png";
import ImageSeven from "../media/TCF-whiteBorder.png";
import ImageEight from "../media/artNoveau.png"

function ImageImports() {
    const image = [{
        id: 1,
        src: ImageOne,
        text: 'Venti in TBHK style',
        medium: 'Digital Art',
        dateCreated: 'January 8, 2021'
    }, {
        id: 2,
        src: ImageTwo,
        text: 'Girl eating a strawberry',
        medium: 'Digital Art',
        dateCreated: 'March 1, 2022'
    }, {
        id: 3,
        src: ImageThree,
        text: 'Draken in my style',
        medium: 'Digital Art',
        dateCreated: 'November 23, 2021'
    }, {
        id: 4,
        src: ImageFour,
        text: 'Boy with Fangs [OC]',
        medium: 'Digital Art',
        dateCreated: 'March 10, 2021'
    }, {
        id: 5,
        src: ImageFive,
        text: 'Acrylic Painting of a Turtle',
        medium: 'Acrylic Painting',
        dateCreated: 'April 30, 2021'
    }, {
        id: 6,
        src: ImageSix,
        text: 'Eros and Psyche Illustration',
        medium: 'Digital Art',
        dateCreated: 'June 7, 2021'
    }, {
        id: 7,
        src: ImageSeven,
        text: "Trash of the count's Family Chibi",
        medium: 'Digital Art',
        dateCreated: 'February 4, 2021'
    }, {
        id: 8,
        src: ImageEight,
        text: "Art Nouveau study",
        medium: 'Digital Art',
        dateCreated: 'October 18, 2021'
    }]

    return (
        <>
            {image.map((image) => (
                <ImageCard id={image.id} src={image.src} text={image.text} medium={image.medium} date={image.dateCreated}/>
            ))}
        </>
    );
}

export default ImageImports;