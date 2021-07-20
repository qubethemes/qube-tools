<?php
/**
 * @package: qubethemes
 * @subpackage: qube_tools
 * @author: qubethemes
 * @author_uri: https://qubethemes.com
 * @since 1.0.0
 */
if (!function_exists('qube_tools_plugin_autoloader')) {

    function qube_tools_plugin_autoloader($class_name)
    {
        $class_details = explode('\\', $class_name);

        if (!isset($class_details[0])) {
            return;
        }
        if ($class_details[0] != 'Qube_Tools') {
            return;
        }
        if (!isset($class_details[1])) {
            return;
        }
        if ($class_details[1] != 'Includes') {
            return;
        }

        unset($class_details[0]);

        if (!$class_details || !is_array($class_details)) {
            return;
        }

        $file_path = implode(DIRECTORY_SEPARATOR, $class_details);

        $sanitize_path = str_replace('_', '-', $file_path);

        $full_file_path = QUBE_TOOLS_FILE . DIRECTORY_SEPARATOR . strtolower($sanitize_path) . '.php';

        $sanitize_file_path = wp_normalize_path($full_file_path);


        if (!file_exists($sanitize_file_path)) {

            return;
        }

        require_once $sanitize_file_path;

    }

}

spl_autoload_register('qube_tools_plugin_autoloader');
