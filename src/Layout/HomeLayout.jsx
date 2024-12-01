import Header from "../Component/Header";
import LatestNews from "../Component/LatestNews";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
            </header>
            <nav>
                This is an nav bar
            </nav>
            <main>
                This is a main section
            </main>
        </div>
    );
};

export default HomeLayout;