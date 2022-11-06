import React from "react";
import ErrorBoundary from "components/ErrorBoundary";

interface Props {
  children?: React.ReactNode;
}

function NotificationsWidget(props: Props) {
  return (
    <div data-widget="notifications">
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  );
}

export default NotificationsWidget;
