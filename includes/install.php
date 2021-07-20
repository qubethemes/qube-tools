<?php


namespace Qube_Tools\Includes;

/**
 * Main Qube_Tools_Install Class.
 *
 * @class Qube_Tools
 */
class Install
{

    public function install()
    {
        if (!is_blog_installed()) {
            return;
        }
        add_option('qube_tools_plugin_do_activation_redirect', true);
        update_option('qube_tools_version', QUBE_TOOLS_VERSION);


        // Check if we are not already running this routine.
        if ('yes' === get_transient('qube_tools_installing')) {
            return;
        }

        // If we made it till here nothing is running yet, lets set the transient now.
        set_transient('qube_tools_installing', 'yes', MINUTE_IN_SECONDS * 10);

        $this->create_files();


        delete_transient('qube_tools_installing');

    }

    public function create_files()
    {
        // Bypass if filesystem is read-only and/or non-standard upload system is used.
        if (apply_filters('qube_tools_install_skip_create_files', false)) {
            return;
        }

        // Install files and folders for uploading files and prevent hotlinking.
        $upload_dir = wp_upload_dir();

        $download_method = get_option('qube_tools_file_download_method', 'force');

        $files = array(
            array(
                'base' => $upload_dir['basedir'] . '/qube-tools-upload',
                'file' => 'index.html',
                'content' => '',
            ),
            array(
                'base' => QUBE_TOOLS_UPLOAD_DIR,
                'file' => '.htaccess',
                'content' => '<FilesMatch ".*\.(css|js)$">
    Order Allow,Deny
    Allow from all
</FilesMatch>',
            ),
            array(
                'base' => QUBE_TOOLS_UPLOAD_DIR,
                'file' => 'index.html',
                'content' => '',
            ),
        );

        if ('redirect' !== $download_method) {
            $files[] = array(
                'base' => $upload_dir['basedir'] . '/qube-tools-upload',
                'file' => '.htaccess',
                'content' => '<FilesMatch ".*\.(css|js)$">
    Order Allow,Deny
    Allow from all
</FilesMatch>',
            );
        }

        $has_created_dir = false;
        foreach ($files as $file) {
            if (wp_mkdir_p($file['base']) && !file_exists(trailingslashit($file['base']) . $file['file'])) {
                $file_handle = @fopen(trailingslashit($file['base']) . $file['file'], 'w'); // phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged, WordPress.WP.AlternativeFunctions.file_system_read_fopen
                if ($file_handle) {
                    fwrite($file_handle, $file['content']); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_read_fwrite
                    fclose($file_handle); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_read_fclose
                    if (!$has_created_dir) {
                        $has_created_dir = true;
                    }
                }
            }
        }
        if (file_exists(trailingslashit(QUBE_TOOLS_UPLOAD_DIR)) . 'index.html') {
            update_option('qube_tools_upload_dir_created', 'yes');
        }


    }


}