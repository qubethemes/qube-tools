const {
    __
} = wp.i18n;
const {
    useState,
} = wp.element;

export const Demo_Item = (props) => {

    const [importerLoader, setImporterLoader] = useState(1);

    const getSelectedDemoPluginDetails = (demo) => {

        console.log(demo);
    }
    let loaderCss = {};

    if (props.selectedDemo !== '' && props.slug === props.selectedDemo && props.isAjaxLoading) {
        loaderCss = {
            display: 'block'
        }
    }

    return (

        <div className="theme-wrap">

            <div className="theme qube-tools-open-popup" data-demo-id="main">

                <div className="theme-screenshot">
                    <img
                        src={props.args.screenshot}/>

                    <div className="select-theme" onClick={() => {
                        props.setSelectedDemo(props.slug)
                    }}>
                        <span>Select {props.args.title} demo</span>
                    </div>


                    <div className="demo-import-loader preview-all preview-all-main" style={loaderCss}></div>

                    <div className="demo-import-loader preview-icon preview-main" style={loaderCss}>
                        <i className="custom-loader"></i></div>
                </div>

                <div className="theme-id-container">

                    <h2 className="theme-name" id="main">
                        <span>{props.args.title}</span>
                    </h2>

                    <div className="theme-actions">
                        <a className="button button-primary" href={props.args.preview_url} target="_blank">Live
                            Preview</a>
                    </div>

                </div>

            </div>

        </div>

    )
}
