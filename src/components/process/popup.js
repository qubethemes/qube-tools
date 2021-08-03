import {Overlay} from "./overlay";
import {Footer} from "./footer";

const {
    __
} = wp.i18n;

export const Popup = (props) => {

    return (

        <div id="qube-tools-demo-popup-wrap">
            <div className="qube-tools-demo-popup-container">
                <div className="qube-tools-demo-popup-content-wrap">
                    <div className="qube-tools-demo-popup-content-inner">
                        <a href="#" className="qube-tools-demo-popup-close">×</a>
                        <div id="qube-tools-demo-popup-content">
                            <Header/>
                            <Content/>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
            <Overlay/>
        </div>

    )
}
