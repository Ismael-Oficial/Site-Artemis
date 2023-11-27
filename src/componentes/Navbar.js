import Logo from './imgs/Logo.jpg'

function Navbar(){
    return(
        <div class="navbar">
            <img src={Logo} alt="Logo da Artemis Company"/>
            <a href="#">Pagina Inicial</a>
            <a href="#">Blog</a>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <form class="example" action="action_page.php">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>
    )
}

export default Navbar