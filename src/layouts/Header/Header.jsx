import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";


const Header = () => {

    const { user, userLogOut, loading } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const handleLogOut = () => {
        userLogOut()
            .then(() => {
                console.log('Sign-out successful')
                setIsMenuOpen(false)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <header className='flex py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
                <a href=""><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                </a>

                <div id="collapseMenu"
                    className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>

                    <ul
                        className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        <li className='mb-6 hidden max-lg:block'>
                            <a><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                            </a>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <NavLink to={'/'}
                                className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</NavLink>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><NavLink
                            to={'/products'}
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Products</NavLink>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><NavLink
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Feature</NavLink>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><NavLink
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Blog</NavLink>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><NavLink
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</NavLink>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><NavLink
                            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='flex max-lg:ml-auto space-x-3'>

                    {loading ? (
                        // Show loading indicator when loading
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 animate-spin fill-blue-600 block mx-auto"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                                    data-original="#000000" />
                            </svg>
                        </div>
                    )
                        : user ? (
                            <>

                                <div className="relative font-[sans-serif] w-max mx-auto">
                                    <button
                                        type="button"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)} // Attach click handler to toggle dropdown
                                        className="px-4 py-2 flex items-center rounded-full text-[#333] text-sm border border-gray-300 outline-none hover:bg-gray-100"
                                    >
                                        <img
                                            src="https://readymadeui.com/profile_6.webp"
                                            className="w-7 h-7 mr-3 rounded-full shrink-0"
                                            alt="Profile"
                                        />
                                        John Doe
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-3 fill-gray-400 inline ml-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                clipRule="evenodd"
                                                data-original="#000000"
                                            />
                                        </svg>
                                    </button>

                                    {/* Dropdown menu, conditionally rendered based on state */}
                                    <ul
                                        className={`absolute ${isMenuOpen ? 'block' : 'hidden'} shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded-lg max-h-96 overflow-auto`}
                                    >
                                        <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="w-4 h-4 mr-3"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z" data-original="#000000" />
                                            </svg>
                                            View profile
                                        </li>
                                        <li className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="w-4 h-4 mr-3"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0" data-original="#000000" />
                                            </svg>
                                            Dashboard
                                        </li>
                                        <li
                                            onClick={handleLogOut}
                                            className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                className="w-4 h-4 mr-3"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M7.5 1.5C4.462 1.5 2 3.962 2 7s2.462 5.5 5.5 5.5S13 10.038 13 7s-2.462-5.5-5.5-5.5zm0 9C5.019 10.5 3 8.481 3 6s2.019-4.5 4.5-4.5S12 3.519 12 6s-2.019 4.5-4.5 4.5zm.5-3H6v1h2V6H7zm0-2H6v1h1V4z" />
                                            </svg>
                                            Logout
                                        </li>
                                    </ul>
                                </div>

                            </>) : (
                            <>
                                <Link
                                    to={'/login'}
                                    className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Login</Link>
                                <Link
                                    to={'/signup'}
                                    className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Sign
                                    up</Link>
                            </>
                        )}



                    <button id="toggleOpen" className='lg:hidden'>
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;