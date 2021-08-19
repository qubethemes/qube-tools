const {
    __
} = wp.i18n;
const {
    useState,
} = wp.element;
export const Content_Import_Failed = (props) => {

    const [importError, setImportError] = useState('');
    const [errorMessageSendingStatus, setErrorMessageSendingStatus] = useState('');
    const importErrorChanged = (val) => {
        setImportError(val);
    }

    async function handleSendMessageClicked() {
        setErrorMessageSendingStatus('sending');
    }

    async function importSelected(queue) {

        var newImportQueue = queue.slice(0);

        var import_file = newImportQueue[0];

        newImportQueue.splice(0, 1);

        let importingStatus = Object.assign({}, importStatus);  // creating copy of state variable

        importingStatus[import_file] = 'IMPORTING';

        setImportStatus(importingStatus);
        let nonce = importNonce[import_file] ?? '';
        let formData = new FormData();
        formData.append('action', qubeToolsImporterObj.import_action);
        formData.append('selected_demo', props.selectedDemo);
        formData.append('import_file', import_file);
        formData.append('qube_tools_nonce', nonce);
        apiFetch({
            url: qubeToolsImporterObj.ajax_url,
            method: 'POST',
            credentials: 'same-origin',
            body: formData
        }).then(function (response) {

            var is_success = typeof response.success !== "undefined" ? response.success : false;
            var new_import_file = typeof response.data !== "undefined" ? response.data.import_file : import_file;


            if (is_success) {

                importingStatus[new_import_file] = "IMPORTED";
                setImportQueue(newImportQueue);
                setImportStatus(importingStatus);


            } else {

                importingStatus[new_import_file] = "FAILED";
                setImportQueue(newImportQueue);
                setImportStatus(importingStatus);

            }
        }).catch(function (err) {

            importingStatus[import_file] = "FAILED";
            setImportQueue(newImportQueue);
            setImportStatus(importingStatus);
        });


    }

    var disableStatus = errorMessageSendingStatus === 'sending';
    return (

        <div className="qube-tools-demo-failed-feedback-form">
            <h2>You can submit the problem from here </h2>


            <label>
            <textarea className="feedback" name="feedback"
                      placeholder="Leave us your message. We will help you to import demo data." onChange={(event) => {
                importErrorChanged(event.target.value)
            }} disabled={disableStatus}>{
                errorMessageSendingStatus
            }</textarea>
            </label>
            <p>Clicking on send button will send your message, admin
                email, website url, selected demo name, php and
                wordpress version</p>
            <button type="button" name="qube_tools_demo_failed_send"
                    className="button button-secondary" onClick={() => {
                handleSendMessageClicked()
            }}>
                Send message
            </button>
        </div>

    )
}
