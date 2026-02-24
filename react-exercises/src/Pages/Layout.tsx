import {Link, Outlet} from "react-router-dom";

function Layout() {
    return (
        <div>
            <header>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">À propos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <p>Footer go</p>
            </footer>

        </div>
    );
}
export default Layout;