import {Required_Plugin_Items} from "./required-plugin-items";

const {
    __
} = wp.i18n;

export const Content_Plugin_Install = (props) => {
    const selectedDemoConfig = typeof props.selectedDemoConfig !== "undefined" ? props.selectedDemoConfig : {};
    const requiredPlugins = typeof selectedDemoConfig.required_plugins !== "undefined" ? selectedDemoConfig.required_plugins : {};
    const freeRequiredPlugins = typeof requiredPlugins.free !== "undefined" ? requiredPlugins.free : [];
    const proRequiredPlugins = typeof requiredPlugins.pro !== "undefined" ? requiredPlugins.pro : [];

    return (<div className="qube-tools-popup-text">

        <p>Qube tools help you browse and import ready made websites with few clicks. We
            recommend you to upload sample data on a fresh WordPress install to prevent
            conflicts with your current content. You can use this plugin to reset your site
            if needed: <a
                href="https://staging.mantrabrain.com/wp-admin/plugin-install.php?s=Wordpress+Database+Reset&amp;tab=search"
                target="_blank">Wordpress Database Reset</a>.</p>

        <div className="qube-tools-required-plugins-wrap">
            <h3>Recommended Plugins</h3>
            <p>For your site to look exactly like this demo, the plugins below need to be
                activated.</p>
            <div className="qube-tools-required-plugins qube-tools-plugin-installer">

                {proRequiredPlugins.map((pro) => {
                    return <Required_Plugin_Items plugin={pro} isFree={false}/>
                })};

                {freeRequiredPlugins.map((free) => {
                    return <Required_Plugin_Items plugin={free} isFree={true}/>
                })};

            </div>
        </div>

    </div>)
}
