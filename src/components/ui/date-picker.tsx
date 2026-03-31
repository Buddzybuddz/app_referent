'use client'

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { fr } from "date-fns/locale"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  date?: Date
  onChange?: (date: Date | undefined) => void
  name?: string
  required?: boolean
  label?: string
  placeholder?: string
  disabled?: boolean
  className?: string
  // For years selection range
  fromYear?: number
  toYear?: number
}

export function DatePicker({ 
  date: initialDate, 
  onChange, 
  name, 
  required,
  placeholder = "Choisir une date",
  disabled,
  className,
  fromYear = 1950,
  toYear = new Date().getFullYear() + 20
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(initialDate)

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (onChange) {
      onChange(selectedDate)
    }
  }

  // Update local state when prop changes (e.g. for Edit modals)
  React.useEffect(() => {
    setDate(initialDate)
  }, [initialDate])

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger 
          render={
            <Button
              variant={"outline"}
              disabled={disabled}
              className={cn(
                "w-full justify-start text-left font-normal border-slate-200 transition-all hover:border-indigo-200 focus:ring-indigo-500",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-indigo-500" />
              {date ? format(date, "d MMMM yyyy", { locale: fr }) : <span>{placeholder}</span>}
            </Button>
          }
        />
        <PopoverContent className="w-auto p-0 border-slate-200 shadow-xl rounded-2xl" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            initialFocus
            locale={fr}
            captionLayout="dropdown"
            startMonth={new Date(fromYear, 0)}
            endMonth={new Date(toYear, 11)}
            className="rounded-2xl"
          />
        </PopoverContent>
      </Popover>
      {/* Hidden input for FormData usage */}
      {name && (
        <input 
          type="hidden" 
          name={name} 
          value={date ? date.toISOString() : ""} 
          required={required}
        />
      )}
    </div>
  )
}
