import About from "../about/About";
import Repos from "../repos/Repos";
import Skills from "../skills/Skills";
import './Home.css'
import Layout from "../../components/layout/Layout";

export default function Home() {
    return (
        <>
        <Layout>
            <div className="home-div">
                <About />
                <Repos />
            </div>
        </Layout> 
        </>
    )
}