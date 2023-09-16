import {Image, Shimmer} from 'react-shimmer';
function ImageCard({ id, src, text }) {
    return (
        <div className="max-w-sm rounded-sm overflow-hidden shadow-lg" key={id}>
            <Image src={src} style={{objectFit : 'cover'}} fallback={<Shimmer width={380} height={400} duration={1000}/>}/>
            <div className="px-6 py-4">
                <div className="font-bold text-vivid-violet-600 text-xl mb-2">{ text }</div>
            </div>
        </div>
    );
}

export default ImageCard;