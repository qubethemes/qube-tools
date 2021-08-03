const {
    __
} = wp.i18n;

export const Required_Plugin_Items = ({plugin, isFree}) => {

    return (<div
        className={'qube-tools-plugin qube-tools-clr qube-tools-plugin-' + plugin.slug}>
        <h2>{plugin.name}</h2>

        {isFree === true ?
            <button className="button install-now">Install Now
            </button>
            :
            <button className="button install-now">Get This Addon
            </button>
        }

    </div>)
}
