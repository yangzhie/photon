import SidebarLibraryComponent from "./SidebarLibraryComponent.tsx";

interface SidebarLibraryTS {
    componentTitle: string;
}

function SidebarLibrary({ componentTitle }: SidebarLibraryTS) {
    return (
        <>
            <div>
                <div>{componentTitle}</div>
                <div className="flex flex-col">
                    <SidebarLibraryComponent
                        image="https://placehold.co/30"
                        componentTitle="one"
                    />
                    <SidebarLibraryComponent
                        image="https://placehold.co/30"
                        componentTitle="one"
                    />
                    <SidebarLibraryComponent
                        image="https://placehold.co/30"
                        componentTitle="one"
                    />
                    <SidebarLibraryComponent
                        image="https://placehold.co/30"
                        componentTitle="one"
                    />
                    <SidebarLibraryComponent
                        image="https://placehold.co/30"
                        componentTitle="one"
                    />
                </div>
            </div>
        </>
    );
}

export default SidebarLibrary;
