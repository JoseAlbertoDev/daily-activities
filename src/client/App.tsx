import { FC } from "react";
import { RouterProvider } from "react-router";
import { appRouting } from "./routes/app.routing";
export const App: FC = () => {
  return <RouterProvider router={appRouting} />;
};
