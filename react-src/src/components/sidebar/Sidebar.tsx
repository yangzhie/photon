import SidebarHeader from "./SidebarHeader.tsx";
import SidebarLibrary from "./SidebarLibrary.tsx";
import SidebarFolderSelect from "./SidebarFolderSelect.tsx";

function Sidebar() {
    return (
        <>
            <div className="w-1/3 h-full">
                <SidebarHeader />
                <SidebarLibrary componentTitle="Library" />
                <SidebarLibrary componentTitle="Tools" />
                <SidebarFolderSelect />
            </div>
        </>
    );
}

export default Sidebar;
