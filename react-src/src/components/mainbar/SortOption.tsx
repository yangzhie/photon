interface SortOptionTS {
    option: string;
}

function SortOption({ option }: SortOptionTS) {
    return (
        <>
            <div>{option}</div>
        </>
    );
}

export default SortOption;
