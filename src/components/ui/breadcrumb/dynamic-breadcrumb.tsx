import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ChevronRight from "@/assets/icons/chevron-right.svg?react";
import { matchPath } from "react-router-dom";
import { paths } from "@/config/path/path";

const routeBreadcrumbMap: Record<string, string> = {
  "/dashboard": "Главная",
  [paths.dashboard.users.path]: "Список иммигрантов",
  [paths.dashboard.userDetail.path]: "Foydalanuvchi",
  [paths.dashboard.process.path]: "Обработать",
  [paths.dashboard.process_id.path]: "Foydalanuvchi",
  [paths.profile.path]: "Профиль",
  [paths.dashboard.visa.path]: "Визы",
};

async function getUserNameById(id: string): Promise<string> {
  return `#${id}`; // bu yerda API chaqirishingiz bo'lishi mumkin
}

function DynamicBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const id = pathnames[pathnames.length - 1];
    const currentPath = "/" + pathnames.join("/");

    if (matchPath("/users/:id", currentPath) || matchPath("/process/:id", currentPath)) {
      getUserNameById(id)
        .then((name) => setUserName(name))
        .catch(() => setUserName("Noma’lum foydalanuvchi"));
    } else {
      setUserName(null);
    }
  }, [location.pathname]);

  const breadcrumbItems = pathnames.map((_, index) => {
    const url = "/" + pathnames.slice(0, index + 1).join("/");
    const isLast = index === pathnames.length - 1;

    let title = routeBreadcrumbMap[url];

    if (!title) {
      if (matchPath("/users/:id", url) || matchPath("/process/:id", url)) {
        title = userName ? `Пользователь ${userName}` : "Загрузка...";
      } else {
        title = url; 
      }
    }

    return {
      title: isLast ? title : <Link to={url}>{title}</Link>,
    };
  });

  if (!location.pathname.includes("/dashboard")) {
    breadcrumbItems.unshift({
      title: <Link to="/">Главная</Link>,
    });
  }

  return <Breadcrumb separator={<ChevronRight />} items={breadcrumbItems} />;
}

export default DynamicBreadcrumb;
