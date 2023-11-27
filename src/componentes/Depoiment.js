import Depoimento1 from './imgs/Depoimento1.JPG'
import Depoimento2 from './imgs/Depoimento2.JPG'
import Depoimento3 from './imgs/Depoimento3.JPG'

function Depoiment() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.carousel-slide');

    let counter = 0;
    const slideWidth = slides[0].clientWidth;

    nextBtn.addEventListener('click', () => {
        if (counter < slides.length - 1) {
            counter++;
            carouselWrapper.style.transform = `translateX(-${counter * slideWidth}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            carouselWrapper.style.transform = `translateX(-${counter * slideWidth}px)`;
        }
    });

    return (
        <div class="depoiment">
            <div class="carousel-container">
                <div class="carousel-wrapper">
                    <div class="carousel-slide">
                        <img src={Depoimento1} alt="Imagem 1" />
                    </div>
                    <div class="carousel-slide">
                        <img src={Depoimento2} alt="Imagem 2" />
                    </div>
                    <div class="carousel-slide">
                        <img src={Depoimento3} alt="Imagem 3" />
                    </div>
                </div>
                <button id="prevBtn">←</button>
                <button id="nextBtn">→</button>
            </div>
        </div>
    )
}

export default Depoiment