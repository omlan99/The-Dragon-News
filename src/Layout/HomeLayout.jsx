import Header from "../Component/Header";
import LatestNews from "../Component/LatestNews";
import Navbar from "../Component/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-popins">
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                This is a main section
            </main>
        </div>
    );
};

export default HomeLayout;