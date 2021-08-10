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
            '/import_selected_file',
            array(
                array(
                    'methods' => \WP_REST_Server::EDITABLE,
                    'callback' => array($this, 'import_selected_file'),
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

        register_rest_route(
            $namespace,
            '/action_for_plugin',
            array(
                array(
                    'methods' => \WP_REST_Server::EDITABLE,
                    'callback' => array($this, 'action_for_plugin'),
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
    public function import_selected_file(\WP_REST_Request $request)
    {
        $selected_demo = sanitize_text_field($request->get_param('selected_demo'));
        $import_file = sanitize_text_field($request->get_param('import_file'));

        $status = false;

        switch ($import_file) {
            case "xml":
                $status = qube_tools()->importer->import_xml_file($selected_demo);
                break;
            case "widget":
                break;
            case "customizer":
                break;
        }


        sleep(1);
        return rest_ensure_response(array(
                'import_file' => $import_file,
                'selected_demo' => $selected_demo,
                'status' => $status
            )
        );

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

            $filtered_required_pluginss = $this->filtered_plugins($required_plugins);

            $response['required_plugins'] = $filtered_required_pluginss;

        }


        return rest_ensure_response($response);
    }


    public function action_for_plugin(\WP_REST_Request $request)
    {


        $plugin = $request->get_param('plugin');

        $plugin_status = isset($plugin['status']) ? $plugin['status'] : '';
        $slug = isset($plugin['slug']) ? $plugin['slug'] : '';
        $init = isset($plugin['init']) ? $plugin['init'] : '';


        //$plugin_status = $plugin_status === 'NONE' ? 'INSTALLED' : 'ACTIVATED';

        /*if ($slug == 'elementor') {
            $sample = array(
                'slug' => 'elementor',
                'init' => 'elementor/elementor.php',
                'name' => 'Elementor',
                'status' => $plugin_status,
                'ajax_status' => $plugin_status

            );
        } else {
            $sample = array(
                'slug' => 'everest-forms',
                'init' => 'everest-forms/everest-forms.php',
                'name' => 'Everest Forms',
                'status' => $plugin_status,
                'ajax_status' => $plugin_status

            );
        }
        return rest_ensure_response($sample);*/

        switch ($plugin_status) {
            case "NONE":
                // Include required libs for installation
                require_once(ABSPATH . 'wp-admin/includes/plugin-install.php');
                require_once(ABSPATH . 'wp-admin/includes/plugin.php');
                require_once(ABSPATH . 'wp-admin/includes/file.php');
                require_once(ABSPATH . 'wp-admin/includes/class-wp-upgrader.php');
                require_once(ABSPATH . 'wp-admin/includes/class-wp-ajax-upgrader-skin.php');
                require_once(ABSPATH . 'wp-admin/includes/class-plugin-upgrader.php');

// Get Plugin Info
                $api = plugins_api('plugin_information',
                    array(
                        'slug' => $slug,
                        'fields' => array(
                            'short_description' => false,
                            'sections' => false,
                            'requires' => false,
                            'rating' => false,
                            'ratings' => false,
                            'downloaded' => false,
                            'last_updated' => false,
                            'added' => false,
                            'tags' => false,
                            'compatibility' => false,
                            'homepage' => false,
                            'donate_link' => false,
                        ),
                    )
                );
                $skin = new \WP_Ajax_Upgrader_Skin();
                $upgrader = new \Plugin_Upgrader($skin);
                $upgrader->install($api->download_link);

                if (!is_wp_error($api)) {
                    $plugin['status'] = 'INSTALLED';
                    $plugin['ajax_status'] = 'INSTALLED';
                }
                break;
            case "INSTALLED":

                require_once(ABSPATH . 'wp-load.php');
                require_once(ABSPATH . 'wp-admin/includes/admin.php');
                require_once(ABSPATH . 'wp-admin/includes/plugin.php');
                $status = activate_plugin($init);
                if (!is_wp_error($status)) {
                    $plugin['status'] = 'ACTIVATED';
                    $plugin['ajax_status'] = 'ACTIVATED';
                }

                break;
        }


        return rest_ensure_response($plugin);
    }


    private function filtered_plugins($plugins)
    {
        // Plugin Status: 0 - Not Installed , 1 Installed Only 2: Installed & Activated
        foreach ($plugins as $plugin_index => $plugin_item) {

            $plugin_path_url = WP_PLUGIN_DIR . '/' . $plugin_item['init'];

            $installed = file_exists($plugin_path_url);

            if (is_plugin_active($plugin_item['init']) && $installed) {

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
