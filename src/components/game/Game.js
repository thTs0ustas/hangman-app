import React, { Suspense } from "react";

const Words = React.lazy(() => import("../words"));
export const Game = () => {
  return (
    <Suspense fallback={<div>Loading word....</div>}>
      <Words />
    </Suspense>
  );
};
