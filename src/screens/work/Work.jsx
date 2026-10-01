import Repos from "../subscreens/repos/Repo";
import './Work.css'
import Layout from "../../components/layout/Layout";

export default function Home() {
    return (
        <>
        <Layout>
            <div className="home-div">
                <Repos />
            </div>
        </Layout> 
        </>
    )
}