const {
	__
} = wp.i18n;

const {
	Fragment
} = wp.element;

const {
	CardBody,
	CardDivider,
	BaseControl,
	ToggleControl,
	SelectControl
} = wp.components;

export const RenderAdvanced = (props) => {
	const {
		settings,
		setSetting
	} = props.props;
	return (
		<Fragment>
			<CardBody>
				<BaseControl
					label={__('Setting 3 Toggle','qube-tools') }
				>
					<ToggleControl
						label={ __('Check to enable','qube-tools')  }
						checked={ (settings && settings['setting_3'])}
						onChange={ () => {
							setSetting('setting_3', !(settings && settings['setting_3']))
						} }
					/>
				</BaseControl>
			</CardBody>
			<CardDivider />
			<CardBody
				isShady
			>
				<BaseControl
					label={__('Setting 4 Toggle','qube-tools') }
				>
					<ToggleControl
						label={ __('Check to enable','qube-tools')  }
						checked={ (settings && settings['setting_4'])}
						onChange={ () => {
							setSetting('setting_4', !(settings && settings['setting_4']))
						} }
					/>
				</BaseControl>
			</CardBody>
			<CardDivider />

			<CardBody>
				<SelectControl
					label={ __('Setting 5 Select','qube-tools')  }
					value={settings && settings['setting_5']}
					options={[
						{
							label: __('Option 1','qube-tools'),
							value: 'option-1'
						},
						{
							label: __('Option 2','qube-tools'),
							value: 'option-2'
						},
					]}
					onChange={newVal =>
						setSetting('setting_5',newVal)
					}
				/>
			</CardBody>
			<CardDivider />
		</Fragment>
	)
}
