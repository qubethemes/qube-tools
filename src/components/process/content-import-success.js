const {
    __
} = wp.i18n;

export const Content_Import_Success = (props) => {

    return (<div className="qube-tools-import-success">
            <h2 style={{fontSize: '45px'}}>
                <img draggable="false" role="img" className="emoji" alt="🎉"
                     src="https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"/>
                <img draggable="false" role="img" className="emoji" alt="🎉"
                     src="https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"/> Congratulations
                <img
                    draggable="false" role="img" className="emoji" alt="🎉"
                    src="https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"/>
                <img draggable="false" role="img" className="emoji" alt="🎉"
                     src="https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"/></h2>

            <h3>Successfully Demo Imported!</h3>

            <form className="qube-tools-demo-success-feedback" method="post">
                <input type="hidden" id="_wpnonce" name="_wpnonce" value="e61f151d10"/>

                <input
                    type="hidden" name="_wp_http_referer"
                    value="/wp-admin/admin-ajax.php?action=qube_tools_ajax_get_demo_data&amp;demo_name=main&amp;demo_data_nonce=1bdff2a34f&amp;_fs_blog_admin=true"/>
                <input
                    type="hidden" id="_wpnonce" name="_wpnonce" value="e61f151d10"/>
                <input
                    type="hidden" name="_wp_http_referer"
                    value="/wp-admin/admin-ajax.php?action=qube_tools_ajax_get_demo_data&amp;demo_name=main&amp;demo_data_nonce=1bdff2a34f&amp;_fs_blog_admin=true"/>

                <input type="hidden" name="admin_email" value="mantrabrain@gmail.com"/>

                <input type="hidden" name="site_url"
                       value="https://staging.mantrabrain.com"/>
                <input type="hidden" name="installed_demo" value="main"/>
                <input type="hidden" name="action"
                       value="qube_tools_feedback_form_response"/>
                <label>
                                                            <textarea className="feedback" name="feedback"
                                                                      placeholder="Do  you have any suggestion? You can give us feedback from here.">Feed</textarea>
                </label>
                <p>Clicking on send button will send your feedback message,
                    admin email, website url and installed demo name.</p>
                <button type="submit" name="qube_tools_demo_success_send"
                        className="button button-secondary">
                    Send
                </button>
            </form>
            <p style={{
                fontWeight: "bold",
                fontSize: "16px"
            }}>If you have some spare time, can you please
                write review from here?</p>
            <a style={{
                textDecoration: 'none',
                border: 'none',
                display: 'block',
                padding: '15px',
                background: "#007cba",
                color: '#fff',
                fontSize: "20px",
                margin: "20px 0",
                borderRadius: "50px"
            }}
               href="https://wordpress.org/support/theme/qube/reviews/?filter=5" target="_blank">Yes
                I Would Like to Write Review</a> <a href="https://staging.mantrabrain.com"
                                                    target="_blank">View Your Site</a>
        </div>
    )
}
