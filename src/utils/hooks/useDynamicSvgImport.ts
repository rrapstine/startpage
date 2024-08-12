import { useEffect, useRef, useState } from "react";

/**
 * Custom React hook for dynamically importing SVG components.
 *
 * @param {string} iconName - The name of the SVG icon to import.
 * @returns {Object} An object containing the error, loading state, and the imported SVG component.
 */
export function useDynamicSvgImport(iconName: string) {
  const importedIconRef = useRef<React.FC<
    React.SVGProps<SVGSVGElement>
  > | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);

    // Dynamically import the SVG passed in as a prop
    async function importSvgIcon() {
      try {
        importedIconRef.current = (
          await import(`../../assets/images/app_icons/app_icon_${iconName}.svg`)
        ).ReactComponent;
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    importSvgIcon();
  }, [iconName]);

  return { error, loading, Icon: importedIconRef.current };
}
