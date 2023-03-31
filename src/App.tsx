import Footer from "@features/common/Footer";
import Header from "@features/common/Header";
import Home from "@pages/Home";

export default function App() {
    return (
        <div className="font-body bg-primary-darkBlue-300 text-white min-h-screen overflow-hidden">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}
