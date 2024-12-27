import React from "react";

import ErrorPage from "./components/error-page";

export default function NotFound() {
  return <ErrorPage errorMessage="We can't find this page." />;
}
