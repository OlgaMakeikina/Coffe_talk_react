import {useState} from 'react';
import TabInfoOne from './TabInfoOne.js';
import TabInfoTwo from './TabInfoTwo';
import TabInfoThree from './TabInfoThree';
import Tabs from './Tabs';

function TabsContent() {  
     const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
        <h2>Special Offers</h2>
<Tabs setActiveTab = {setActiveTab}/>
{activeTab === 0 && <TabInfoOne/>}
{activeTab === 1 && <TabInfoTwo/>}
{activeTab === 2 && <TabInfoThree/>}
    </div>
  );
}

export default TabsContent;