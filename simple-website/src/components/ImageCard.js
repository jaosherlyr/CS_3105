function ImageCard({ key, src, alt, text }) {
    return (
        <div className="max-w-sm rounded-sm overflow-hidden shadow-lg">
            <img key={key} src={ src } alt={ alt } className="w-auto"/>
            <div className="px-6 py-4">
                <div className="font-bold text-vivid-violet-600 text-xl mb-2">{ text }</div>
            </div>
        </div>
    );
}

export default ImageCard;