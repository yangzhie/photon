interface SidebarLibraryComponentTS {
    image: string;
    componentTitle: string;
}

function SidebarLibraryComponent({
    image,
    componentTitle,
}: SidebarLibraryComponentTS) {
    return (
        <>
            <div>
                <div className="flex gap-2 items-center">
                    <img src={image} alt="" />
                    <div>{componentTitle}</div>
                </div>
            </div>
        </>
    );
}

export default SidebarLibraryComponent;
