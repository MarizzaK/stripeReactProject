// src/components/AnalyticsTracker.tsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GoogleAnalytics from "react-ga";

const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    GoogleAnalytics.initialize("G-4Q1YWR9BCK");
  }, []);

  useEffect(() => {
    GoogleAnalytics.set({ page: location.pathname });
    GoogleAnalytics.pageview(location.pathname);
  }, [location]);

  return null;
};

export default AnalyticsTracker;
