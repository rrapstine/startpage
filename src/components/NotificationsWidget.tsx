import { useEffect, useState } from "react";
import ErrorBoundary from "components/ErrorBoundary";
import AppSelector from "./AppSelector";
import { getAppList, toTitleCase } from "utils/helpers";

function NotificationsWidget() {
  // Get list of apps from environment variable
  const appList = getAppList();

  const [selectedApp, setSelectedApp] = useState("");

  useEffect(() => {
    const appIcons = document.querySelectorAll("[data-app] > svg");
    appIcons.forEach((icon) => {
      // @ts-ignore
      if (icon.parentElement.getAttribute("data-app") === selectedApp) {
        // @ts-ignore
        icon.firstChild.setAttribute("fill", "white");
      } else {
        // @ts-ignore
        icon.firstChild.setAttribute("fill", "#BBBBBB");
      }
    });
  }, [selectedApp]);

  return (
    <div data-widget="notifications">
      <ErrorBoundary>
        <AppSelector apps={appList} setSelectedApp={setSelectedApp} />
        <h2
          id="app-heading"
          className="border-b-2 border-white text-base font-medium text-white"
        >
          {toTitleCase(selectedApp)}
        </h2>
        <div id="notifications-container">{/* Notifications go here */}</div>
      </ErrorBoundary>
    </div>
  );
}

export default NotificationsWidget;
