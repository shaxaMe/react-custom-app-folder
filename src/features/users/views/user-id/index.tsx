import { useParams, useNavigate } from "react-router-dom";


import UIButton from "@/components/ui/button/UIButton";
import { paths } from "@/config/path/path";

//assets
import IconLeft from "@/assets/icons/icon-left.svg?react";

function UserId() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(paths.home.getHref());
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-start">
        <UIButton
          className="!p-1 border-none text-sm !bg-transparent"
          onClick={handleBack}>
          <IconLeft className="text-blue-500 fill-none" /> Назад
        </UIButton>
      </div>
      <div className="mt-4">
        <p>User ID: {id}</p>
      </div>
    </div>
  );
}

export default UserId;
