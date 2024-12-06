import { createBrowserRouter, RouteObject } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { Layout } from "../layout/Layout";

const appRoutes: RouteObject[] = [
  {
    path: AppRoutes.root,
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          const { AnualActivities } = await import(
            "@client/pages/anualActivities/AnualActivities"
          );
          return {
            element: <AnualActivities />,
          };
        },
      },
      {
        path: AppRoutes.diaryActions.create,

        async lazy() {
          const { CreateActivity } = await import(
            "@client/pages/createActivity/CreateActivity"
          );
          return {
            element: <CreateActivity />,
          };
        },
      },
    ],
  },
];

export const appRouting = createBrowserRouter(appRoutes);
