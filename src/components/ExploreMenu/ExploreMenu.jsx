import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <div className="div">
            <h1>Explore nosso cardápio</h1>
            <p className="explore-menu-text">Escolha entre um menu diversificado com uma deliciosa variedade de pratos. Nossa missão é satisfazer seus desejos e elevar sua experiência gastronômica, uma refeição deliciosa de cada vez.</p>
            </div>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                            <h3>{item.menu_name}</h3>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
