import SidebarLibraryComponent from "./SidebarLibraryComponent.tsx";

function SidebarLibrary() {
    return (
        <>
            <div>
                <div>Library</div>
                <div className="flex flex-col">
                    <SidebarLibraryComponent
                        image="https://placehold.co/30"
                        componentTitle="Timeline"
                    />
                    <SidebarLibraryComponent
                        image="https://placehold.co/30"
                        componentTitle="Timeline"
                    />
                    <SidebarLibraryComponent
                        image="https://placehold.co/30"
                        componentTitle="Timeline"
                    />
                    <SidebarLibraryComponent
                        image="https://placehold.co/30"
                        componentTitle="Timeline"
                    />
                    <SidebarLibraryComponent
                        image="https://placehold.co/30"
                        componentTitle="Timeline"
                    />
                </div>
            </div>
        </>
    );
}

export default SidebarLibrary;
