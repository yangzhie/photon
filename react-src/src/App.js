import Sidebar from "./components/sidebar/Sidebar.tsx";
import Mainbar from "./components/mainbar/Mainbar.tsx";

function App() {
    return (
        <>
            <div className="w-screen h-screen flex">
                <Sidebar />
                <Mainbar />
            </div>
        </>
    );
}

export default App;
