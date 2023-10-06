import { Inner, Container } from "./styles/jumbotron.styles"
import PropTypes from 'prop-types'

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
    return (
        <Inner direction={direction}>
            {children}
        </Inner>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

export default Jumbotron


Jumbotron.propTypes = {
    direction: PropTypes.string,
    children: PropTypes.node.isRequired,
    restProps: PropTypes.array
}
Jumbotron.Container.propTypes = {
    children: PropTypes.node.isRequired,
    restProps: PropTypes.array
}