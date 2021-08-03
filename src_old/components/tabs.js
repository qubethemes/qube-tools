const {
    __
} = wp.i18n;

import {RenderFilteredTab} from "./render-tabs/filtered-tabs";

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
     return [
        {
            name: 'general',
            title: __('General', 'qube-tools'),
            className: 'general',
        },
        {
            name: 'advanced',
            title: __('Advanced', 'qube-tools'),
            className: 'advanced',
        },
    ]
}

export const RenderTab = (props) => {

    return <RenderFilteredTab tab={props.tab}/>
}
