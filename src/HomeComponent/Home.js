import HomeItem from "./HomeItem";
import './home.css';

function Home() {
    return (
        <div className="home-cont">
            <h1 className="main-header">COFFEE WITH YOUR STORY</h1>
            <h2 className="home-header">visit us with your friends</h2>
        <HomeItem />     
        </div>
    )
}

export default Home;