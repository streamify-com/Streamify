"use client";

import * as React from "react";
import { buttonVariants } from "@shared-components/ui/button";
import { ScrollArea } from "@shared-components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared-components/ui/select";
import { cn } from "@shared-components/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, DropdownProps } from "react-day-picker";
import { de } from "date-fns/locale";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const isDropDown = props.captionLayout?.includes("dropdown");
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      locale={de}
      lang="de"
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: `flex justify-center pt-1 relative items-center ${
          isDropDown ? "w-full flex-col gap-2" : ""
        }`,
        caption_label: `text-sm font-regular ${isDropDown ? "hidden" : ""}`,
        nav: `space-x-1 flex items-center ${
          isDropDown ? "justify-between w-full" : ""
        }`,
        nav_button: cn(
          buttonVariants({ variant: "ghostButton" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),

        caption_dropdowns: "flex w-full gap-2",
        dropdown_month: "relative flex-1",
        vhidden: `${isDropDown ? "hidden" : ""}`,

        dropdown_year: "relative min-w-[5rem]",
        dropdown_icon: "",
        dropdown: cn(
          "w-full p-2 bg-white shadow-md rounded-md z-10",
          "space-y-2 border border-gray-200 text-sm",
        ),

        nav_button_previous: `${isDropDown ? "block" : "absolute left-1"}`,
        nav_button_next: `${isDropDown ? "block" : "absolute right-1"}`,
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghostButton" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
