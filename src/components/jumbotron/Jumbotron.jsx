import { Inner, Container, Pane, Title, SubTitle, Image, Item } from "./jumbotron.styles"
import PropTypes from 'prop-types'

const Jumbotron = ({ children, direction = 'row', ...restProps }) => {
    return (
        <Item {...restProps}>
            <Inner direction={direction} >
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = function JumbotronSubTitle({ ...restProps }) {
    return <Image {...restProps} />
}

export default Jumbotron


Jumbotron.propTypes = {
    direction: PropTypes.string,
    children: PropTypes.node.isRequired,
    restProps: PropTypes.array
}
Jumbotron.Pane.propTypes = {
    children: PropTypes.node.isRequired,
    restProps: PropTypes.array
}
Jumbotron.Image.propTypes = {
    children: PropTypes.node.isRequired,
    restProps: PropTypes.array
}
Jumbotron.Title.propTypes = {
    children: PropTypes.node.isRequired,
    restProps: PropTypes.array
}
Jumbotron.SubTitle.propTypes = {
    children: PropTypes.node.isRequired,
    restProps: PropTypes.array
}
Jumbotron.Container.propTypes = {
    children: PropTypes.node.isRequired,
    restProps: PropTypes.array
}