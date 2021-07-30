<div class="card qube-tools-demo-wrap wrap">

    <h2><?php

        echo ucwords(get_stylesheet()) . ' ' . esc_attr('Theme Demos', 'qube-tools'); ?></h2>

    <div class="theme-browser rendered">

        <?php
        // Vars
        $demos = qube_tools_get_demos_data();

        $categories = array();//Qube_Tools_Demos::get_demo_all_categories($demos); ?>

        <?php if (!empty($categories)) : ?>
            <div class="qube-tools-header-bar">
                <nav class="qube-tools-navigation">
                    <ul>
                        <li class="active"><a href="#all"
                                              class="qube-tools-navigation-link"><?php esc_html_e('All', 'qube-tools-toolkit'); ?></a>
                        </li>
                        <?php foreach ($categories as $key => $name) : ?>
                            <li><a href="#<?php echo esc_attr($key); ?>"
                                   class="qube-tools-navigation-link"><?php echo esc_html($name); ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                </nav>
                <div clas="qube-tools-search">
                    <input type="text" class="qube-tools-search-input" name="qube-tools-search" value=""
                           placeholder="<?php esc_html_e('Search demos...', 'qube-tools-toolkit'); ?>">
                </div>
            </div>
        <?php endif; ?>

        <div class="themes wp-clearfix">

            <?php

            foreach ($demos as $demo => $key) {

                $screenshot = isset($key['screenshot']) ? $key['screenshot'] : '';


                // Vars
                $item_categories = qube_tools_get_demo_item_categories($key); ?>

                <div class="theme-wrap" data-categories="<?php echo esc_attr($item_categories); ?>"
                     data-name="<?php echo esc_attr(strtolower($demo)); ?>">

                    <div class="theme qube-tools-open-popup" data-demo-id="<?php echo esc_attr($demo); ?>">

                        <div class="theme-screenshot">
                            <img src="<?php echo esc_url($screenshot); ?>"/>

                            <div class="select-theme">
                                <span><?php _e('Select Demo', 'qube-tools-toolkit'); ?></span>
                            </div>

                            <div class="demo-import-loader preview-all preview-all-<?php echo esc_attr($demo); ?>"></div>

                            <div class="demo-import-loader preview-icon preview-<?php echo esc_attr($demo); ?>">
                                <i class="custom-loader"></i></div>
                        </div>

                        <div class="theme-id-container">

                            <h2 class="theme-name" id="<?php echo esc_attr($demo); ?>">
                                <span><?php echo ucwords($demo); ?></span></h2>

                            <?php
                            $live_preview_link = 'http://demo.qubethemes.com/' . $demo;
                            ?>
                            <div class="theme-actions">
                                <a class="button button-primary"
                                   href="<?php echo esc_url($live_preview_link); ?>"
                                   target="_blank"><?php _e('Live Preview', 'qube-tools-toolkit'); ?></a>
                            </div>

                        </div>

                    </div>

                </div>

            <?php } ?>

        </div>

    </div>

</div>