import SortOption from "./SortOption.tsx";

function Timeline() {
    return (
        <>
            <div className="flex justify-evenly">
                <div>Timeline - 67 Photos</div>
                <SortOption option="Weeks" />
                <SortOption option="Months" />
                <SortOption option="Years" />
            </div>
        </>
    );
}

export default Timeline;
