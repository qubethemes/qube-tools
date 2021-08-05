import {Required_Plugin_Items} from "./required-plugin-items";

const {
    __
} = wp.i18n;

const {
    useState,
} = wp.element;
const {
    apiFetch
} = wp;
export const Content_Plugin_Install = (props) => {
    const selectedDemoConfig = typeof props.selectedDemoConfig !== "undefined" ? props.selectedDemoConfig : {};
    const requiredPlugins = typeof selectedDemoConfig.required_plugins !== "undefined" ? selectedDemoConfig.required_plugins : {};

    const [pluginInstallationDetails, setPluginInstallationDetails] = useState(requiredPlugins);

    const getPluginInstallationDetails = (plugin) => {

        var pluginDetails = {};

        pluginInstallationDetails.map((plugin_item) => {

            if (plugin.slug === plugin_item.slug) {

                pluginDetails = plugin_item;
            }
        });

        return pluginDetails;
    }

    const updateSinglePluginData = (plugin) => {


        var plugin_details = pluginInstallationDetails.map((plugin_item) => {

            if (plugin.slug === plugin_item.slug) {

                if (plugin.status === 'NONE') {

                    plugin_item.ajax_status = 'INSTALLING';

                } else if (plugin.status === 'INSTALLED') {

                    plugin_item.ajax_status = 'INSTALLED';

                } else {

                    plugin_item.ajax_status = 'ACTIVATED';

                }

            }

            return plugin_item;
        });

        setPluginInstallationDetails(plugin_details);

    }


    async function installWordPressPlugin(plugin) {


        updateSinglePluginData(plugin);

        let data = await apiFetch({
            path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/action_for_plugin',
            method: 'POST',
            data: {
                plugin: plugin
            }
        });
        if (data) {
            updateSinglePluginData(data);

        }

        //setAjaxLoading(false);

    }

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

                {pluginInstallationDetails.map((plugin) => {
                    return <Required_Plugin_Items
                        plugin={plugin}
                        singlePluginInstallationDetails={() => {
                            return getPluginInstallationDetails(plugin)
                        }}
                        installWordPressPlugin={(plugin) => {
                            installWordPressPlugin(plugin)
                        }}
                    />
                })};

            </div>
        </div>

    </div>)
}
