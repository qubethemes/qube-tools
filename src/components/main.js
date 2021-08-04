import {Tab_Content} from "./tab-content";

const {
    TabPanel,

} = wp.components;

const {
    __
} = wp.i18n;

export const GetTab = () => {

    let all_tabs = qubeToolsImporterObj.demo_categories;
    let updated_all_tabs = [];
    for (const [key, title] of Object.entries(all_tabs)) {
        updated_all_tabs.push({
            name: key,
            title: title,
            className: key
        });
    }
    return updated_all_tabs;
}

export const Main = (props) => {

    return (
        <TabPanel
            className="qube-tools-header-bar"
            activeClass="qube-tools-tab-active"
            tabs={GetTab()}
            onSelect={(selectedTab) => {
                props.tabSelect(selectedTab)
            }}
            initialTabName="elementor"
        >
            {(tab) => <Tab_Content tab={tab} demos={props.demos} setSelectedDemo={props.setSelectedDemo}/>}
        </TabPanel>

    )
}
