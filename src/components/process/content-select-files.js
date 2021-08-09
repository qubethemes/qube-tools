const {
    __
} = wp.i18n;
const {

    CheckboxControl

} = wp.components;
const {
    useState,
} = wp.element;

export const Content_Select_Files = (props) => {
    const [isXMLDataChecked, setXMLDataChecked] = useState(true);
    const [isCustomizerDataChecked, setCustomizerDataChecked] = useState(true);
    const [isWidgetDataChecked, setWidgetDataChecked] = useState(true);

    return (<form method="post" id="qube-tools-demo-import-form">

            <input id="qube_tools_import_demo" type="hidden" name="qube_tools_import_demo"
                   value="main"/>

            <div className="qube-tools-demo-import-form-types">


                <ul className="qube-tools-popup-text qube-tools-import-file-list">
                    <li>
                        <CheckboxControl
                            label="Import XML Data(pages, posts, images, menus, etc...)"
                            checked={isXMLDataChecked}
                            onChange={setXMLDataChecked}
                        />
                    </li>
                    <li>
                        <CheckboxControl
                            label="Import Customizer Settings"
                            checked={isCustomizerDataChecked}
                            onChange={setCustomizerDataChecked}
                        />
                    </li>
                    <li>
                        <CheckboxControl
                            label="Import Widgets"
                            checked={isWidgetDataChecked}
                            onChange={setWidgetDataChecked}
                        />
                    </li>


                </ul>

            </div>

            <input type="hidden" id="qube_tools_import_demo_data_nonce"
                   name="qube_tools_import_demo_data_nonce" value="ab01363357"/>
            <input
                type="hidden" name="_wp_http_referer"
                value=" "/>

        </form>
    )
}
