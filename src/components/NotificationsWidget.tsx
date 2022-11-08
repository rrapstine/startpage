import { useLayoutEffect, useState } from "react";
import ErrorBoundary from "components/ErrorBoundary";
import AppSelector from "./AppSelector";
import { getAppList, toTitleCase } from "utils/helpers";

function NotificationsWidget() {
  const appList = getAppList();
  const [selectedApp, setSelectedApp] = useState(appList[0].toLowerCase());

  // Apply active class to selected app icon
  useLayoutEffect(() => {
    const appIcons = document.querySelectorAll("[data-app] > svg");
    appIcons.forEach((icon) => {
      // @ts-ignore
      if (icon.parentElement.getAttribute("data-app") === selectedApp) {
        // @ts-ignore
        icon.classList.add("active");
      } else {
        // @ts-ignore
        icon.classList.remove("active");
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
