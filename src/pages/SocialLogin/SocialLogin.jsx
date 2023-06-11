import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SocialLogin = () => {

    const {googleSignin} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="my-4 flex items-center justify-center">
                <button onClick={handleGoogleSignIn} className="btn btn-square btn-circle ">
                    <FaGoogle className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;