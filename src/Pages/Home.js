import React from "react";
import "./Home.css";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import Calculator from "./../Component/Calculator"
import Background from "./../Component/Background"

function Home() {
    return (
        <div className="home">
            <Background />
            <div className="home__container">
                <Tabs defaultTab="basic-tab-one" className="rwt__tabs">
                    <TabList className="rwt__tablist home__container__tabHeader" >
                        <Tab tabFor="basic-tab-one" className="home__container__calculatorTab rwt__tab">Calculator</Tab>
                    </TabList>
                    <TabPanel tabId="basic-tab-one" className="home__container__calculator rwt__tabpanel">
                        <div className="home__container__panel">
                            <Calculator />
                        </div>
                    </TabPanel>


                </Tabs>
            </div>
        </div>
    );
}

export default Home;