<?php

class Qube_Tools_Admin
{
    public function __construct()
    {
        add_action('admin_menu', array($this, 'subpage'), 10);

    }

    // action function for above hook

    /**
     * Adds a new top-level page to the administration menu.
     */
    function subpage()
    {
        add_menu_page(
            __('Qube Theme Options', 'textdomain'),
            __('Qube Theme Options', 'textdomain'),
            'manage_options',
            'qube-tools-panel',
            array($this, 'admin_page'),
            '',
            61
        );
    }

    public function admin_page()
    {
        $theme = wp_get_theme();
        if (strtolower($theme->get_template() === 'qube-tools')) {
            Qube_Themes_About::get_instance(true)->page();
        }

    }
}

new Qube_Tools_Admin();