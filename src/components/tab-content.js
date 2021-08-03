import {Demo_Item} from "./demo-item"

const {
    __
} = wp.i18n;

export const Tab_Content = (props) => {

    return (

        <div className="themes wp-clearfix">
            {Object.keys(props.demos).map(function (keyName, keyIndex) {
                return (
                    <Demo_Item slug={keyName} args={props.demos[keyName]}/>
                )
            })}
        </div>

    )
}
