import Nav from './Nav'
import Footer from './Footer'
import './Layout.css'

const Layout = (props) => (
    <div className='flex-col'>
        <Nav />
        <main className="layout-children">
            {props.children}
        </main>
        <Footer />
    </div>
)

export default Layout
