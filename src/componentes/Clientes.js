import Logo1 from './imgs/Logo1.jpg'
import Logo2 from './imgs/Logo2.jpg'
import Logo3 from './imgs/Logo3.jpg'
import Logo4 from './imgs/Logo4.jpg'
import Logo5 from './imgs/Logo5.jpg'

function Clientes() {
    return (
        <div class="clients">
            <h2>Nossos Clientes</h2>
            <div class="logos">
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
            </div>
        </div>
    )
}

export default Clientes