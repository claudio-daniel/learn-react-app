import PropTypes from 'prop-types'

const messages = {
    "title": "My first component with react",
    "subtitule": "Test with variables and functions"
}


function getTitle() {
    return messages.title
}

export const FirstComponent = ({ titleFromProps }) => {
    return (
        <>
            <h1>{getTitle()}</h1>
            <h1>Cambie aca recien {titleFromProps}</h1>
            <h2>{messages.subtitule}</h2>
        </>

    )
}



FirstComponent.propTypes = {
    titleFromProps: PropTypes.string.isRequired 
}

FirstComponent.defaultProps = {
    titleFromProps: "Not title defined"
}