const {
    __
} = wp.i18n;

export const Content_Step_2 = (props) => {

    return (<div className="qube-tools-loader">
            <h2 className="title">The import process could take some time, please be patient</h2>
            <div className="qube-tools-import-status qube-tools-popup-text"></div>
            <form className="qube-tools-demo-failed-feedback-form" method="post">
                <h2>Problem during demo import? </h2>
                <input type="hidden" id="_wpnonce" name="_wpnonce" value="e31091aa0c"/>
                <input
                    type="hidden" name="_wp_http_referer"
                    value="/wp-admin/admin-ajax.php?action=qube_tools_ajax_get_demo_data&amp;demo_name=main&amp;demo_data_nonce=1bdff2a34f&amp;_fs_blog_admin=true"/>
                <input
                    type="hidden" id="_wpnonce" name="_wpnonce" value="e31091aa0c"/>
                <input
                    type="hidden" name="_wp_http_referer"
                    value="/wp-admin/admin-ajax.php?action=qube_tools_ajax_get_demo_data&amp;demo_name=main&amp;demo_data_nonce=1bdff2a34f&amp;_fs_blog_admin=true"/>

                <input type="hidden" name="admin_email" value="mantrabrain@gmail.com"/>

                <input type="hidden" name="site_url"
                       value="https://staging.mantrabrain.com"/>
                <input type="hidden" name="selected_demo" value="main"/>
                <input type="hidden" name="action"
                       value="qube_tools_feedback_form_demo_failed_response"/>
                <input type="hidden" name="error_message"
                       className="error_message" value=""/>
                <label>
                                                                <textarea className="feedback" name="feedback"
                                                                          placeholder="Leave us your message. We will help you to import demo data.">DDDD</textarea>
                </label>
                <p>Clicking on send button will send your message, admin
                    email, website url, selected demo name, php and
                    wordpress version</p>
                <button type="submit" name="qube_tools_demo_failed_send"
                        className="button button-secondary">
                    Send message
                </button>
            </form>
        </div>
    )
}
