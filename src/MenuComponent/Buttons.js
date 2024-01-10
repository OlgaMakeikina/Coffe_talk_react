
function Buttons({items, setGoods}) {

    const filteredGoods = searchTerm => {
    const filteredResult = [];
    items.forEach( item => {
        item.searchTerm.forEach(term => { 
             if (term === searchTerm) {
            filteredResult.push(item);
            setGoods(filteredResult);
        }
    })   
        })
    }
    
        return (<div className="cont">
    <button className="change" onClick = {() => setGoods(items)}>All</button> 
    <button className="change" onClick={() => filteredGoods("season")}>Seasonal <sup>NEW!!!</sup></button>
    <button className="change" onClick = {() => filteredGoods("popular")}>Popular</button>
    <button className="change" onClick = {() => filteredGoods("coffee")}>Coffee</button>
    <button className="change" onClick= {() => filteredGoods ("bakery")}>Bakery</button>
    <button className="change" onClick={() => filteredGoods("ice")}>Ice drinks</button>
    <button className="change" onClick ={() => filteredGoods("other")}>Other</button>
    </div>   
        )
    }
    
    export default Buttons;