import { ImageCard } from "./index";

import ImageOne from "../media/Venti-tbhk.png";
import ImageTwo from "../media/Tamayo.png";
import ImageThree from "../media/draken.png";
import ImageFour from "../media/Fangs-OC.png";
import ImageFive from "../media/TurtlePainting.png";
import ImageSix from "../media/TCF-whiteBorder.png";
import {Shimmer} from "react-shimmer";

function ImageImports() {
    const image = [{
        id: 1,
        src: ImageOne,
        text: 'Venti in TBHK style'
    }, {
        id: 2,
        src: ImageTwo,
        text: 'Tamayo-sama in my style'
    }, {
        id: 3,
        src: ImageThree,
        text: 'Draken in my style'
    }, {
        id: 4,
        src: ImageFour,
        text: 'Boy with Fangs [OC]'
    }, {
        id: 5,
        src: ImageFive,
        text: 'Acrylic Painting of a Turtle'
    }, {
        id: 6,
        src: ImageSix,
        text: "Trash of the count's Family Chibi"
    }]

    return (
        <>
            {image.map((image) => (
                <ImageCard id={image.id} src={image.src} text={image.text}/>
            ))}
        </>
    );
}

export default ImageImports;