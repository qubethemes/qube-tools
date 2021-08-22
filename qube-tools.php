<?php
/**
 * Plugin Name:       Qube Tools
 * Plugin URI:        https://wordpress.org/plugins/qube-tools
 * Description:       Extend Theme Features & One Click Demo Importer Plugin for Qube Themes
 * Version:           1.0.2
 * Author:            Qubethemes
 * Author URI:        https://qubethemes.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       qube-tools
 * Domain Path:       /languages
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Define QUBE_TOOLS_PLUGIN_FILE.
if (!defined('QUBE_TOOLS_FILE')) {
    define('QUBE_TOOLS_FILE', dirname(__FILE__));
}
 // Define QUBE_TOOLS_VERSION.
if (!defined('QUBE_TOOLS_VERSION')) {
    define('QUBE_TOOLS_VERSION', '1.0.2');
}

// Define QUBE_TOOLS_PLUGIN_URI.
if (!defined('QUBE_TOOLS_PLUGIN_URI')) {
    define('QUBE_TOOLS_PLUGIN_URI', plugins_url('', __FILE__) . '/');
}

// Define QUBE_TOOLS_PLUGIN_DIR.
if (!defined('QUBE_TOOLS_PLUGIN_DIR')) {
    define('QUBE_TOOLS_PLUGIN_DIR', plugin_dir_path(__FILE__));
}

require_once wp_normalize_path(QUBE_TOOLS_FILE . '/includes/autoloader.php');


function qube_tools()
{
    return \Qube_Tools\Includes\Main::instance();
}

// Global for backwards compatibility.
$GLOBALS['qube-tools'] = qube_tools();

