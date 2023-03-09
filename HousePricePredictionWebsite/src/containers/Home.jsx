import Footer from "../conponents/footer/footer"
import Homedsc from "../conponents/homedsc/homedsc"
import Navbar from "../conponents/navbar/navbar"

import './home.css'

export default () => {
    return (
        <div id="Landing-page">
        
            <Navbar />
            <Homedsc />
            <Footer />
        </div>
    )
}