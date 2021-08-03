const {
    __
} = wp.i18n;

export const Header = (props) => {
    const headingStyle = {
        color: '#4285f4',
        fontWeight: 'bold',
    };
    return (<h2 className="title">Import the <strong
        style={headingStyle}> {props.selectedDemo} </strong> demo</h2>)
}
