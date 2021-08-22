const {
    __
} = wp.i18n;
const {
    useState,
} = wp.element;
const {
    apiFetch
} = wp;
export const Content_Import_Failed = (props) => {

    const [importFeedbackText, setImportFeedbackText] = useState('');
    const [errorMessageSendingStatus, setErrorMessageSendingStatus] = useState('');
    const importFeedbackTextChanged = (val) => {
        setImportFeedbackText(val);
    }

    async function handleSendMessageClicked() {
        setErrorMessageSendingStatus('sending');
        let formData = new FormData();
        formData.append('action', qubeToolsImporterObj.import_feedback_action);
        formData.append('selected_demo', props.selectedDemo);
        formData.append('qube_tools_nonce', qubeToolsImporterObj.import_feedback_nonce);
        formData.append('feedback_text', importFeedbackText);
        formData.append('error_message', "Error Message");
        apiFetch({
            url: qubeToolsImporterObj.ajax_url,
            method: 'POST',
            credentials: 'same-origin',
            body: formData
        }).then(function (response) {

            var is_success = typeof response.success !== "undefined" ? response.success : false;

            if (is_success) {

                setErrorMessageSendingStatus('finish');

            } else {

                setErrorMessageSendingStatus('error');


            }
        }).catch(function (err) {

            setErrorMessageSendingStatus('error');

        });

    }

    var disableStatus = errorMessageSendingStatus === 'sending';

    var sendButtonText = "Send Message";

    switch (errorMessageSendingStatus) {
        case "sending":
            sendButtonText = "Sending.....";
            break;
    }

    return (

        <div className="qube-tools-demo-failed-feedback-form">
            {(() => {
                if (errorMessageSendingStatus === "finish") {
                    return (<h2
                        style={
                            {
                                margin: "100px 0",
                                textTransform: "uppercase"
                            }
                        }>Thank you for the message. We will get back to you soon</h2>);
                } else if (errorMessageSendingStatus === "error") {
                    return <h2
                        style={
                            {
                                margin: "100px 0",
                            }
                        }>Something goes wrong. Please email your problem at qubethemes@gmail.com</h2>
                } else {
                    return (
                        <>
                            <h2>You can submit the problem from here</h2>
                            <label>
            <textarea className="feedback" name="feedback"
                      placeholder="Leave us your message. We will help you to import demo data." onChange={(event) => {
                importFeedbackTextChanged(event.target.value)
            }} disabled={disableStatus}>{
                errorMessageSendingStatus
            }</textarea>
                            </label>
                            <p>Clicking on send button will send your message, admin
                                email, website url, selected demo name, php and
                                wordpress version</p>
                            <button type="button" name="qube_tools_demo_failed_send"
                                    className="button button-secondary" onClick={() => {

                                if (errorMessageSendingStatus === '') {
                                    handleSendMessageClicked();
                                }
                            }} style={
                                {
                                    margin: "20px 0"
                                }
                            }>{sendButtonText}
                            </button>
                        </>
                    )
                }
            })()}


        </div>

    )
}
