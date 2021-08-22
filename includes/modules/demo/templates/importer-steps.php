<div id="qube-tools-demo-plugins">

    <h2 class="title"><?php echo sprintf(esc_html__('Import the %1$s %2$s %3$s demo', 'qube-tools'), '<strong style="color:#4285f4;font-weight:bold;">', esc_attr($demo), '</strong>'); ?></h2>

    <div class="qube-tools-popup-text">

        <p><?php echo
            sprintf(
                esc_html__('Qube tools help you browse and import ready made websites with few clicks. We recommend you to upload sample data on a fresh WordPress install to prevent conflicts with your current content. You can use this plugin to reset your site if needed: %1$sWordpress Database Reset%2$s.', 'qube-tools'),
                '<a href="' . $plugin_link . '" target="_blank">',
                '</a>'
            ); ?></p>

        <div class="qube-tools-required-plugins-wrap">
            <h3><?php esc_html_e('Recommended Plugins', 'qube-tools'); ?></h3>
            <p><?php esc_html_e('For your site to look exactly like this demo, the plugins below need to be activated.', 'qube-tools'); ?></p>
            <div class="qube-tools-required-plugins qube-tools-plugin-installer">
                <?php
                Qube_Tools\Includes\Modules\Demo\Importer::required_plugins($free, 'free');
                Qube_Tools\Includes\Modules\Demo\Importer::required_plugins($premium, 'premium'); ?>
            </div>
        </div>

    </div>

    <a class="qube-tools-button qube-tools-plugins-next"
       href="#"><?php esc_html_e('Next', 'qube-tools'); ?></a>

</div>

<form method="post" id="qube-tools-demo-import-form">

    <input id="qube_tools_import_demo" type="hidden" name="qube_tools_import_demo"
           value="<?php echo esc_attr($demo); ?>"/>

    <div class="qube-tools-demo-import-form-types">

        <h2 class="title"><?php esc_html_e('Select what you want to import:', 'qube-tools'); ?></h2>

        <ul class="qube-tools-popup-text">
            <li>
                <label for="qube_tools_import_xml">
                    <input id="qube_tools_import_xml" type="checkbox" name="qube_tools_import_xml"
                           checked="checked"/>
                    <strong><?php esc_html_e('Import XML Data', 'qube-tools'); ?></strong>
                    (<?php esc_html_e('pages, posts, images, menus, etc...', 'qube-tools'); ?>)
                </label>
            </li>

            <li>
                <label for="qube_tools_theme_settings">
                    <input id="qube_tools_theme_settings" type="checkbox" name="qube_tools_theme_settings"
                           checked="checked"/>
                    <strong><?php esc_html_e('Import Customizer Settings', 'qube-tools'); ?></strong>
                </label>
            </li>

            <li>
                <label for="qube_tools_import_widgets">
                    <input id="qube_tools_import_widgets" type="checkbox" name="qube_tools_import_widgets"
                           checked="checked"/>
                    <strong><?php esc_html_e('Import Widgets', 'qube-tools'); ?></strong>
                </label>
            </li>

        </ul>

    </div>

    <?php wp_nonce_field('qube_tools_import_demo_data_nonce', 'qube_tools_import_demo_data_nonce'); ?>
    <input type="submit" name="submit" class="qube-tools-button qube-tools-import"
           value="<?php esc_html_e('Install', 'qube-tools'); ?>"/>

</form>

<div class="qube-tools-loader">
    <h2 class="title"><?php esc_html_e('The import process could take some time, please be patient', 'qube-tools'); ?></h2>
    <div class="qube-tools-import-status qube-tools-popup-text"></div>
    <?php
    do_action('qube_tools_after_demo_import_failed_message', $demo);
    ?>
</div>

<div class="qube-tools-last">
    <h2 style="font-size:45px;">🎉 🎉 <?php esc_html_e('Congratulations', 'qube-tools'); ?> 🎉
        🎉</h2>
    <h3><?php esc_html_e('Successfully Demo Imported!', 'qube-tools'); ?></h3>
    <?php
    do_action('qube_tools_after_demo_import_success_message', $demo);
    ?>
    <a href="<?php echo esc_url(get_home_url()); ?>"
       target="_blank"><?php esc_html_e('View Your Site', 'qube-tools'); ?></a>
</div>