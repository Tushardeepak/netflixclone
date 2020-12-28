import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDevice from "./tabs/TabDevice";
import TabDoor from "./tabs/TabDoor";
import TabPrice from "./tabs/TabPrice";
import "./style.css";
import { useState } from "react";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";

function TabComponents() {
  const [selectTabs, setSelectTabs] = useState(0);
  return (
    <div>
      <Tabs className="tabs">
        <TabList className="tabsNavContainer">
          <Tab
            className={selectTabs === 0 ? "activeIconTab" : "nullBorder"}
            onClick={() => setSelectTabs(0)}
          >
            <TabDoor />
            <p className="hideMdScreen" style={{ marginBottom: "1.875rem" }}>
              <strong>
                No commitments
                <br />
                Cancel online at anytime
              </strong>
            </p>
            <p className="mdScreenText">Cancel</p>
          </Tab>
          <Tab
            className={selectTabs === 1 ? "activeIconTab " : "nullBorder "}
            onClick={() => setSelectTabs(1)}
          >
            <TabDevice />
            <p
              className="hideMdScreen"
              style={{ marginTop: "-5.3125rem", marginBottom: "1.875rem" }}
            >
              <strong>Watch anywhere</strong>
            </p>
            <p className="mdScreenText">Watch</p>
          </Tab>
          <Tab
            className={selectTabs === 2 ? "activeIconTab" : "nullBorder"}
            onClick={() => setSelectTabs(2)}
          >
            <TabPrice />
            <p className="hideMdScreen" style={{ marginBottom: "1.875rem" }}>
              <strong>Pick your price</strong>
            </p>
            <p className="mdScreenText">Price</p>
          </Tab>
        </TabList>
        <TabPanel>
          <TabContentOne />
        </TabPanel>
        <TabPanel>
          <TabContentTwo />
        </TabPanel>
        <TabPanel>
          <TabContentThree />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabComponents;
