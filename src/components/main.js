import {Demo_Item} from "./demo-item";

const {
    TabPanel,

} = wp.components;

const {
    __
} = wp.i18n;

export const GetTab = () => {

    let all_tabs = qubeToolsImporterObj.demo_categories;
    let updated_all_tabs = [];
    console.log(all_tabs);
    for (const [key, title] of Object.entries(all_tabs)) {
        updated_all_tabs.push({
            name: key,
            title: title,
            className: key
        });
    }
    return updated_all_tabs;
}

export const RenderTab = (props) => {

    return (<Demo_Item tab={props.tab}/>)
}

export const Main = (props) => {

    return (
        <TabPanel
            className="qube-tools-header-bar"
            activeClass="wp-react-plugin-boilerplate-tab-active"
            tabs={GetTab()}
        >
            {(tab) => <RenderTab tab={tab}/>}
        </TabPanel>

    )
}
