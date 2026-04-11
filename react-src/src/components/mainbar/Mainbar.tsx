import SortOption from "./SortOption.tsx";
import Timeline from "./Timeline.tsx";

function Mainbar() {
    return (
        <>
            <div className="w-2/3 h-full">
                <div className="flex w-full justify-around">
                    <Timeline />
                    <SortOption option="Weeks" />
                    <SortOption option="Months" />
                    <SortOption option="Years" />
                </div>
            </div>
        </>
    );
}

export default Mainbar;
