import SidebarHeader from "./SidebarHeader.tsx";
import SidebarLibrary from "./SidebarLibrary.tsx";

function Sidebar() {
    return (
        <>
            <div className="w-1/3 h-full">
                <SidebarHeader />
                <SidebarLibrary />
            </div>
        </>
    );
}

export default Sidebar;
