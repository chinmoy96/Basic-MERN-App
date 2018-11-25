import Login from './../views/Login/Login';
import Register from './../views/SignUp/SignUp';
import Home from './../views/Home/Home';
const paths=[
    {
        path:'/',
        component:Register
    },
    {
        path:'/Home',
        component:Home
    },
    {
        path:'/Login',
        component:Login
    }
];

export default paths;
