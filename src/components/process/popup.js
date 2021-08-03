const {
    useState,
} = wp.element;

import {Overlay} from "./overlay";
import {Header} from "./header";
import {Content} from "./content";
import {Footer} from "./footer";

const {
    __
} = wp.i18n;

export const Popup = ({selectedDemo, setSelectedDemo, selectedDemoConfig}) => {

    const [contentStep, setContentStep] = useState(1);


    let wrap_style = {};
    if (selectedDemo && selectedDemo !== '') {
        wrap_style = {
            display: 'block'
        }
    } else {
        wrap_style = {
            display: 'none'
        };
    }
    return (

        <div id="qube-tools-demo-popup-wrap" style={wrap_style}>
            <div className="qube-tools-demo-popup-container">
                <div className="qube-tools-demo-popup-content-wrap">
                    <div className="qube-tools-demo-popup-content-inner">
                        <a className="qube-tools-demo-popup-close" onClick={() => {
                            setSelectedDemo('')
                        }}>×</a>
                        <div id="qube-tools-demo-popup-content">
                            <Header selectedDemo={selectedDemo}/>
                            {(() => {
                                switch (contentStep) {
                                    case 1:
                                        return (<Content selectedDemoConfig={selectedDemoConfig}/>)
                                    case 2:
                                        return (<Content selectedDemoConfig={selectedDemoConfig}/>)
                                    case 3:
                                        return (<Content selectedDemoConfig={selectedDemoConfig}/>)
                                    default:
                                        return (<Content selectedDemoConfig={selectedDemoConfig}/>)
                                }
                            })()}
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
            <Overlay/>
        </div>

    )
}
