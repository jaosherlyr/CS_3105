import { ImageImports } from "../components";
function Gallery() {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <ImageImports/>
            </div>
        </>
    );
}

export default Gallery;