import StartPage from '../components/StartPage/StartPage';
import SignUp from '../components/SignUpPage/SignUp';
import SignIn from '../components/SignInPage/SignIn';
import SignInWrong from '../components/SignInPage/SignInWrong';
import UserProfile from '../components/UserProfilePage/UserProfile';
import Data from '../components/DataPage/Data';

export const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/registration',
        component: SignUp
    },
    {
        path: '/userprofile',
        component: UserProfile
    },
    {
        path: '/data',
        component: Data
    },
    {
        path: '/login',
        component: SignIn
    },
    {
        path: '/wronglogin',
        component: SignInWrong
    }
]