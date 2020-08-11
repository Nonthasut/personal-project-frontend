
import LoginPage from '../containers/pages/LoginPage';
import WelcomePage from '../containers/pages/WelcomePage';
import EditSituationPage from '../containers/pages/EditSituationPage';
import Expenditure from '../containers/pages/Expenditure';
import Income from '../containers/pages/Income';
import IntroduceWebsite from '../containers/pages/IntroduceWebsite';
import Profile from '../containers/pages/ProfilePage';
import Register from '../containers/pages/RegisterPage';
import Target from '../containers/pages/Target';

const components = {
    login: {
        url: "/login",
        page: LoginPage
    },
    home: {
        url: "/",
        page: WelcomePage
    },
    introduceWebsite: {
        url: '/intro',
        page: IntroduceWebsite
    },
    register: {
        url: '/register',
        page: Register
    },
    editProfile: {
        url: '/edit-profile',
        page: EditSituationPage
    },
    expenditure: {
        url: '/expenditure',
        page: Expenditure
    },
    income: {
        url: '/income',
        page: Income
    },
    profile: {
        url: '/profile',
        page: Profile
    },
    target: {
        url: 'target',
        page: Target
    }
};

export default {
    guest:{ allowedRoutes:[
        components.home,
        components.introduceWebsite,
        components.login,
        components.register,
    ],
    redirectRoutes:'/login'
},
    user:{ allowedRoutes:[
        components.income,
        components.expenditure,
        components.target,
        components.profile,
        components.editProfile,
    ],
    redirectRoutes:'/profile'
}
};