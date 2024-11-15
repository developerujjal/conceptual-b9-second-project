import { useContext } from "react";
import { AuthContext } from "../../AuthProivder/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const SignUp = () => {

    const { createUser, updatedUserProfile } = useContext(AuthContext)

    const handleSingUp = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURL = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const password2 = form.get('cpassword')

        if (password !== password2) {
            return console.log("Please match your Password")
        }


        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user)
                updatedUserProfile(user, name, photoURL)
                    .then(() => {
                        console.log('Profile updated!')
                    })
                    .catch(error => {
                        console.error(error)
                    })
                    
                return signOut(auth)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="flex flex-col justify-center font-[sans-serif] p-4 min-h-[calc(100vh-72px)]">
            <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
                <div className="text-center mb-12">
                    <a><img
                        src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-40 inline-block' />
                    </a>
                </div>

                <form onSubmit={handleSingUp}>
                    <div className="space-y-6">
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Full Name</label>
                            <input name="name" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Photo URL</label>
                            <input name="photo" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                            <input name="email" type="email" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <input name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                            <input name="cpassword" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
                        </div>

                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                                I accept the <a href="" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                            </label>
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                            Create an account
                        </button>
                    </div>
                    <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="" className="text-blue-600 font-semibold hover:underline ml-1">Login here</a></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;