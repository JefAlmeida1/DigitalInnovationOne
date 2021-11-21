import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 50%;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: nome;
    padding: 4px;
    display: flex;
    matgin: 0px;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    borde-radius: 16px;
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: "#fff";
    margin: 8px;
  
    &:focus {
      outline: none;
    }
  
    &.is-selected {
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
`;
WrapperTabList.tabsRole = "Tab";

export const WrapperabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid "#ccc";
    display: none;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
`;
WrapperTabList.tabsRole = "TabPanel";