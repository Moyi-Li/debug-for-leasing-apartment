export function Header (){
    return (
        <header>
            <div className="topnav" id="myTopnav">
                <h2 className="project-name">Dubs Housing</h2>
                <img src="../public/img/dubslogo.png" alt="washington husky" />
                <button class="menu-toggle" onclick="toggleMenu()">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
                <a href=" ">Home</a >
                <a href="map.html">Location</a >
                <a href="saved.html">Profile</a >
            </div>
        </header>
    );
}

export function Footer (){
    return (
        <footer>
            <p>&copy; 2024 DubsHousing, Inc.</p>
        </footer>
    );
}