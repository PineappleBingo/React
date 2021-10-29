import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <Header>
            <h1>{title}</h1>
        </Header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS : {headingStyle}
// const headingStyle = {
//     color = 'red',
//     backgroundColor = 'black',
// }


export default Header
