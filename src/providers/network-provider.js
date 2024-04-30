import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import NetworkError from "components/network-error";

function NetworkProvider({ children }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) return children;

  return <NetworkError />;
}

NetworkProvider.propTypes = {
  children: PropTypes.node,
};

export default NetworkProvider;
