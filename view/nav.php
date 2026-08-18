<nav class="sidebar">
    <div class="sidebarTop">
        <div class="themeBtnDiv" id="btnToggleTheme">
            <label class="switch">
                <input type="checkbox" id="themeToggle" onchange="toggleTheme()" />
                <span class="btnTheme"></span>
                <img class="lightThemeSymbol" src="../img/sun.png" alt="Light">
                <img class="darkThemeSymbol" src="../img/moon.png" alt="Dark">
                <link rel="stylesheet" href="../style/toggleTheme.css">
            </label>
        </div>
        <p class="nameApp">
            <span class="nexus">Nexus</span>
            <span class="sirh">SIRH</span>
        </p>
        <p class="accName">Compte de: LGO</p>
        <p class="accRole">Rôle: Admin</p>
    </div>
    <ul class="sidebarMenu sidenav">
        <li class="linkSidebar active"><a href="mainboard.php">Link 1</a></li>
        <li class="linkSidebar"><a href="#">Link 2</a></li>
        <li class="linkSidebar"><a href="ticket.php">Link 3</a></li>
    </ul>
</nav>