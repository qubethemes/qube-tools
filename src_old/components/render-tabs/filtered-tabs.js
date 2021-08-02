const {
    __
} = wp.i18n;

const {
    Fragment
} = wp.element;

const {
    CardBody,
    CardDivider,
    TextControl,
} = wp.components;

export const RenderFilteredTab = (props) => {
    const {
        settings,
        setSetting
    } = props;
    return (
        <h1>{props.tab.name}</h1>
    )
}
