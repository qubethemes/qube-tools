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
            importing: 'Importing XML Data',
            imported: 'XML Data Successfully imported',
            failed: 'Failed to import xml data',
        },
        widget: {
            importing: 'Importing Widget Data',
            imported: 'Widget Data Successfully imported',
            failed: 'Failed to import widget data',
        },
        customizer: {
            importing: 'Importing Customizer Data',
            imported: 'Customizer Data Successfully imported',
            failed: 'Failed to import customizer data',
        }
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

        apiFetch({
            path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/import_selected_file',
            method: 'POST',
            data: {
                selected_demo: props.selectedDemo,
                import_file: import_file
            }
        }).then(function (data) {

            importingStatus[data.import_file] = "IMPORTED";
            setImportQueue(newImportQueue);
            setImportStatus(importingStatus);

        }).catch(function (err) {
            importStatus[import_file] = "FAILED";
            setImportQueue(newImportQueue);
            setImportStatus(importStatus);
        });


    }

    useEffect(() => {
        if (importQueue.length > 0) {
            importSelected(importQueue);
        }
    }, [importQueue]);
    return (<div className="qube-tools-importing-notice">
            <div className="qube-tools-import-status qube-tools-popup-text">
                {
                    Object.keys(importStatus).map(function (key) {

                        if (importStatus[key] !== '') {

                            var importStatusValue = importStatus[key].toLowerCase();

                            var importMessage = importMessages[key][importStatusValue] ?? 'Something Wrong, please try again';

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
