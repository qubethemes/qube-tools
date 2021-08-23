const {
    __
} = wp.i18n;
const {
    useState,
    useEffect
} = wp.element;
const {
    apiFetch
} = wp;
export const Content_Importing = (props) => {

    const [importQueue, setImportQueue] = useState(getImportQueue());

    const [importStatus, setImportStatus] = useState({
        xml: '',
        customizer: '',
        widget: ''
    });

    const [ajaxImportStatus, setAjaxImportStatus] = useState();


    const [importMessages, setImportMessages] = useState({
        xml: {
            importing: __('Importing XML Data', 'qube-tools'),
            imported: __('XML Data Successfully imported', 'qube-tools'),
            failed: __('Failed to import xml data', 'qube-tools'),
        },
        widget: {
            importing: __('Importing Widget Data', 'qube-tools'),
            imported: __('Widget Data Successfully imported', 'qube-tools'),
            failed: __('Failed to import widget data', 'qube-tools'),
        },
        customizer: {
            importing: __('Importing Customizer Data', 'qube-tools'),
            imported: __('Customizer Data Successfully imported', 'qube-tools'),
            failed: __('Failed to import customizer data', 'qube-tools'),
        }
    });

    const [importNonce, setImportNonce] = useState({
        xml: qubeToolsImporterObj.xml_import_nonce,
        widget: qubeToolsImporterObj.widget_import_nonce,
        customizer: qubeToolsImporterObj.customizer_import_nonce,
    });

    function getImportQueue() {

        let importType = [];

        if (props.isXMLDataChecked) {
            importType.push('xml');
        }
        if (props.isCustomizerDataChecked) {
            importType.push('customizer');
        }
        if (props.isWidgetDataChecked) {
            importType.push('widget');
        }
        return importType;

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
        for (var importStatusKey in importStatus) {
            formData.append('import_status[' + importStatusKey + ']', importStatus[importStatusKey]);
        }

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

    useEffect(() => {
        if (importQueue.length > 0) {
            importSelected(importQueue);
        }
    }, [importQueue]);
    return (<div className="qube-tools-importing-notice">
            <div className="qube-tools-import-status qube-tools-popup-text">
                {props.updateImportCount(importStatus)}
                {
                    Object.keys(importStatus).map(function (key) {

                        if (importStatus[key] !== '') {

                            var importStatusValue = importStatus[key].toLowerCase();

                            var importMessage = importMessages[key][importStatusValue] ?? __('Something Wrong, please try again', 'qube-tools');

                            var className = '';

                            if (importStatus[key] === 'IMPORTING') {
                                className = 'qube-tools-importing';
                            } else if (importStatus[key] === 'IMPORTED') {
                                className = 'qube-tools-imported';

                            } else {
                                className = 'qube-tools-importing-failed';

                            }

                            return (<p className={className}>{importMessage}</p>);
                        }
                    })}
            </div>

        </div>
    )
}
