import {Overlay} from "./overlay";
import {Header} from "./header";

import {Footer} from "./footer";
import {Content_Plugin_Install} from "./content-plugin-install";
import {Content_Select_Files} from "./content-select-files";
import {Content_Importing} from "./content-importing";
import {Content_Import_Success} from "./content-import-success";
import {Content_Import_Failed} from "./content-import-failed";

const {
    useState,
} = wp.element;

const {
    __
} = wp.i18n;

export const Popup = ({selectedDemo, closePopup, selectedDemoConfig}) => {

    const [currentContentStep, setCurrentContentStep] = useState(1);
    const [importStatus, setImportStatus] = useState(false);
    const nextStep = () => {
        let currentStep = currentContentStep;
        currentStep++;

        setCurrentContentStep(currentStep);

    }
    let wrap_style = {};
    if (selectedDemo && selectedDemo !== '' && typeof selectedDemoConfig === "object") {
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
                            closePopup()
                        }}>×</a>
                        <div id="qube-tools-demo-popup-content">
                            <Header selectedDemo={selectedDemo} currentStep={currentContentStep}
                                    importStatus={importStatus}/>
                            {(() => {
                                switch (currentContentStep) {
                                    case 1:
                                        return (<Content_Plugin_Install selectedDemoConfig={selectedDemoConfig}/>)
                                    case 2:
                                        return (<Content_Select_Files selectedDemoConfig={selectedDemoConfig}/>)
                                    case 3:
                                        return (<Content_Importing selectedDemoConfig={selectedDemoConfig}/>)
                                    case 4:
                                        if (importStatus) {
                                            return (<Content_Import_Success selectedDemoConfig={selectedDemoConfig}/>)
                                        }
                                        return (<Content_Import_Failed selectedDemoConfig={selectedDemoConfig}/>)
                                    default:
                                        return (<Content_Plugin_Install selectedDemoConfig={selectedDemoConfig}/>)
                                }
                            })()}
                            <Footer nextStep={nextStep} currentStep={currentContentStep}/>
                        </div>
                    </div>
                </div>
            </div>
            <Overlay/>
        </div>

    )
}
