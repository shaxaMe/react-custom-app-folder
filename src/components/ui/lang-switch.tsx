// // import { useTranslation } from "react-i18next";
// import { Dropdown } from "antd";
// import { useState } from "react";
// import IconUz from "@/assets/icons/icon-uz.svg?react";
// import IconRu from "@/assets/icons/icon-ru.svg?react";
// import IconUk from "@/assets/icons/icon-uk.svg?react";

// type LanguageSwit = "en" | "la" | "ru";

// interface Lang {
//   label: string;
//   value: LanguageSwit;
//   icon: JSX.Element;
// }

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();
//   const [open, setOpen] = useState(false);
//   const langs: Lang[] = [
//     {
//       label: "English",
//       value: "en",
//       icon: <IconUk className="w-6 h-6" />,
//     },
//     {
//       label: "Русский",
//       value: "ru",
//       icon: <IconRu className="w-6 h-6" />,
//     },
//     {
//       label: "Latin",
//       value: "la",
//       icon: <IconUz className="w-6 h-6" />,
//     },
//   ];
//   const currentLang = langs.find((lang) => lang.value === i18n.language);

//   const changeLanguage = (lng: LanguageSwit) => {
//     i18n.changeLanguage(lng);
//     setOpen(false);
//   };

//   return (
//     <Dropdown
//       placement="bottom"
//       open={open}
//       onOpenChange={(flag) => setOpen(flag)}
//       popupRender={() => (
//         <div className="w-fit py-2 px-1 bg-white rounded shadow-lg flex flex-col text-center gap-2">
//           {langs.map((item) => (
//             <div
//               key={item.value}
//               onClick={() => changeLanguage(item.value)}
//               className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded transition">
//               {item.icon}
//               <p className="text-base-500 text-sm">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       trigger={["click",'hover']}>
//       <div className="flex items-center gap-2 cursor-pointer min-w-20">
//         {currentLang?.icon}
//         <p className="text-base-500 text-sm">{currentLang?.label}</p>
//       </div>
//     </Dropdown>
//   );
// };

// export default LanguageSwitcher;
