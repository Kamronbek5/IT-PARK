import useAuthentication from "./hooks/useAuth";
import AdminPage from "./pages/Admin";
import LoginPage from "./pages/login";

const Auth = ({onTrue}) => {
    const { isLoggedIn } = useAuthentication();
    return isLoggedIn ? (
        <div>
            <AdminPage onTrue={onTrue}/>
        </div>
    ) : (
        <LoginPage />
    );
};

export default Auth;