/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import {Main} from "./components/main"


const {
    __
} = wp.i18n;

const {
    render,
    useState
} = wp.element;

const {isEqual} = lodash;

const {
    apiFetch
} = wp;

const {
    TabPanel,
    Notice,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardDivider,
    CardFooter,
    Spinner
} = wp.components;

import {
    useComponentDidMount,
    useComponentDidUpdate,
    useComponentWillUnmount
} from "./utils/components";

const AddSettings = () => {
    const [allSetting, setInitialSetting] = useState({}),
        [isSaving, setIsSaving] = useState(false),
        [hasNotice, setNotice] = useState(false),
        [hasError, setError] = useState(false),
        [needSave, setNeedSave] = useState(false);

    const SettingNotice = () => (
        <Notice
            onRemove={() =>
                setNotice(false)
            }
            status={hasError ? 'error' : 'success'}
        >
            <p>
                {hasError && __('An error occurred.', 'qube-tools')}
                {!hasError && __('Saved Successfully.', 'qube-tools')}
            </p>
        </Notice>
    );

    async function getSettings() {
        let data = await apiFetch({
            path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/get_settings'
        });
        if (data) {
            setInitialSetting(data);
        } else {
            setInitialSetting({});
        }
    }

    async function setSettings() {
        setIsSaving(true)
        let data = await apiFetch({
            path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/set_settings',
            method: 'POST',
            data: {
                settings: allSetting,
            }
        });
        if (isEqual(allSetting, data)) {
            setError(false);
            setIsSaving(false);
            setNeedSave(false);
            setInitialSetting(data);
        } else {
            setIsSaving(false);
            setError(true);
            setNeedSave(true);
        }
        setNotice(true)
    }

    const setStateSettings = (key, val) => {
        let newSetting = Object.assign({}, allSetting);
        newSetting[key] = val;
        setInitialSetting(newSetting);
        setNeedSave(true);
    }

    useComponentDidMount(() => {
        getSettings()
    });

    useComponentDidUpdate(() => {
        /*Nothing for now*/
    });

    useComponentWillUnmount(() => {
        /*Nothing for now*/
    });

    if (!Object.keys(allSetting).length) {
        return (
            <Spinner/>
        )
    }
    return (
        <Card>
            <CardHeader style={{overflow: 'hidden', height: '70px'}}>
                <h1>{__('Theme Demo Import', 'qube-tools')}</h1>
                {hasNotice && !isSaving && <SettingNotice/>}
            </CardHeader>
            <CardBody>
                <div className="theme-browser rendered">
                    <Main/>
                </div>
            </CardBody>
            <CardDivider/>
            <CardFooter>
                <Button
                    className="button"
                    onClick={() =>
                        setSettings()
                    }
                    isPrimary
                    disabled={isSaving || !needSave}
                >
                    {needSave ? __('Save Settings', 'qube-tools') : __('Saved', 'qube-tools')}
                    {isSaving ? <Spinner/> : ''}
                </Button>
            </CardFooter>
        </Card>
    )
}


const DemoImporterPage = () => {
    const [demoList, setDemoList] = useState({
        'agency': {
            'blog_title': "Blog",
            'categories': ['Elementor', 'Corporate & Business', 'WooCommerce'],
            'elementor_width': 1140,
            "screenshot": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/screenshot.png",
            "preview_url": "https://demo.qubethemes.com/themes/agency",
            "theme_settings": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/customizer.dat",
            "widgets_file": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/widgets.wie",
            "xml_file": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/content.xml",
            'required_plugins': {
                'free': [{
                    'init': 'elementor/elementor.php',
                    'name': 'Elementor',
                    'slug': 'elementor'
                }]
            }


        },
        'woocommerce': {
            'blog_title': "WooCommerce",
            'categories': ['Elementor', 'Corporate & Business', 'WooCommerce'],
            'elementor_width': 1140,
            "screenshot": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/screenshot.png",
            "preview_url": "https://demo.qubethemes.com/themes/woocommerce",
            "theme_settings": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/customizer.dat",
            "widgets_file": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/widgets.wie",
            "xml_file": "https://raw.githubusercontent.com/qubethemes/qube-tools-demo-data/master/vyom/agency/content.xml",
            'required_plugins': {
                'free': [{
                    'init': 'elementor/elementor.php',
                    'name': 'Elementor',
                    'slug': 'elementor'
                }]
            }


        }
    });
    return (
        <Card>
            <CardHeader style={{overflow: 'hidden', height: '70px'}}>
                <h1>{__('Theme Demo Import', 'qube-tools')}</h1>
            </CardHeader>
            <CardBody>
                <div className="theme-browser rendered">
                    <Main demos={demoList}/>
                </div>
            </CardBody>
            <CardDivider/>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    if ('undefined' !== typeof document.getElementById(qubeToolsImporterObj.root_id) && null !== document.getElementById(qubeToolsImporterObj.root_id)) {
        render(<DemoImporterPage/>, document.getElementById(qubeToolsImporterObj.root_id));
    }
});