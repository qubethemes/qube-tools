import {Demo_Item} from "./demo-item"

const {
    __
} = wp.i18n;

export const Tab_Content = (props) => {
let users=[
    {
        name: "😃 William",
        location: "🏘️ Lagos",
        car: "🚘 Honda"
    },
    {
        name: "😃 Chris",
        location: "🏘️ Moon",
        car: "🚘 Tesla"
    },
    {
        name: " 😃 Rose",
        location: "🏘️ Venice",
        car: "🚘 Pagani"
    },
    {
        name: "😃 Mike",
        location: "🏘️ Milan",
        car: "🚘 Rolls Royce"
    },
    {
        name: "😃 Liz",
        location: "🏘️ Beirut",
        car: "🚘 Mercedes"
    }
]

    return (

        <div className="themes wp-clearfix">

            <h1>{(props.tab.name)} Page</h1>
            {[...Array(Object.keys(qubeToolsImporterObj.demo_categories).length)].map((x, i) =>
                <Demo_Item/>
            )}


        </div>

    )
}
