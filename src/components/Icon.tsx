import React from "react";
import { useDynamicSvgImport } from "utils/hooks/useDynamicSvgImport";

interface Props {
  name: string;
  onClick: () => void;
}

function Icon({ name, onClick }: Props) {
  const { loading, Icon } = useDynamicSvgImport(name);

  return (
    <>
      {loading && (
        <div className="h-6 w-6 animate-pulse rounded-full bg-gray" />
      )}
      {Icon && (
        <button className="h-6 w-6" data-app={name} onClick={onClick}>
          <Icon className="h-full w-full hover:fill-white" />
        </button>
      )}
    </>
  );
}

export default Icon;
