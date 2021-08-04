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
const {
    apiFetch
} = wp;

const {

    Card,
    CardHeader,
    CardBody,
    CardDivider,
    CardFooter,

} = wp.components;

import {Popup} from "./components/process/popup";

const DemoImporterPage = () => {
    const [demoList, setDemoList] = useState({});
    const [activeTab, setActiveTab] = useState('');
    const [selectedDemo, setSelectedDemo] = useState('');
    const [selectedDemoPluginDetails, setSelectedDemoPluginDetails] = useState({});

    async function getSelectedDemoPluginConfigs() {
        let data = await apiFetch({
            path: qubeToolsImporterObj.rest.namespace + qubeToolsImporterObj.rest.version + '/get_selected_demo_plugin_config',
            data: {
                selected_demo: selectedDemo
            }
        });
        if (data) {
            setSelectedDemoPluginDetails(data);
        } else {
            setSelectedDemoPluginDetails({});
        }
    }

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

    const getSelectedDemoConfig = () => {

        var all_demos = qubeToolsImporterObj.all_demos;

        return typeof all_demos[selectedDemo] != "undefined" ? all_demos[selectedDemo] : {};
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
                    <Main demos={demoList} tabSelect={tabSelect} setSelectedDemo={setSelectedDemo}/>
                </div>
            </CardBody>
            <CardDivider/>
            <CardFooter>

                <Popup selectedDemo={selectedDemo} setSelectedDemo={setSelectedDemo} selectedDemoConfig={() => {
                    return getSelectedDemoConfig()
                }}
                />
            </CardFooter>
        </Card>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    if ('undefined' !== typeof document.getElementById(qubeToolsImporterObj.root_id) && null !== document.getElementById(qubeToolsImporterObj.root_id)) {
        render(<DemoImporterPage/>, document.getElementById(qubeToolsImporterObj.root_id));
    }
});