const {
    __
} = wp.i18n;
export const Required_Plugin_Items = ({plugin, singlePluginInstallationDetails, installWordPressPlugin}) => {

    /*console.log('Plugin Console');
    console.log(plugin);
    console.log("end");*/
    let button_label = 'Install Now';

    let disabled = false;

    let tick_icon = '';

    let is_pro = (typeof plugin.is_pro !== 'undefined' && plugin.is_pro);


    if (plugin.status === 'INSTALLED') {

        button_label = 'Activate Now';

    } else if (plugin.status === 'ACTIVATED') {

        button_label = 'Activated';

        disabled = "disabled";

        tick_icon = <span className="plugin-activated-icon dashicons dashicons-yes-alt"></span>;
    }
    if (is_pro && plugin.status === 'NONE') {

        button_label = 'Get This Addon';
    }

    let single_plugin_installation_detail = singlePluginInstallationDetails();

    var ajax_status = typeof single_plugin_installation_detail.ajax_status !== 'undefined' ? single_plugin_installation_detail.ajax_status : '';


    let className = 'button ';

    if (ajax_status === 'INSTALLING') {

        className += 'installing';

        disabled = "disabled";

        button_label = 'Installing....';

    } else if (ajax_status === 'INSTALLED') {

        className += 'installed';

        disabled = "";

        button_label = 'Activate Now';

    } else if (ajax_status === 'ACTIVATING') {

        className += 'installing';

        disabled = "disabled";

        button_label = 'Activating....';


    } else if (ajax_status === 'ACTIVATED') {

        disabled = "disabled";

        className += 'install-now';

        button_label = 'Activated';

        tick_icon = <span className="plugin-activated-icon dashicons dashicons-yes-alt"></span>;

    } else {
        className += 'install-now';

        button_label = button_label;

    }


    return (<div
        className={'qube-tools-plugin qube-tools-clr qube-tools-plugin-' + plugin.slug}>
        <h2>
            {tick_icon}

            {plugin.name}</h2>
        <button className={className} disabled={disabled} onClick={() => {
            installWordPressPlugin(plugin)
        }}>{button_label}</button>
    </div>)
}
