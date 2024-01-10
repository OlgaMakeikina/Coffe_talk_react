import TabItem from "./TabItem";

const Tabs = ({setActiveTab}) => {
    return (<div className="tabs">
        {
['Happy Hours!', '5% Discount!', 'Free coffee!'].map((tab, index) => (
<TabItem
key = {index}
tab = {tab}
index = {index}
setActiveTab={setActiveTab}
/>
))
}
    </div>)
}
export default Tabs;