<?php

add_filter('qube_tools_demos_data', 'qube_tools_demo_data_config');

function qube_tools_demo_data_config()
{
    $theme_slug = qube_tools()->theme_config['slug'];

    $demo_data_root_path = apply_filters('qube_tools_demo_data_path','');
    
    return array(
        'agency' => array(
            'categories' => array('Elementor', 'Corporate & Business', 'WooCommerce'),
            'xml_file' => $demo_data_root_path . 'agency/content.xml',
            'theme_settings' => $demo_data_root_path . 'agency/customizer.dat',
            'widgets_file' => $demo_data_root_path . 'agency/widgets.wie',
            'screenshot' => $demo_data_root_path . 'agency/screenshot.png',
            'home_title' => 'Home',
            'blog_title' => 'Blog',
            'posts_to_show' => '5',
            'elementor_width' => '1140',
            'required_plugins' => array(
                'free' => array(
                    array(
                        'slug' => 'elementor',
                        'init' => 'elementor/elementor.php',
                        'name' => 'Elementor',
                    ),
                    array(
                        'slug' => 'everest-forms',
                        'init' => 'everest-forms/everest-forms.php',
                        'name' => 'Everest Forms',
                    )

                )
            ),
        ),
        'charity' => array(
            'categories' => array('Elementor', 'Charity', 'Blog'),
            'xml_file' => $demo_data_root_path . 'charity/content.xml',
            'theme_settings' => $demo_data_root_path . 'charity/customizer.dat',
            'widgets_file' => $demo_data_root_path . 'charity/widgets.wie',
            'screenshot' => $demo_data_root_path . 'charity/screenshot.png',
            'home_title' => 'Home',
            'blog_title' => 'Blog',
            'posts_to_show' => '5',
            'elementor_width' => '1140',
            'required_plugins' => array(
                'free' => array(
                    array(
                        'slug' => 'elementor',
                        'init' => 'elementor/elementor.php',
                        'name' => 'Elementor',
                    ),

                ),
                'premium' => array(
                    array(
                        'slug' => 'qube-tools-typography-addon',
                        'init' => 'qube-tools-typography-addon/qube-tools-typography-addon.php',
                        'name' => ' Typography Addon',
                    ),

                )
            ),
        ),
    );
}