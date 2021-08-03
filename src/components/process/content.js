const {
    __
} = wp.i18n;

export const Content = (props) => {

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

                <div
                    className="qube-tools-plugin qube-tools-clr qube-tools-plugin-elementor"
                    data-slug="elementor" data-init="elementor/elementor.php">
                    <h2>Elementor</h2>

                    <button className="button install-now"
                            data-init="elementor/elementor.php" data-slug="elementor"
                            data-name="Elementor">Install Now
                    </button>
                </div>


                <div
                    className="qube-tools-plugin qube-tools-clr qube-tools-plugin-everest-forms"
                    data-slug="everest-forms" data-init="everest-forms/everest-forms.php">
                    <h2>Everest Forms</h2>

                    <button className="button install-now"
                            data-init="everest-forms/everest-forms.php"
                            data-slug="everest-forms" data-name="Everest Forms">Install Now
                    </button>
                </div>

            </div>
        </div>

    </div>)
}
