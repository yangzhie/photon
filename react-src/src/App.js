import Sidebar from "./components/sidebar/Sidebar.tsx";
import Mainbar from "./components/mainbar/Mainbar.tsx";
import Infobar from "./components/infobar/Infobar.tsx";

function App() {
    return (
        <>
            <div className="w-screen h-screen flex">
                <Sidebar />
                <Mainbar />
                <Infobar />
            </div>
        </>
    );
}

export default App;
