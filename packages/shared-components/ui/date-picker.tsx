"use client";
import { useState, useEffect } from "react";
import { Button } from "@shared-components/ui/button";
import { Calendar } from "@shared-components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@shared-components/ui/popover";
import { cn } from "@shared-components/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { de } from "date-fns/locale";
import React from "react";
import { Input } from "@shared-components/ui/input";

interface DatePickerProps {
  selectedDate: Date | undefined;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

/**
 * @description Convert a date string from the french format without "/" to a valid date JJMMYYYY with missing values => new Date(YYYY-MM-DD)
 * @param dateString JJMMYYYY
 * @returns new Date(YYYY-MM-DD)
 */
function frIsoRawDateToValidDate(dateString: string) {
  const now = new Date();
  const year = dateString.slice(4, 8);
  const month = dateString.slice(2, 4);
  const day = dateString.slice(0, 2);
  const isValidYear =
    parseInt(year) <= now.getFullYear() && parseInt(year) > 1900;
  const isValidMonth = parseInt(month) <= 12 && parseInt(month) > 0;
  const isValidDay = parseInt(day) <= 31 && parseInt(day) > 0;
  const date = `${isValidYear ? year : now.getFullYear() - 18}-${
    isValidMonth ? month : now.getMonth() + 1
  }-${isValidDay ? day : now.getDate()}`;
  return new Date(date);
}

const DatePicker = ({ selectedDate, setSelectedDate }: DatePickerProps) => {
  const [stringDate, setStringDate] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState(false);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const minDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18);
    if (e.key === "Enter" && stringDate.length === 8) {
      e.stopPropagation();
      e.preventDefault();
      return setIsOpen(false);
    }
    if (e.key === "Delete") {
      setStringDate("");
      return setSelectedDate(minDate);
    }
    if (e.key === "Backspace") {
      return setStringDate((prev) => {
        const sliced = prev.slice(0, -1);
        setSelectedDate(frIsoRawDateToValidDate(sliced));
        return prev.slice(0, -1);
      });
    }
    if (e.key === "Escape") {
      return setIsOpen(false);
    }
    const isKeyDigit = parseInt(e.key) >= 0 && parseInt(e.key) <= 9;
    if (isKeyDigit) {
      const toDigit = parseInt(e.key).toString();
      setStringDate((prev) => {
        if (prev.length === 8) {
          setSelectedDate(minDate);
          return "";
        }
        const newDate = `${prev}${toDigit}`;
        setSelectedDate(frIsoRawDateToValidDate(newDate));
        return newDate;
      });
    }
  };
  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"ghostButton"}
          type="button"
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !selectedDate && "text-muted-foreground",
          )}
        >
          {selectedDate ? (
            format(selectedDate, "PPP", { locale: de })
          ) : (
            <span>Séléctionner une date</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0"
        align="start"
        onKeyDown={handleKeyDown}
      >
        <Calendar
          required
          fromYear={new Date().getFullYear() - 100}
          mode="single"
          toDate={new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18)}
          selected={selectedDate}
          onSelect={(e) => {
            setSelectedDate(e);
            setStringDate("");
          }}
          captionLayout="dropdown-buttons"
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          fixedWeeks
          defaultMonth={selectedDate}
          month={selectedDate}
          onMonthChange={setSelectedDate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
