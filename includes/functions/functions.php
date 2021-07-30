<?php

if (!function_exists('qube_tools_load_module_template')) {

    function qube_tools_load_module_template($module = false, $template = null, $variables = array(), $include_once = false)
    {
        if (!$module) {
            return;
        }
        $variables = (array)$variables;

        $variables = apply_filters('qube_tools_load_module_template_variables', $variables);

        extract($variables);

        $isLoad = apply_filters('should_qube_tools_load_module_template', true, $template, $variables);

        if (!$isLoad) {

            return;
        }

        do_action('qube_tools_load_module_template_before', $template, $variables);

        if ($include_once) {

            include_once qube_tools_get_module_template($module, $template);

        } else {

            include qube_tools_get_module_template($module, $template);
        }
        do_action('qube_tools_load_module_template_after', $template, $variables);
    }
}

if (!function_exists('qube_tools_get_module_template')) {

    function qube_tools_get_module_template($module = false, $template = null)
    {
        if (!$template || !$module) {
            return false;
        }
        $template = str_replace('.', DIRECTORY_SEPARATOR, $template);

        $template_location = QUBE_TOOLS_ABSPATH . "includes/modules/{$module}/templates/{$template}.php";

        if (!file_exists($template_location)) {

            echo '<div class="qube-tools-notice-warning"> ' . __(sprintf('The file you are trying to load is not exists in your theme or qube-tools plugins location, if you are a developer and extending qube-tools plugin, please create a php file at location %s ', "<code>{$template_location}</code>"), 'qube-tools') . ' </div>';
        }


        return apply_filters('qube_tools_get_module_template_path', $template_location, $template);
    }
}


if (!function_exists('qube_tools_load_admin_template')) {

    function qube_tools_load_admin_template($template = null, $variables = array(), $include_once = false)
    {
        $variables = (array)$variables;

        $variables = apply_filters('qube_tools_load_admin_template_variables', $variables);

        extract($variables);

        $isLoad = apply_filters('should_qube_tools_load_admin_template', true, $template, $variables);

        if (!$isLoad) {

            return;
        }

        do_action('qube_tools_load_admin_template_before', $template, $variables);

        if ($include_once) {

            include_once qube_tools_get_admin_template($template);

        } else {

            include qube_tools_get_admin_template($template);
        }
        do_action('qube_tools_load_admin_template_after', $template, $variables);
    }
}

if (!function_exists('qube_tools_get_admin_template')) {

    function qube_tools_get_admin_template($template = null)
    {
        if (!$template) {
            return false;
        }
        $template = str_replace('.', DIRECTORY_SEPARATOR, $template);

        $template_location = QUBE_TOOLS_ABSPATH . "includes/admin/templates/{$template}.php";

        if (!file_exists($template_location)) {

            echo '<div class="qube-tools-notice-warning"> ' . __(sprintf('The file you are trying to load is not exists in your theme or qube-tools plugins location, if you are a developer and extending qube-tools plugin, please create a php file at location %s ', "<code>{$template_location}</code>"), 'qube-tools') . ' </div>';
        }


        return apply_filters('qube_tools_get_admin_template_path', $template_location, $template);
    }
}
