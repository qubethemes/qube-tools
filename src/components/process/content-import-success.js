const {
    __
} = wp.i18n;

export const Content_Import_Success = (props) => {

    return (<div className="qube-tools-import-success">
            <h2 style={
                {
                    fontSize: '45px',
                    textAlign: 'center'
                }
            }
            >
                <img draggable="false" role="img" className="emoji" alt="🎉"
                     src="https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"/>
                <img draggable="false" role="img" className="emoji" alt="🎉"
                     src="https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"/> Congratulations
                <img
                    draggable="false" role="img" className="emoji" alt="🎉"
                    src="https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"/>
                <img draggable="false" role="img" className="emoji" alt="🎉"
                     src="https://s.w.org/images/core/emoji/13.1.0/svg/1f389.svg"/></h2>

            <h3 style={
                {
                    textAlign: 'center',
                    marginBottom: '50px'
                }
            }>Successfully Demo Imported!</h3>

        </div>
    )
}
