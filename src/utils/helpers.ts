/**
 * Function to retrieve the list of apps from the environment variable VITE_APPS
 * @returns {string[]} - An array of strings representing the list of apps
 */
export function getAppList() {
  // Return the list of apps from the environment variable VITE_APPS
  const appList: string[] = import.meta.env.VITE_APPS.split(",");
  return appList;
}

/**
 * Function to convert a string to Title Case
 * @param str - The string to be converted
 * @returns - The string in Title Case
 */
export function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

/**
 * Function to determine whether given svg uses stroke or fill, then change it to given color
 * @param svgElement - svg element to change color
 * @param color - color to change to
 * @returns - svg element with changed color
 */
export function changeSvgColor(svgElement: SVGElement, color: string) {
  const svg = svgElement.cloneNode(true) as SVGElement;
  const paths = svg.getElementsByTagName("path");

  for (let i = 0; i < paths.length; i++) {
    if (
      paths[i].getAttribute("stroke") &&
      paths[i].getAttribute("stroke") !== "none"
    ) {
      paths[i].setAttribute("stroke", color);
    } else {
      paths[i].setAttribute("fill", color);
    }
  }
  return svg;
}
