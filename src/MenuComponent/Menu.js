import { useState } from 'react';
import Goods from './Goods';
import Buttons from './Buttons';
import { items } from './items';
import './menu.css';

function Shop() { 
const [goods, setGoods] = useState(items);



return (<div>
  <div className="cont">
    <h2>OUR MENU</h2>
  </div>
  <Buttons 
  items={items}
  setGoods={setGoods}
  /> 
<Goods goods={goods}/>
</div>
)
 }

export default Shop;