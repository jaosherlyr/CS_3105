import { ImageCard } from "./index";

import ImageOne from "../media/Venti-tbhk.png";
import ImageTwo from "../media/Tamayo.png";
import ImageThree from "../media/draken.png";
import ImageFour from "../media/Fangs-OC.png";
import ImageFive from "../media/TurtlePainting.png";
import ImageSix from "../media/TCF-whiteBorder.png";

function ImageImports() {
    const image = [{
        key: 1,
        src: ImageOne,
        alt: 'Venti in the styl from TBHK',
        text: 'Venti in TBHK style'
    }, {
        key: 2,
        src: ImageTwo,
        alt: 'Tamayo-sama',
        text: 'Tamayo-sama in my style'
    }, {
        key: 3,
        src: ImageThree,
        alt: 'Draken',
        text: 'Draken in my style'
    }, {
        key: 4,
        src: ImageFour,
        alt: 'Fangs OC',
        text: 'Boy with Fangs [OC]'
    }, {
        key: 5,
        src: ImageFive,
        alt: 'Turtle painting',
        text: 'Acrylic Painting of a Turtle'
    }, {
        key: 6,
        src: ImageSix,
        alt: 'TCF - Cale, Ron, On, and Hong',
        text: "Trash of the count's Family Chibi"
    }]

    return (
        <>
            {image.map((image) => (
                <ImageCard key={image.key} src={image.src} alt={image.alt} text={image.text}/>
            ))}
        </>
    );
}

export default ImageImports;