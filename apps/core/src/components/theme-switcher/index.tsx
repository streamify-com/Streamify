// "use client";

// import * as React from "react";
// import { useState, useEffect } from "react";
// import {
//   DarkIcon,
//   LightIcon,
//   SystemIcon,
// } from "@shared-components/graphics/icons";
// import { Tabs, TabsList, TabsTrigger } from "@shared-components/ui/tabs";

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// export function ThemeModeSelector() {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
//   );
//   const element = document.documentElement;
//   const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
//   const options = [
//     {
//       value: "light",
//       position: "light",
//       text: <>{m.light()}</>,
//     },
//     {
//       value: "dark",
//       position: "dark",
//       text: <>{m.dark()}</>,
//     },
//     {
//       value: "system",
//       position: "system",
//       text: <>{m.system()}</>,
//     },
//   ];

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   function onWindowMatch() {
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) && darkQuery.matches)
//     ) {
//       element.classList.add("dark");
//     } else {
//       element.classList.remove("dark");
//     }
//   }
//   onWindowMatch();

//   useEffect(() => {
//     switch (theme) {
//       case "dark":
//         element.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//         break;
//       case "light":
//         element.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         break;
//       default:
//         localStorage.removeItem("theme");
//         onWindowMatch();
//         break;
//     }
//   }, [element.classList, onWindowMatch, theme]);

//   darkQuery.addEventListener("change", (e) => {
//     if (!("theme" in localStorage)) {
//       if (e.matches) {
//         element.classList.add("dark");
//       } else {
//         element.classList.remove("dark");
//       }
//     }
//   });

//   return (
//     <Tabs defaultValue="system" className="border-primary w-full">
//       <TabsList className="grid w-full grid-cols-3 gap-2">
//         {options?.map((opt) => (
//           <TabsTrigger
//             key={opt.position}
//             onClick={() => setTheme(opt.value)}
//             value={opt.value}
//             className="data-[state=active]:bg-primary-muted text-sm sm:text-xs"
//           >
//             {opt.text}
//           </TabsTrigger>
//         ))}
//       </TabsList>
//     </Tabs>
//   );
// }

// export function ThemeModeIcon() {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
//   );
//   const element = document.documentElement;
//   const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
//   const options = [
//     {
//       value: "light",
//       text: "Light",
//       icon: <LightIcon className="h-4 w-auto" />,
//     },
//     {
//       value: "dark",
//       text: "Dark",
//       icon: <DarkIcon className="h-4 w-auto" />,
//     },
//     {
//       value: "system",
//       text: "System",
//       icon: <SystemIcon className="h-4 w-auto" />,
//     },
//   ];

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   function onWindowMatch() {
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) && darkQuery.matches)
//     ) {
//       element.classList.add("dark");
//     } else {
//       element.classList.remove("dark");
//     }
//   }
//   onWindowMatch();

//   useEffect(() => {
//     switch (theme) {
//       case "dark":
//         element.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//         break;
//       case "light":
//         element.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         break;
//       default:
//         localStorage.removeItem("theme");
//         onWindowMatch();
//         break;
//     }
//   }, [element.classList, onWindowMatch, theme]);

//   darkQuery.addEventListener("change", (e) => {
//     if (!("theme" in localStorage)) {
//       if (e.matches) {
//         element.classList.add("dark");
//       } else {
//         element.classList.remove("dark");
//       }
//     }
//   });

//   return (
//     <Tabs defaultValue="system" className="w-28 sm:w-28 rounded-full">
//       <TabsList className="grid w-full grid-cols-3 gap-2 p-1 rounded-full">
//         {options?.map((opt) => (
//           <TabsTrigger
//             key={opt.text}
//             onClick={() => setTheme(opt.value)}
//             value={opt.value}
//             className="data-[state=active]:bg-primary-muted text-sm sm:text-xs px-2 py-1 rounded-full"
//           >
//             {opt.icon}
//           </TabsTrigger>
//         ))}
//       </TabsList>
//     </Tabs>
//   );
// }
