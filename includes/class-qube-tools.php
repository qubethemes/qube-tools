<?php

final class Qube_Tools
{

    private static $_instance = null;


    public static function instance()
    {
        if (is_null(self::$_instance))
            self::$_instance = new self();
        return self::$_instance;
    }


    public function __construct()
    {

        $this->define_constants();
        $this->includes();
        $this->init_hooks();

        do_action('qube_tools_loaded');


    }

    private function define($name, $value)
    {
        if (!defined($name)) {
            define($name, $value);
        }
    }

    private function define_constants()
    {
        $upload_dir = wp_upload_dir(null, false);

        $this->define('QUBE_TOOLS_ABSPATH', dirname(QUBE_TOOLS_FILE) . '/');
        $this->define('QUBE_TOOLS_BASENAME', plugin_basename(QUBE_TOOLS_FILE));
        $this->define('QUBE_TOOLS_UPLOAD_DIR', $upload_dir['basedir'] . '/qube-tools-upload/');
        $this->define('QUBE_TOOLS_DYNAMIC_CSS_PATH', QUBE_TOOLS_UPLOAD_DIR . 'qube-tools-dynamic.css');
        $this->define('QUBE_TOOLS_DYNAMIC_CSS_URI', set_url_scheme($upload_dir['baseurl']) . '/qube-tools-upload/qube-tools-dynamic.css');


    }


    public function includes()
    {
        include_once QUBE_TOOLS_ABSPATH . 'includes/class-qube-tools-install.php';

        $theme = wp_get_theme();

        if ('qube-tools' == strtolower($theme->template)) {

            include_once QUBE_TOOLS_ABSPATH . 'includes/qube-tools-functions.php';
            include_once QUBE_TOOLS_ABSPATH . 'includes/class-qube-tools-ajax.php';
            include_once QUBE_TOOLS_ABSPATH . 'includes/qube-tools-demo-data.php';
            include_once QUBE_TOOLS_ABSPATH . 'includes/hooks/class-qube-tools-template-hooks.php';
            include_once QUBE_TOOLS_ABSPATH . 'includes/panel/demos.php';
        }


        if (is_admin()) {
            require_once QUBE_TOOLS_ABSPATH . 'includes/admin/class-qube-tools-admin.php';
        }

    }


    public function init_hooks()
    {
        register_activation_hook(QUBE_TOOLS_FILE, array('Qube_Tools_Install', 'install'));

        add_action('init', array($this, 'load_plugin_textdomain'));

        add_filter('everest_forms_enable_setup_wizard', array($this, 'everest_form_redirect'));

    }

    public function everest_form_redirect($status)
    {

        delete_transient('_evf_activation_redirect');
        return false;
    }


    public function load_plugin_textdomain()
    {
        load_plugin_textdomain('qube-tools', false, dirname(plugin_basename(__FILE__)) . '/languages/');
    }

    /**
     * Cloning is forbidden.
     *
     * @since 1.0.0
     */
    public function __clone()
    {
        _doing_it_wrong(__FUNCTION__, __('Cheatin&#8217; huh?'), '1.0.0');
    }

    /**
     * Unserializing instances of this class is forbidden.
     *
     * @since 1.0.0
     */
    public function __wakeup()
    {
        _doing_it_wrong(__FUNCTION__, __('Cheatin&#8217; huh?'), '1.0.0');
    }

}