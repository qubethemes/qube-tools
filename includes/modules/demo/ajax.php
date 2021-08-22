<?php

namespace Qube_Tools\Includes\Modules\Demo;

class Ajax
{

    public function __construct()
    {
        add_action('wp_ajax_qube_tools_ajax_import_feedback', array($this, 'import_failed_feedback'), 10);

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


}
