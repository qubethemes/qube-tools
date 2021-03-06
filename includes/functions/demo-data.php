<?php

add_filter('qube_tools_demos_data', 'qube_tools_demo_data_config');

function qube_tools_demo_data_config()
{
    $theme_slug = isset(qube_tools()->theme_config['slug']) ? qube_tools()->theme_config['slug'] : '';

    $demo_data_root_path = 'https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/';

    return array(
        'agency' => array(
            'title' => 'Agency',
            'categories' => array(
                'elementor' => 'Elementor',
                'corporate' => 'Corporate & Business',
                'woocommerce' => 'WooCommerce',
                'all' => 'All'
            ),
            'xml_file' => $demo_data_root_path . 'agency/content.xml',
            'customizer_file' => $demo_data_root_path . 'agency/customizer.dat',
            'widgets_file' => $demo_data_root_path . 'agency/widgets.wie',
            'screenshot' => $demo_data_root_path . 'agency/screenshot.png',
            'preview_url' => 'https://demo.qubethemes.com/themes/agency',
            'home_title' => 'Home',
            'blog_title' => 'Agency',
            'posts_to_show' => '5',
            'elementor_width' => '1140',
            'required_plugins' => [
                array(
                    'slug' => 'elementor',
                    'init' => 'elementor/elementor.php',
                    'name' => 'Elementor',
                ),
                array(
                    'slug' => 'akismet',
                    'init' => 'akismet/akismet.php',
                    'name' => 'Akismet',

                ),
                array(
                    'slug' => 'everest-forms',
                    'init' => 'everest-forms/everest-forms.php',
                    'name' => 'Everest Forms',

                )

            ],
        ),
        'charity' => array(
            'title' => 'Charity',
            'categories' => array(
                'elementor' => 'Elementor',
                'charity' => 'Charity',
                'blog' => 'Blog',
                'etc' => 'ETC',
                'all' => 'All',

            ),
            'xml_file' => $demo_data_root_path . 'charity/content.xml',
            'customizer_file' => $demo_data_root_path . 'charity/customizer.dat',
            'widgets_file' => $demo_data_root_path . 'charity/widgets.wie',
            'screenshot' => $demo_data_root_path . 'charity/screenshot.png',
            'preview_url' => 'https://demo.qubethemes.com/themes/charity',
            'home_title' => 'Home',
            'blog_title' => 'Blog',
            'posts_to_show' => '5',
            'elementor_width' => '1140',
            'required_plugins' => array(
                array(
                    'slug' => 'elementor',
                    'init' => 'elementor/elementor.php',
                    'name' => 'Elementor',

                ),
                array(
                    'slug' => 'qube-tools-typography-addon',
                    'init' => 'qube-tools-typography-addon/qube-tools-typography-addon.php',
                    'name' => ' Typography Addon',
                    'is_pro' => true,
                    'url' => 'https://qubethemes.com/plugins/typography-addon'

                )
            ),
        ),
    );
}