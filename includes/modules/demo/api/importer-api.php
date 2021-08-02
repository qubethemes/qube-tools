<?php

namespace Qube_Tools\Includes\Modules\Demo\API;

class Importer_API
{
    /**
     * The Rest route namespace.
     *
     * @since    1.0.0
     * @access   private
     * @var      string $namespace The Rest route namespace.
     */
    private $namespace = 'qube-tools-importer-api/';

    /**
     * The rest version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string $rest_version The rest version of this plugin..
     */
    private $rest_version = 'v1';

    public function __construct()
    {
        add_action('rest_api_init', array($this, 'api_init'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_resources'));

    }

    public function enqueue_resources()
    {


        $screen = get_current_screen();

        $admin_scripts_bases = array(qube_tools()->theme_config['slug'] . '-options_page_qube-tools-install-demos');

        if (!(isset($screen->base) && in_array($screen->base, $admin_scripts_bases))) {
            return;
        }
        $dependency = array('lodash', 'wp-api-fetch', 'wp-i18n', 'wp-components', 'wp-element');

        wp_enqueue_script('qube-tools-importer', QUBE_TOOLS_PLUGIN_URI . 'build/index.js', $dependency, QUBE_TOOLS_VERSION, true);

        wp_enqueue_style('qube-tools-importer', QUBE_TOOLS_PLUGIN_URI . 'build/style-index.css', array('wp-components'), QUBE_TOOLS_VERSION);

        $all_demos = qube_tools_get_demos_data();

        $localize = array(
            'version' => QUBE_TOOLS_VERSION,
            'root_id' => 'qube-tools-importer-page',
            'rest' => array(
                'namespace' => $this->namespace,
                'version' => $this->rest_version,
            ),
            'demo_categories' => qube_tools_get_demo_all_categories($all_demos),
            'all_demos' => $all_demos
        );

        wp_localize_script('qube-tools-importer', 'qubeToolsImporterObj', $localize);
    }

    /**
     * Register REST API route.
     *
     * @since    1.0.0
     */
    public function api_init()
    {
        $namespace = $this->namespace . $this->rest_version;

        register_rest_route(
            $namespace,
            '/set_settings',
            array(
                array(
                    'methods' => \WP_REST_Server::EDITABLE,
                    'callback' => array($this, 'set_settings'),
                    'permission_callback' => function () {
                        return current_user_can('manage_options');
                    },
                ),
            )
        );
        register_rest_route(
            $namespace,
            '/get_settings',
            array(
                array(
                    'methods' => \WP_REST_Server::READABLE,
                    'callback' => array($this, 'get_settings'),
                    'permission_callback' => function () {
                        return current_user_can('manage_options');
                    },
                ),
            )
        );
    }


    /**
     * Set Plugin Settings.
     *
     * @param \WP_REST_Request $request Full details about the request.
     *
     * @return array|\WP_REST_Response Plugin Settings.
     * @since 1.0.0
     *
     */
    public function set_settings(\WP_REST_Request $request)
    {
        $params = $request->get_params();

        return rest_ensure_response(array());

    }

    /**
     * Get settings
     *
     * @param \WP_REST_Request $request Full details about the request.
     *
     * @return array|\WP_REST_Response Plugin Settings.
     * @since 1.0.0
     *
     */
    public function get_settings(\WP_REST_Request $request)
    {
        $default_theme_options = array(
            'setting_1' => esc_html__('Default Setting 1', 'wp-react-plugin-boilerplate'),
            'setting_2' => esc_html__('Default Setting 2', 'wp-react-plugin-boilerplate'),
            'setting_3' => false,
            'setting_4' => true,
            'setting_5' => 'option-1',
        );
        return rest_ensure_response($default_theme_options);
    }


    /**
     * Get settings
     *
     * @param \WP_REST_Request $request Full details about the request.
     *
     * @return array|\WP_REST_Response Plugin Settings.
     * @since 1.0.0
     *
     */
    public function get_all_demo_categories(\WP_REST_Request $request)
    {
        $demos = qube_tools_get_demos_data();

        $categories = qube_tools_get_demo_all_categories($demos);

        return rest_ensure_response($categories);
    }

    /**
     * Get settings
     *
     * @param \WP_REST_Request $request Full details about the request.
     *
     * @return array|\WP_REST_Response Plugin Settings.
     * @since 1.0.0
     *
     */
    public function get_all_demos(\WP_REST_Request $request)
    {
        $demos = qube_tools_get_demos_data();

        return rest_ensure_response($demos);
    }
}
