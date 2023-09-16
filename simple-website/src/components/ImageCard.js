function imageCard() {
    return (
        <div className="py-3 px-5">
            <div className="max-w-sm rounded-sm overflow-hidden shadow-lg">
                <img src="https://source.unsplash.com/random" alt="" className="w-full"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-vivid-violet-600 text-xl mb-2">Photo by Jane Doe</div>
                </div>
            </div>
        </div>
    );
}

export default imageCard;