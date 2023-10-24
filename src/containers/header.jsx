import { Header } from "../components"
import * as Routes from '../constants/routes'

const HeaderContainer = ({ children }) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={Routes.HOME} src={'/images/icons/logo.svg'} alt='Netflix' />
                <Header.ButtonLink to={Routes.SIGN_IN}>Sign in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer