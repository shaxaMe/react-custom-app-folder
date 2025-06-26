import UserAccount from "@/assets/icons/user-account.svg?react";
import { paths } from "@/config/path/path";
const sidebarElements = [
  {
    title: "Статистика",
    link: paths.dashboard.root.getHref(),
    icon: <UserAccount className="text-lg" />,
  },
  {
    title: "Личност",
    icon: <UserAccount className="text-lg" />,
    children: [
      {
        title: "Список иммигрантов",
        link: "/arrived",
      },
      {
        title: "Обработать",
        link: "/registered",
      },
      {
        title: "Визы",
        link: "/departed",
      },
      
    ],
  },
];

export default sidebarElements;
