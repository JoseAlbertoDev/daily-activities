import { AppRoutes } from "@client/routes/app.routes";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const AnualActivities: FC = () => {
  const navigate = useNavigate();

  const handleOnCreate = () => {
    navigate(AppRoutes.diaryActions.create);
  };

  return (
    <div>
      <h3>Calendario</h3>
      <button onClick={handleOnCreate}>Crear</button>
    </div>
  );
};
