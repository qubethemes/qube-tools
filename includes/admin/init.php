<?php

namespace Qube_Tools\Includes\Admin;

class Init
{
    private $config;

    public function __construct()
    {

        add_action('admin_menu', array($this, 'menu'), 10);
        add_action('admin_menu', array($this, 'add_page'), 11);

    }

    public function add_page()
    {


        $title = esc_html__('Install Demos', 'qube-tools');


        if (!$this->config['slug']) {
            return;
        }

        add_submenu_page(
            $this->config['slug'] . '-options',
            'Install Demos',
            'Install Demos',
            'manage_options',
            'qube-tools-install-demos',
            array($this, 'create_admin_page')
        );

    }

    public function menu()
    {

        $this->config = qube_tools()->theme_config;

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

    /**
     * Settings page output
     *
     * @since 1.0.0
     */
    public function create_admin_page()
    {

        qube_tools_load_admin_template('importer-page');


    }
}