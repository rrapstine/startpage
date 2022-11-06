export function getAppList() {
  // Return the list of apps from the environment variable VITE_APPS
  const appList: String[] = import.meta.env.VITE_APPS.split(",");
  return appList;
}
