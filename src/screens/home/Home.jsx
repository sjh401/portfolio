import About from "../about/About";
import Repos from "../repos/Repos";
import Resume from "../resume/Resume";
import './Home.css'
import Layout from "../../components/layout/Layout";

export default function Home() {
    return (
        <>
        <Layout>
            <div className="home-div">
                <About />
                <Repos />
                <Resume />
            </div>
        </Layout> 
        </>
    )
}