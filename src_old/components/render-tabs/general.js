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

export const RenderGeneral = (props) => {
	const {
		settings,
		setSetting
	} = props.props;

	return (
		<Fragment>
			<CardBody>
				<TextControl
					label={__('Setting 1','qube-tools')}
					placeholder={__('Enter Text','qube-tools')}
					value={settings && settings['setting_1']}
					onChange={newVal =>
						setSetting('setting_1',newVal)
					}
				/>
			</CardBody>
			<CardDivider />
			<CardBody
				isShady
			>
				<TextControl
					label={__('Setting 2','qube-tools')}
					placeholder={__('Enter Another Text','qube-tools')}
					value={settings && settings['setting_2']}
					onChange={newVal =>
						setSetting('setting_2',newVal)
					}
				/>
			</CardBody>
			<CardDivider />
		</Fragment>
	)
}
