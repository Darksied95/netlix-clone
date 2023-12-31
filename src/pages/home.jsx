import { FaqsContainer, FooterContainer, JumbotronContainer, HeaderContainer } from '../containers'
import { OptForm, Feature } from '../components'

const Home = () => {
    return (
        <>
            <HeaderContainer >
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
                    <Feature.SubTitle>Watch anywhere, Cancel at any time</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder='Email address' />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your memebership
                        </OptForm.Text>
                    </OptForm>
                </Feature>

            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    )
}

export default Home