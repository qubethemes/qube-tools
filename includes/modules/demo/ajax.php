<?php

namespace Qube_Tools\Includes\Modules\Demo;

use Qube_Tools\Includes\Modules\Demo\Importers\Import;

class Ajax
{

    public function __construct()
    {
        add_action('wp_ajax_qube_tools_ajax_import_feedback', array($this, 'import_failed_feedback'), 10);
        add_action('wp_ajax_qube_tools_ajax_import', array($this, 'import_all'));


    }

    public function import_failed_feedback()
    {
        if (!isset($_POST['qube_tools_nonce'])) {

            wp_send_json_error();
        }
        $nonce = isset($_POST['qube_tools_nonce']) ? $_POST['qube_tools_nonce'] : '';

        $is_nonce_valid = wp_verify_nonce($nonce, 'qube_tools_import_feedback_nonce');

        if (!$is_nonce_valid) {

            wp_send_json_error();
        }
        $selected_demo = isset($_POST['selected_demo']) ? sanitize_text_field($_POST['selected_demo']) : '';

        if ('' === $selected_demo) {

            wp_send_json_error();

        }
        $admin_email = get_option('admin_email');

        $error_message = isset($_POST['error_message']) ? sanitize_text_field($_POST['error_message']) : '';

        $feedback_text = isset($_POST['feedback_text']) ? sanitize_text_field($_POST['feedback_text']) : '';

        $php_version = phpversion();

        $wp_version = get_bloginfo('version');

        $url_only = '';

        $site_url = site_url();

        $url_data = parse_url($site_url);

        $url_data['host'] = explode('.', $url_data['host']);

        if (isset($url_data['host'][0])) {

            unset($url_data['host'][0]);
        }

        $url_only = join('.', $url_data['host']);
        if (empty($url_only)) {
            $url_only = $admin_email;
        }
        $to = 'qubethemes@gmail.com';
        $subject = 'Sample Theme Demo Installation Failed Response Message 😞 😞';
        $body = 'Opssss!!! 😞 Someone has tried to import Sample Theme demo but unfortunately it\'s failed 😞 😞 <br/>';
        $body .= 'They send following feedback message for you.<br/>';
        $body .= "<strong>Admin Email:</strong> {$admin_email}<br/>";
        $body .= "<strong>Website URL:</strong> {$site_url}<br/>";
        $body .= "<strong>Installed Demo Name:</strong> {$selected_demo}<br/>";
        $body .= "<strong>Feedback Message:</strong> {$feedback_text}<br/><br/>";
        $body .= "<strong>Technical Details</strong><br/>";
        $body .= "<strong>PHP Version:</strong> {$php_version}<br/>";
        $body .= "<strong>WordPress Version:</strong> {$wp_version}<br/>";
        $body .= "<strong>Error Message</strong><br/>";
        $body .= "===================================<br/>";
        $body .= "{$error_message}<br/>";
        $body .= "===================================<br/>";
        $headers = array(
            'Content-Type: text/html; charset=UTF-8',
            'From: qubethemes@' . $url_only
        );

        wp_mail($to, $subject, $body, $headers);

        wp_send_json_success();


    }

    public function import_all()
    {
        if (!current_user_can('manage_options')) {
            die('This action was stopped for security purposes.');
        }

        $nonce = isset($_POST['qube_tools_nonce']) ? sanitize_text_field($_POST['qube_tools_nonce']) : '';

        $import_file = isset($_POST['import_file']) ? trim(sanitize_text_field($_POST['import_file'])) : '';

        $action = "qube_tools_import_{$import_file}_demo_data_nonce";

        if (!wp_verify_nonce($nonce, $action)) {

            die('This action was stopped for security purposes.');

        }
        // Get the selected demo
        $demo_type = isset($_POST['selected_demo']) ? sanitize_text_field($_POST['selected_demo']) : '';

        $import_status_arr = isset($_POST['import_status']) ? ($_POST['import_status']) : [];

        $all_demo = qube_tools_get_demos_data();

        $demo = isset($all_demo[$demo_type]) ? $all_demo[$demo_type] : array();

        if ($demo_type == '') {
            die('Something Wrong, please try again');
        }

        $status = false;

        $import = new Import();

        switch ($import_file) {
            case "xml":
                $status = $import->import_xml_file($demo);
                break;
            case "widget":
                $status = $import->import_widget_file($demo);
                break;
            case "customizer":
                $status = $import->import_customizer_file($demo);
                break;
        }

        // Check for after imported method

        $total_imported_files = 0;

        foreach ($import_status_arr as $import_status_key => $import_status_value) {
            if ($import_status_value != '') {
                $total_imported_files++;
            } else if ($import_status_value == '' && $import_file === $import_status_key) {
                $total_imported_files++;
            }
        }
        $after_import_status = false;
        if ($total_imported_files == count($import_status_arr)) {
            // Call for after import method
            $after_import_status = $import->ajax_after_import($demo);
        }

        if ($status) {
            wp_send_json_success([
                "import_file" => $import_file,
                "selected_demo" => $demo_type,
                'imported_count' => $total_imported_files,
                'status' => $import_status_arr,
                'after_import_status' => $after_import_status

            ]);
        }

        wp_send_json_error([
            "import_file" => $import_file,
            "selected_demo" => $demo_type,
            'imported_count' => $total_imported_files,
            'status' => $import_status_arr,
            'after_import_status' => $after_import_status


        ]);
        exit;
    }


}
