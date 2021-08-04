const {
    __
} = wp.i18n;

export const Content_Select_Files = (props) => {

    return (<form method="post" id="qube-tools-demo-import-form">

            <input id="qube_tools_import_demo" type="hidden" name="qube_tools_import_demo"
                   value="main"/>

            <div className="qube-tools-demo-import-form-types">


                <ul className="qube-tools-popup-text">
                    <li>
                        <label htmlFor="qube_tools_import_xml">
                            <input id="qube_tools_import_xml" type="checkbox"
                                   name="qube_tools_import_xml" checked="checked"/>
                            <strong>Import XML Data</strong>
                            (pages, posts, images, menus, etc...)
                        </label>
                    </li>

                    <li>
                        <label htmlFor="qube_tools_theme_settings">
                            <input id="qube_tools_theme_settings" type="checkbox"
                                   name="qube_tools_theme_settings" checked="checked"/>
                            <strong>Import Customizer Settings</strong>
                        </label>
                    </li>

                    <li>
                        <label htmlFor="qube_tools_import_widgets">
                            <input id="qube_tools_import_widgets" type="checkbox"
                                   name="qube_tools_import_widgets" checked="checked"/>
                            <strong>Import Widgets</strong>
                        </label>
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
