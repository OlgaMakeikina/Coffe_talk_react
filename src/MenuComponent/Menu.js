import { useState } from 'react';
import Goods from './Goods';
import Buttons from './Buttons/Buttons';
import { items } from './items';
import './menu.css';


function Menu() { 
const [goods, setGoods] = useState(items);

return (

  <div>
  <div className="cont">
    <h2 className='header'>OUR MENU</h2>
  </div>
  <Buttons 
  items={items}
  setGoods={setGoods}
  /> 
<Goods goods={goods}/>
</div>

  );
}

export default Menu;