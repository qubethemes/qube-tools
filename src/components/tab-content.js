import {Demo_Item} from "./demo-item"

const {
    __
} = wp.i18n;

export const Tab_Content = (props) => {

    const demosKeys = Object.keys(props.demos);

    if (demosKeys.length < 1) {
        return (<p>Demo not found....</p>);
    }
    return (

        <div className="themes wp-clearfix">
            {demosKeys.map(function (keyName, keyIndex) {
                return (
                    <Demo_Item slug={keyName} args={props.demos[keyName]}/>
                )
            })}
        </div>

    )
}
