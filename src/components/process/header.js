const {
    __
} = wp.i18n;

export const Header = (props) => {
    const headingStyle = {
        color: '#4285f4',
        fontWeight: 'bold',
    };
    let header_text = <>Import the <strong
        style={headingStyle}> {props.selectedDemo} </strong> demo</>

    if (props.currentStep === 2) {
        header_text = 'Select what you want to import:';
    } else if (props.currentStep === 3) {
        header_text = "The import process could take some time, please be patient";
    } else if (props.currentStep === 4) {

        if (props.importStatus) {
            header_text = "Successfully Demo Imported!";
        } else {
            header_text = "Problem during demo import?";
        }
    }
    return (<h2 className="title">{header_text}</h2>)
}
