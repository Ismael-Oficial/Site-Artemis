import ampulheta from './imgs/ampulheta.png'

function services(){
    return(
        <div class="services">
            <h2>Services</h2>
            <div>
                <p>Provide a general description of the items below and introduce the services you offer. Click on the
                    text box to edit the content.</p>
                <div class="services-icons">
                    <div>
                        <img src={ampulheta} alt=""/>
                        <h3>Service Name</h3>
                        <p>Describe one of your services</p>
                    </div>
                    <div>
                        <img src={ampulheta} alt=""/>
                        <h3>Service Name</h3>
                        <p>Describe one of your services</p>
                    </div>
                    <div>
                        <img src={ampulheta} alt=""/>
                        <h3>Service Name</h3>
                        <p>Describe one of your services</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default services