const {
    __
} = wp.i18n;

export const Footer = (props) => {

    let footer_text = 'Next';
    if (props.currentStep === 2) {
        footer_text = 'Import Selected Demos'
    } else if (props.currentStep === 4) {
        footer_text = 'Visit Your Site';
    }
    

    return (<a className="qube-tools-button qube-tools-plugins-next" onClick={() => {

        if (props.currentStep === 4) {
            window.open(qubeToolsImporterObj.site_url, '_blank');
            return false;
        }
        if (props.currentStep < 3) {
            props.nextStep(props.currentContentStep);
        }

        return false;

    }}>{footer_text}</a>)


}
