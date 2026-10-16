import Repos from "../subscreens/repos/Repo";
import './Work.css'
import Layout from "../../components/layout/Layout";

export default function Home() {
    return (
        <>
        <Layout>
            <div id="work-div">
                <div className="work-div">
                    <h1 className="text-center"> Projects </h1>
                    <div>
                        <Repos />
                    </div>
                </div>
            </div>
        </Layout> 
        </>
    )
}