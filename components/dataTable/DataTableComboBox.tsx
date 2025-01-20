"use client";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  value: string;
  selectionPlaceholder?: string;
  options: {
    value: string;
    id: string;
  }[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: (value: string, id: string) => void;
}

export function DataTableCombobox({
  value,
  selectionPlaceholder,
  options,
  open,
  onOpenChange,
  onUpdate,
}: Props) {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value == "undefined" ? "" : value}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={selectionPlaceholder} className="h-9" />
          <CommandList>
            <CommandEmpty>No Value Found</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.id}
                  value={option.value}
                  onSelect={() => {
                    onUpdate(option.value, option.id);
                    onOpenChange(false);
                  }}
                >
                  {option.value}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
