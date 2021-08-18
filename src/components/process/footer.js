const {
    __
} = wp.i18n;

export const Footer = (props) => {

    let footer_text = 'Next';
    if (props.currentStep === 2) {
        footer_text = 'Import Selected Demos'
    }
    if (props.currentStep === 3) {
        // /  return (<></>);
    }

    return (<a className="qube-tools-button qube-tools-plugins-next" onClick={() => {
        props.nextStep(props.currentContentStep)
    }}>{footer_text}</a>)


}
