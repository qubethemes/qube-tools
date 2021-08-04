const {
    __
} = wp.i18n;

export const Required_Plugin_Items = ({plugin, isFree}) => {

    let button_label = 'Install Now';
    let disabled = false;
    let tick_icon = '';

    if (plugin.status === 'INSTALLED') {
        button_label = 'Activate Now';

    } else if (plugin.status === 'ACTIVATED') {

        button_label = 'Activated';
        disabled = "disabled";
        tick_icon = <span className="plugin-activated-icon dashicons dashicons-yes-alt"></span>;
    }
    if (!isFree && plugin.status === 'NONE') {
        button_label = 'Get This Addon';
    }

    return (<div
        className={'qube-tools-plugin qube-tools-clr qube-tools-plugin-' + plugin.slug}>
        <h2>
            {tick_icon}

            {plugin.name}</h2>
        <button className="button install-now" disabled={disabled}>{button_label}</button>
    </div>)
}
