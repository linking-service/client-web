import React, { useState, useEffect } from "react";

import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/sidebar/Sidebar";
import LinkList from "../../components/link-list/LinkList";
import { MainContext } from "../../MyContext";

import "./main.scss";

const Main = ({ match }) => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);
  const [linkData, setLinkData] = useState([]);
  const [copiedLink, setCopiedLink] = useState("");
  const [lastDirId, setLastDirId] = useState(localStorage.getItem("dirId"));

  const toggleSidebar = isVisibleSidebar => {
    setIsVisibleSidebar(isVisibleSidebar);
  };

  const setLinkDataList = linkData => {
    setLinkData(linkData);
  };

  useEffect(() => {
    const lastLinkData = JSON.parse(localStorage.getItem("lastLinkData"));
    setLinkData(lastLinkData ? lastLinkData : []);
    readFromClipboard();
  }, []);

  const readFromClipboard = () => {
    // window.navigator.clipboard.readText().then(link => {
    //   console.log(link);
    //   setCopiedLink(link);
    // });
  };

  return (
    <div className="main">
      <MainContext.Provider
        value={{
          isVisibleSidebar,
          toggleSidebar,
          linkData,
          setLinkDataList,
          copiedLink,
          lastDirId
        }}
      >
        <Sidebar />
        <Layout className="contents">
          <LinkList className="link-list" />
        </Layout>
      </MainContext.Provider>
    </div>
  );
};

export default Main;
