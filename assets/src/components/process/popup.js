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
    const [isXMLDataChecked, setXMLDataChecked] = useState(true);
    const [isCustomizerDataChecked, setCustomizerDataChecked] = useState(true);
    const [isWidgetDataChecked, setWidgetDataChecked] = useState(true);
    const [importStatus, setImportStatus] = useState(false);
    const nextStep = () => {

        let currentStep = currentContentStep;

        currentStep++;

        setCurrentContentStep(currentStep);


    }
    const updateImportCount = (updatedImportStatus) => {

        console.log(JSON.stringify(updatedImportStatus));

        var totalUpdatedImportedStatusLength = Object.keys(updatedImportStatus).length;

        var totalUpdateCount = 0;

        var totalProcessCount = 0;

        Object.keys(updatedImportStatus).map(function (key) {

            if (updatedImportStatus[key] !== '') {

                totalProcessCount++;

                if (updatedImportStatus[key] === 'IMPORTED') {

                    totalUpdateCount++;

                }

            }
        })


        if (totalProcessCount === totalUpdatedImportedStatusLength) {

            if (totalUpdatedImportedStatusLength === totalUpdateCount) {

                setImportStatus(true);

            } else {

                setImportStatus(false);

            }

            setTimeout(function () {

                nextStep();


            }, 3000);
        }
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
                                        return (<Content_Select_Files selectedDemoConfig={selectedDemoConfig}
                                                                      selectedDemo={selectedDemo}
                                                                      isXMLDataChecked={isXMLDataChecked}
                                                                      setXMLDataChecked={() => {
                                                                          setXMLDataChecked()
                                                                      }}
                                                                      isCustomizerDataChecked={isCustomizerDataChecked}
                                                                      setCustomizerDataChecked={() => {
                                                                          setCustomizerDataChecked()
                                                                      }}
                                                                      isWidgetDataChecked={isWidgetDataChecked}
                                                                      setWidgetDataChecked={() => {
                                                                          setWidgetDataChecked()
                                                                      }}
                                        />)
                                    case 3:
                                        return (<Content_Importing selectedDemoConfig={selectedDemoConfig}
                                                                   isXMLDataChecked={isXMLDataChecked}
                                                                   isCustomizerDataChecked={isCustomizerDataChecked}
                                                                   isWidgetDataChecked={isWidgetDataChecked}
                                                                   selectedDemo={selectedDemo}
                                                                   updateImportCount={(updatedImportStatus) => {
                                                                       updateImportCount(updatedImportStatus)
                                                                   }}

                                        />)
                                    case 4:
                                        if (importStatus) {
                                            return (<Content_Import_Success selectedDemoConfig={selectedDemoConfig}/>)
                                        }
                                        return (<Content_Import_Failed selectedDemoConfig={selectedDemoConfig}
                                                                       selectedDemo={selectedDemo}/>)
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
