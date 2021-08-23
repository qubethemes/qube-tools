<?php

namespace Qube_Tools\Includes\Modules\Demo\Importers;

class Import
{

    /**
     * Start things up
     */
    public function __construct()
    {


        if (!is_admin() || is_customize_preview()) {
            return;
        }


        // Allows xml uploads
        add_filter('upload_mimes', array($this, 'allow_xml_uploads'));


    }


    /**
     * Allows xml uploads so we can import from server
     *
     * @since 1.0.0
     */
    public function allow_xml_uploads($mimes)
    {
        $mimes = array_merge($mimes, array(
            'xml' => 'application/xml'
        ));
        return $mimes;
    }

    /**
     * Import XML file
     *
     * @since 1.0.0
     */


    public function import_xml_file($demo)
    {
        $xml_file = isset($demo['xml_file']) ? $demo['xml_file'] : '';

        // Delete the default post and page
        $sample_page = get_page_by_path('sample-page', OBJECT, 'page');

        $hello_world_post = get_page_by_path('hello-world', OBJECT, 'post');

        if (!is_null($sample_page)) {
            wp_delete_post($sample_page->ID, true);
        }

        if (!is_null($hello_world_post)) {
            wp_delete_post($hello_world_post->ID, true);
        }
        // Import Posts, Pages, Images, Menus.
        $result = $this->process_xml($xml_file);

        if (is_wp_error($result)) {
            return false;
        }
        return true;
    }

    /**
     * Import customizer settings
     *
     * @since 1.0.0
     */
    public function import_customizer_file($demo)
    {
        // Settings file
        $theme_settings = isset($demo['customizer_file']) ? $demo['customizer_file'] : '';

        // Import settings.
        $customizer_importer = new Customizer();

        $result = $customizer_importer->process_import_file($theme_settings);

        if (is_wp_error($result)) {
            return false;
        }
        return true;
    }

    /**
     * Import widgets
     *
     * @since 1.0.0
     */
    public function import_widget_file($demo)
    {

        // Widgets file
        $widgets_file = isset($demo['widgets_file']) ? $demo['widgets_file'] : '';

        // Import settings.
        $widgets_importer = new Widget();

        $result = $widgets_importer->process_import_file($widgets_file);

        if (is_wp_error($result)) {
            return false;
        }
        return true;
    }

    /**
     * Import XML data
     *
     * @since 1.0.0
     */
    public function process_xml($file)
    {

        $response = qube_tools_get_remote($file);

        // No sample data found
        if ($response === false) {
            return new \WP_Error('xml_import_error', __('Can not retrieve sample data xml file. The server may be down at the moment please try again later. If you still have issues contact the theme developer for assistance.', 'qube-tools'));
        }

        // Write sample data content to temp xml file
        $temp_xml = QUBE_TOOLS_ABSPATH . 'includes/modules/demo/importers/temp.xml';

        file_put_contents($temp_xml, $response);

        // Set temp xml to attachment url for use
        $attachment_url = $temp_xml;

        // If file exists lets import it
        if (file_exists($attachment_url)) {
            $this->import_xml($attachment_url);
        } else {
            // Import file can't be imported - we should die here since this is core for most people.
            return new \WP_Error('xml_import_error', __('The xml import file could not be accessed. Please try again or contact the theme developer.', 'qube-tools'));
        }

    }

    /**
     * Import XML file
     *
     * @since 1.0.0
     */
    private function import_xml($file)
    {

        // Make sure importers constant is defined
        if (!defined('WP_LOAD_IMPORTERS')) {
            define('WP_LOAD_IMPORTERS', true);
        }

        // Import file location
        $import_file = ABSPATH . 'wp-admin/includes/import.php';

        // Include import file
        if (!file_exists($import_file)) {
            return;
        }

        // Include import file
        require_once($import_file);

        // Define error var
        $importer_error = false;

        if (!class_exists('WP_Importer')) {
            $class_wp_importer = ABSPATH . 'wp-admin/includes/class-wp-importer.php';

            if (file_exists($class_wp_importer)) {
                require_once $class_wp_importer;
            } else {
                $importer_error = __('Can not retrieve class-wp-importer.php', 'qube-tools');
            }
        }


        // Display error
        if ($importer_error) {
            return new \WP_Error('xml_import_error', $importer_error);
        } else {

            // No error, lets import things...
            if (!is_file($file)) {
                $importer_error = __('Sample data file appears corrupt or can not be accessed.', 'qube-tools');
                return new \WP_Error('xml_import_error', $importer_error);
            } else {
                $importer = new WPImporter();
                $importer->fetch_attachments = true;
                $importer->import($file);

                // Clear sample data content from temp xml file
                $temp_xml = QUBE_TOOLS_ABSPATH . 'includes/modules/demo/importers/temp.xml';
                file_put_contents($temp_xml, '');
            }
        }
    }


    public function ajax_after_import($demo)
    {
        if (!current_user_can('manage_options')) {
            return false;
        }


        // Elementor width setting
        $elementor_width = isset($demo['elementor_width']) ? $demo['elementor_width'] : '';

        // Reading settings
        $homepage_title = isset($demo['home_title']) ? $demo['home_title'] : 'Home';

        $blog_title = isset($demo['blog_title']) ? $demo['blog_title'] : '';

        // Posts to show on the blog page
        $posts_to_show = isset($demo['posts_to_show']) ? $demo['posts_to_show'] : '';

        // Product image size
        $image_size = isset($demo['woo_image_size']) ? $demo['woo_image_size'] : '';

        $thumbnail_size = isset($demo['woo_thumb_size']) ? $demo['woo_thumb_size'] : '';

        $crop_width = isset($demo['woo_crop_width']) ? $demo['woo_crop_width'] : '';

        $crop_height = isset($demo['woo_crop_height']) ? $demo['woo_crop_height'] : '';


        // Set imported menus to registered theme locations
        $locations = get_theme_mod('nav_menu_locations');

        $menus = wp_get_nav_menus();

        if ($menus) {

            foreach ($menus as $menu) {

                if ($menu->name == 'Primary Menu') {
                    $locations['primary'] = $menu->term_id;
                } else if ($menu->name == 'Top Header Menu') {
                    $locations['top_header_menu'] = $menu->term_id;
                } else if ($menu->name == 'Footer Menu') {
                    $locations['bottom_footer_menu'] = $menu->term_id;
                } else if ($menu->name == 'Offcanvas Menu') {
                    $locations['offcanvas_menu'] = $menu->term_id;
                }

            }

        }

        // Set menus to locations
        set_theme_mod('nav_menu_locations', $locations);

        // Disable Elementor default settings
        update_option('elementor_disable_color_schemes', 'yes');
        update_option('elementor_disable_typography_schemes', 'yes');
        if (!empty($elementor_width)) {
            update_option('elementor_container_width', $elementor_width);
        }

        // Assign front page and posts page (blog page).
        $home_page = get_page_by_title($homepage_title);
        $blog_page = get_page_by_title($blog_title);

        update_option('show_on_front', 'page');

        if (is_object($home_page)) {
            update_option('page_on_front', $home_page->ID);
        }

        if (is_object($blog_page)) {
            update_option('page_for_posts', $blog_page->ID);
        }

        // Posts to show on the blog page
        if (!empty($posts_to_show)) {
            update_option('posts_per_page', $posts_to_show);
        }


        return true;
    }

}
