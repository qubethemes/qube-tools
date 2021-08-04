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
            '/get_demos',
            array(
                array(
                    'methods' => \WP_REST_Server::EDITABLE,
                    'callback' => array($this, 'get_demos'),
                    'permission_callback' => function () {
                        return current_user_can('manage_options');
                    },
                ),
            )
        );

        register_rest_route(
            $namespace,
            '/get_selected_demo_plugin_config',
            array(
                array(
                    'methods' => \WP_REST_Server::EDITABLE,
                    'callback' => array($this, 'get_selected_demo_plugin_config'),
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
    public function get_demos(\WP_REST_Request $request)
    {
        $default_theme_options = qube_tools_get_demos_data();

        return rest_ensure_response($default_theme_options);
    }


    public function get_selected_demo_plugin_config(\WP_REST_Request $request)
    {
 
        $selected_demo = sanitize_text_field($request->get_param('selected_demo'));

        $all_demo_datas = qube_tools_get_demos_data();

        $response = false;

        if ($all_demo_datas[$selected_demo]) {

            include_once(ABSPATH . 'wp-admin/includes/plugin.php');

            $response = $all_demo_datas[$selected_demo];

            $required_plugins = isset($response['required_plugins']) ? $response['required_plugins'] : array();

            $free_plugins = isset($required_plugins['free']) ? $required_plugins['free'] : array();

            $pro_plugins = isset($required_pluginsp['pro']) ? $required_pluginsp['pro'] : array();

            $filtered_pro_plugins = $this->filtered_plugins($pro_plugins);

            $filtered_free_plugins = $this->filtered_plugins($free_plugins);

            $response['required_plugins']['free'] = $filtered_free_plugins;

            $response['required_plugins']['pro'] = $filtered_pro_plugins;
        }


        return rest_ensure_response($response);
    }


    private function filtered_plugins($plugins)
    {
        // Plugin Status: 0 - Not Installed , 1 Installed Only 2: Installed & Activated
        foreach ($plugins as $plugin_index => $plugin_item) {

            $plugin_path_url = WP_PLUGIN_DIR . '/' . $plugin_item['init'];

            $installed = file_exists($plugin_path_url);

            if (is_plugin_active($plugin_item['init'])) {

                $plugin_status = "ACTIVATED";

            } else if ($installed) {

                $plugin_status = 'INSTALLED';

            } else {

                $plugin_status = 'NONE';
            }

            $plugins[$plugin_index]['status'] = $plugin_status;
        }


        return $plugins;
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
