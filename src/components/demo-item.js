
const {
    __
} = wp.i18n;

export const Demo_Item = (props) => {

    return (
        <div className="theme-wrap">

            <div className="theme yatri-tools-open-popup" data-demo-id="main">

                <div className="theme-screenshot">
                    <img
                        src="https://raw.githubusercontent.com/mantrabrain/yatri-demo-data/master/main/screenshot.png"/>

                        <div className="select-theme">
                            <span>Select Demo</span>
                        </div>

                        <div className="demo-import-loader preview-all preview-all-main"></div>

                        <div className="demo-import-loader preview-icon preview-main">
                            <i className="custom-loader"></i></div>
                </div>

                <div className="theme-id-container">

                    <h2 className="theme-name" id="main">
                        <span>Main</span></h2>

                    <div className="theme-actions">
                        <a className="button button-primary" href="http://demo.wpyatri.com/main" target="_blank">Live
                            Preview</a>
                    </div>

                </div>

            </div>

        </div>
    )
}
