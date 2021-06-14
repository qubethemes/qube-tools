<?php

class Qube_Tools_Admin
{
    private $config;

    public function __construct()
    {

        add_action('admin_menu', array($this, 'menu'), 10);
    }

    public function menu()
    {

        $this->config = apply_filters(
            'qube_tools_admin_menu_filter', array(
                'subpage' => false,
                'slug' => '',
                'title' => '',
                'callback' => ''

            )
        );
        if (!$this->config['subpage']) {
            return;
        }
        add_menu_page(
            $this->config['title'],
            $this->config['title'],
            'manage_options',
            $this->config['slug'] . '-options',
            $this->config['callback'],
            '',
            61
        );
    }

}

new Qube_Tools_Admin();