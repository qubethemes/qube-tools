<?php

namespace Qube_Tools\Includes\Hooks;

class Template
{
    public function __construct()
    {

        // Success Feedback response
        add_action('admin_init', array($this, 'success_feedback_response'), 10);
        add_action('wp_ajax_qube_tools_feedback_form_response', array($this, 'success_feedback_response'), 10);

        // Failed Feedback response

        add_action('admin_init', array($this, 'failed_feedback_response'), 10);
        add_action('wp_ajax_qube_tools_feedback_form_demo_failed_response', array($this, 'failed_feedback_response'), 10);


        add_action('qube_tools_after_demo_import_success_message', array($this, 'success_feedback_form'), 11, 1);
        add_action('qube_tools_after_demo_import_failed_message', array($this, 'failed_feedback_form'), 11, 1);
    }

    public function success_feedback_form($demo)
    {
        $current_user = wp_get_current_user();

        $email = (string)$current_user->user_email;

        $form_data['form_data'] = array(
            'admin_email' => $email,
            'site_url' => site_url(),
            'installed_demo' => $demo,
            'action' => 'qube_tools_feedback_form_response',

        );

        qube_tools_load_admin_template('feedback-form', $form_data);
    }

    public function failed_feedback_form($demo)
    {
        $current_user = wp_get_current_user();

        $email = (string)$current_user->user_email;

        $form_data['form_data'] = array(
            'admin_email' => $email,
            'site_url' => site_url(),
            'selected_demo' => $demo,
            'action' => 'qube_tools_feedback_form_demo_failed_response',

        );

        qube_tools_load_admin_template('feedback-form-failed', $form_data);

    }

    public function success_feedback_response()
    {
        if (isset($_POST['qube_tools_demo_success_send'])) {

            $nonce = isset($_POST['_wpnonce']) ? $_POST['_wpnonce'] : '';

            $is_verify = wp_verify_nonce($nonce, 'qube_tools_demo_import_success_feedback_form');

            if ($is_verify) {

                $is_ajax = isset($_POST['is_ajax']) ? $_POST['is_ajax'] : '';

                $admin_email = isset($_POST['admin_email']) ? sanitize_text_field($_POST['admin_email']) : '';

                $site_url = isset($_POST['site_url']) ? sanitize_text_field($_POST['site_url']) : '';

                $installed_demo = isset($_POST['installed_demo']) ? sanitize_text_field($_POST['installed_demo']) : '';

                $url_only = '';
                $url = site_url();
                $url_data = parse_url($url);
                $url_data['host'] = explode('.', $url_data['host']);
                if (isset($url_data['host'][0])) {
                    unset($url_data['host'][0]);
                }
                $url_only = join('.', $url_data['host']);
                if (empty($url_only)) {
                    $url_only = $admin_email;
                }
                $feedback = isset($_POST['feedback']) ? sanitize_text_field($_POST['feedback']) : '';
                $to = 'qubethemes@gmail.com';
                $subject = 'Demo Installed Success Response Message 😊 😊';
                $body = 'Hurreyy!!! 😊 Someone has installed Sample Theme demo successfully 😊 😊<br/>';
                $body .= 'They send following feedback message for you.<br/>';
                $body .= "<strong>Admin Email:</strong> {$admin_email}<br/>";
                $body .= "<strong>Website URL:</strong> {$site_url}<br/>";
                $body .= "<strong>Installed Demo Name:</strong> {$installed_demo}<br/>";
                $body .= "<strong>Feedback Message:</strong> {$feedback}<br/>";
                $headers = array(
                    'Content-Type: text/html; charset=UTF-8',
                    'From: qubethemes@' . $url_only
                );

                wp_mail($to, $subject, $body, $headers);
                if ($is_ajax == 'yes') {
                    wp_send_json_success();
                }

            }

        }

    }

    public function failed_feedback_response()
    {
        if (isset($_POST['qube_tools_demo_failed_send'])) {

            $nonce = isset($_POST['_wpnonce']) ? $_POST['_wpnonce'] : '';

            $is_verify = wp_verify_nonce($nonce, 'qube_tools_demo_import_failed_feedback_form');

            if ($is_verify) {

                $is_ajax = isset($_POST['is_ajax']) ? $_POST['is_ajax'] : '';

                $admin_email = isset($_POST['admin_email']) ? sanitize_text_field($_POST['admin_email']) : '';

                $site_url = isset($_POST['site_url']) ? sanitize_text_field($_POST['site_url']) : '';

                $selected_demo = isset($_POST['selected_demo']) ? sanitize_text_field($_POST['selected_demo']) : '';

                $error_message = isset($_POST['error_message']) ? sanitize_text_field($_POST['error_message']) : '';

                $php_version = phpversion();

                $wp_version = get_bloginfo('version');

                $url_only = '';

                $url = site_url();

                $url_data = parse_url($url);

                $url_data['host'] = explode('.', $url_data['host']);

                if (isset($url_data['host'][0])) {
                    unset($url_data['host'][0]);
                }

                $url_only = join('.', $url_data['host']);
                if (empty($url_only)) {
                    $url_only = $admin_email;
                }
                $feedback = isset($_POST['feedback']) ? sanitize_text_field($_POST['feedback']) : '';
                $to = 'qubethemes@gmail.com';
                $subject = 'Sample Theme Demo Installation Failed Response Message 😞 😞';
                $body = 'Opssss!!! 😞 Someone has tried to import Sample Theme demo but unfortunately it\'s failed 😞 😞 <br/>';
                $body .= 'They send following feedback message for you.<br/>';
                $body .= "<strong>Admin Email:</strong> {$admin_email}<br/>";
                $body .= "<strong>Website URL:</strong> {$site_url}<br/>";
                $body .= "<strong>Installed Demo Name:</strong> {$selected_demo}<br/>";
                $body .= "<strong>Feedback Message:</strong> {$feedback}<br/><br/>";
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
                if ($is_ajax == 'yes') {
                    wp_send_json_success();
                }

            }

        }

    }

}