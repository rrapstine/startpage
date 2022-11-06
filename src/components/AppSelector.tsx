import React from "react";
import { getAppList } from "utils/helpers";

// Get list of apps from environment variable
const apps = getAppList();

function AppSelector() {
  return (
    <>
      <div id="app-selector" className="flex flex-row gap-4">
        {/* TODO: Add app icons to assets/images/app_icons */}
        {/* TODO: Loop over apps and create an icon for each app */}
        {/* TODO: Attach an onClick listener to each icon to change the text below */}
      </div>
      <h2 className="border-b-2 border-white text-base font-medium text-white">
        Reminders
      </h2>
    </>
  );
}

export default AppSelector;
