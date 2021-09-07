import Nav from './Nav'
import Footer from './Footer'
import './Layout.css'

const Layout = (props) => (
    <>
        <Nav />
        <main className="layout-children">
            {props.children}
        </main>
        <Footer />
    </>
)

export default Layout
