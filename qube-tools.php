<?php
/**
 * Plugin Name:       Qube Tools
 * Plugin URI:        https://wordpress.org/plugins/qube-tools
 * Description:       Extend Qubethemes's theme feature & one click demo importer
 * Version:           1.0.0
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
    define('QUBE_TOOLS_FILE', __FILE__);
}

// Define QUBE_TOOLS_VERSION.
if (!defined('QUBE_TOOLS_VERSION')) {
    define('QUBE_TOOLS_VERSION', '1.0.0');
}

// Define QUBE_TOOLS_PLUGIN_URI.
if (!defined('QUBE_TOOLS_PLUGIN_URI')) {
    define('QUBE_TOOLS_PLUGIN_URI', plugins_url('', QUBE_TOOLS_FILE) . '/');
}

// Define QUBE_TOOLS_PLUGIN_DIR.
if (!defined('QUBE_TOOLS_PLUGIN_DIR')) {
    define('QUBE_TOOLS_PLUGIN_DIR', plugin_dir_path(QUBE_TOOLS_FILE));
}


// Include the main Qube_Tools class.
if (!class_exists('Qube_Tools')) {
    include_once dirname(__FILE__) . '/includes/class-qube-tools.php';
}


/**
 * Main instance of Qube_Tools.
 *
 * Returns the main instance of Qube_Tools to prevent the need to use globals.
 *
 * @return Qube_Tools
 * @since 1.0.0
 */
function qube_tools()
{
    return Qube_Tools::instance();
}

// Global for backwards compatibility.
$GLOBALS['qube-tools'] = qube_tools();
