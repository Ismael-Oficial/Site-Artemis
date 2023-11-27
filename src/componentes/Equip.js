import people from './imgs/people.jpg'

function Equip(){
    return(
        <div class="team-group">
            <div class="header">
                <h2>Nosso Time</h2>
                <p>This is your Team section. It's a great place to introduce your team and talk about what makes it
                    special, such as your culture and work philosophy. Don't be afraid to illustrate personality and
                    character to help users connect with your team.</p>
            </div>
            <div class="team-people">
                <img src={people} alt="" />
                <img src={people} alt="" />
                <img src={people} alt="" />
                <img src={people} alt="" />
            </div>
        </div>
    )
}

export default Equip