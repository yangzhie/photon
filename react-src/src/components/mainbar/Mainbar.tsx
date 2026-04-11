import Timeline from "./Timeline.tsx";
import MediaSection from "./MediaSection.tsx";

function Mainbar() {
    return (
        <>
            <div className="w-2/3 h-full">
                <Timeline />
                <MediaSection />
            </div>
        </>
    );
}

export default Mainbar;
