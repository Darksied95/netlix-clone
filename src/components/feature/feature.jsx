import { Container, Title, SubTitle } from './feature.style'
const Feature = ({ children, ...restProps }) => {
    return (
        <Container {...restProps} >{children}</Container>
    )
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}
Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
export default Feature