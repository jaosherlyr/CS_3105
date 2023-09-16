import { Image, Shimmer } from 'react-shimmer';
function ImageCard({ src, text, medium, date }) {
    return (
        <div className="p-2 rounded-md shadow-lg scale-90 hover:scale-100 overflow-hidden flex flex-col justify-between
        bg-gradient-to-b from-royal-purple-400 to-royal-purple-100">
            <Image src={src} fallback={ <Shimmer width={365} height={400} duration={3000}/>}
                   NativeImgProps={{ style: {
                           maxHeight : '550px',
                           objectFit : 'cover',
                           objectPosition: 'top',
                           backgroundColor: "#f6f7f8"
                       }}}/>
            <div className="px-6 py-4 ">
                <div className="font-bold transition-all text-xl text-center mb-2 text-royal-purple-500">{ text }</div>

                <div className="grid grid-cols-2">
                    <span className="text-royal-purple-600 text-sm">Medium: </span>
                    <span className="text-royal-purple-800">{ medium }</span>
                </div>

                <div className="grid grid-cols-2">
                    <span className="text-royal-purple-600 text-sm">Date Created: </span>
                    <span className="text-royal-purple-800">{ date }</span>
                </div>
            </div>
        </div>
    );
}

export default ImageCard;