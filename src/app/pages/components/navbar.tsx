import './navbar.css';

export default function Navbar() {
    const category = ["11","22","33"];

    return (
        <nav id="nav-bar">
            <div id="hamburger-menu">
                <div></div>
                <div></div>
                <div></div>
            </div>  
            <ul id="nav-menu">
                {category.map((el,idx) => (
                    <li key={idx}>
                        <a href="">
                            {el}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
