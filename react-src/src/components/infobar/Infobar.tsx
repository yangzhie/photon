import Metadata from "./Metadata.tsx";
import Location from "./Location.tsx";
import PeopleDetection from "./PeopleDetection.tsx";
import LiveToGIF from "./LiveToGIF.tsx";

function Infobar() {
    return (
        <>
            <div className="w-1/3 h-full">
                <div>Media info</div>
                <div>Media type: photo/video</div>
                <Metadata />
                <Location />
                <PeopleDetection />
                <LiveToGIF />
            </div>
        </>
    );
}

export default Infobar;
