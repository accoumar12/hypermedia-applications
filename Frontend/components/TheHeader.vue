<!--
    Header of the page
-->
<template>
    <header>
        <h1><img class="logo" src="~/assets/img/logo-witho-bck-slog.png"></h1>
        <nav>
            <span class="nav-link">About Us</span>
            <span class="nav-link">Our Team</span>
            <span class="nav-link">Investments</span>
            <span class="nav-link">News</span>
            <span class="nav-link">Get In Touch</span>
        </nav>
    </header>
</template>
  
<style>
header {
    background-color: white;
}

header {
    height: 3em;
    padding: 0.5em 0.5%;
    margin-bottom: 0.5em;
    border-bottom: 0.2em solid;
    border-image: linear-gradient(to right, rgb(91, 199, 204), rgb(9, 91, 119)) 1;

    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    display: flex;
    gap: 3em;
    font-size: 1.2rem;
    text-decoration: rgb(25, 129, 129);
    align-items: center;
    flex-grow: 1;
}

.nav-link {
    font-family: monospace;
    font-weight: bold;
    color: rgb(13, 84, 84);
    cursor: pointer;
    text-align: center;
    padding: 0.5em;
}

.logo {
    vertical-align: middle;
    max-width: 16%;
    max-height: 25%;
    height: auto;
    width: auto;
    margin: auto;
    padding-left: 5%;
    ;
}

@media (max-width: 768px) {
    .nav-link {
        font-size: 1rem;
        padding: 0.3em;
    }

    .logo {
        max-width: 30%;
        max-height: 20%;
    }
}
</style>