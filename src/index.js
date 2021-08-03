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
    useState,
    useEffect
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
    const [demoList, setDemoList] = useState({});
    const [activeTab, setActiveTab] = useState('');

    const tabSelect = (currentTab) => {

        setActiveTab(currentTab);

    }

    const getCategoryWiseDemoList = () => {

        var categoryWiseDemoList = {};

        var all_demos = qubeToolsImporterObj.all_demos;

        for (const [demo_item_key, demo_configs] of Object.entries(all_demos)) {

            var categories = typeof demo_configs.categories !== "undefined" ? demo_configs.categories : {};

            for (const [cat_key, category] of Object.entries(categories)) {

                if (typeof categoryWiseDemoList[cat_key] == "undefined") {

                    categoryWiseDemoList[cat_key] = [];
                }


                categoryWiseDemoList[cat_key].push(demo_item_key);
            }
        }

        return categoryWiseDemoList;
    }

    const initAllDemoLists = (category) => {


        var categoryWiseDemoIndexList = getCategoryWiseDemoList();

        var all_demos = qubeToolsImporterObj.all_demos;

        var categoryWiseFullDemoDataLists = {};

        if (categoryWiseDemoIndexList === '') {

            setDemoList({});

            return;
        }


        categoryWiseDemoIndexList[category].map((demo_item_key) =>
            categoryWiseFullDemoDataLists[demo_item_key] = all_demos[demo_item_key]
        );


        setDemoList(categoryWiseFullDemoDataLists);


    }


    useEffect(() => {
        var active_tab = activeTab === '' ? 'elementor' : activeTab;
        initAllDemoLists(active_tab);
        console.log(activeTab);
    }, [activeTab]);
    return (
        <Card>
            <CardHeader style={{overflow: 'hidden', height: '70px'}}>
                <h1>{__('Theme Demo Import', 'qube-tools')}</h1>
            </CardHeader>
            <CardBody>
                <div className="theme-browser rendered">
                    <Main demos={demoList} tabSelect={tabSelect}/>
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