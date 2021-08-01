<?php

namespace Qube_Tools\Includes;

use Qube_Tools\Includes\Modules\Demo\Importer;
use Qube_Tools\Includes\Admin\Init;

final class Main
{

    private static $_instance = null;

    public $theme_config = array();

    private $install = null;

    public static function instance()
    {
        if (is_null(self::$_instance))
            self::$_instance = new self();
        return self::$_instance;
    }


    public function __construct()
    {
        $this->install = new Install();
        $this->define_constants();
        $this->init();
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

        $this->define('QUBE_TOOLS_ABSPATH', QUBE_TOOLS_FILE . '/');
        $this->define('QUBE_TOOLS_BASENAME', plugin_basename(QUBE_TOOLS_FILE));
        $this->define('QUBE_TOOLS_UPLOAD_DIR', $upload_dir['basedir'] . '/qube-tools-upload/');
        $this->define('QUBE_TOOLS_DYNAMIC_CSS_PATH', QUBE_TOOLS_UPLOAD_DIR . 'qube-tools-dynamic.css');
        $this->define('QUBE_TOOLS_DYNAMIC_CSS_URI', set_url_scheme($upload_dir['baseurl']) . '/qube-tools-upload/qube-tools-dynamic.css');


    }


    public function init()
    {

        $theme = wp_get_theme();

        if (strtolower($theme->get('Author')) == 'qubethemes') {

            include_once QUBE_TOOLS_ABSPATH . 'includes/functions/functions.php';
            include_once QUBE_TOOLS_ABSPATH . 'includes/functions/importer.php';
            include_once QUBE_TOOLS_ABSPATH . 'includes/functions/demo-data.php';

            new Ajax();
            new Importer();
        }


        if (is_admin()) {
            new Init();
        }

    }


    public function init_hooks()
    {
        register_activation_hook(QUBE_TOOLS_FILE, array($this->install, 'install'));

        add_action('init', array($this, 'load_plugin_textdomain'));
        add_action('init', array($this, 'register_configs'));

        add_filter('everest_forms_enable_setup_wizard', array($this, 'everest_form_redirect'));

    }

    public function register_configs()
    {
        $this->theme_config = apply_filters('qube_tools_admin_menu_filter', array(
            array(
                'subpage' => false,
                'slug' => '',
                'title' => '',
                'callback' => ''

            )
        ));
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