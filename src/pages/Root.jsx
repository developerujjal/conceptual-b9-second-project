import { Outlet } from "react-router-dom";
import Header from "../layouts/Header/Header.jsx";


const Root = () => {
    return (
        <main>
            <Header />
            <div>
                <section>
                    <Outlet></Outlet>
                </section>
            </div>
        </main>
    );
};

export default Root;