import banner from './imgs/banner1.jpg'

function Portifolio(){
    return(
        <div class="portifolio">
            <h2>Portifolio</h2>
            <div class="portifolio-v2">
                <div class="left">
                    <img src={banner} alt="" />
                </div>
                <div class="center">
                    <img src={banner} alt="" />
                </div>
                <div class="right">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Portifolio