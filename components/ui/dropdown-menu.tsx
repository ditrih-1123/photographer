"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
}

const DropdownMenu = ({ children, trigger }: DropdownMenuProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="relative inline-block">
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={handleClose}
          />
          <div className="absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                const childProps = child.props as { onClick?: (e: React.MouseEvent) => void };
                return React.cloneElement(child as React.ReactElement, {
                  onClick: (e: React.MouseEvent) => {
                    handleClose();
                    if (childProps.onClick) {
                      childProps.onClick(e);
                    }
                  },
                } as React.HTMLAttributes<HTMLElement>);
              }
              return child;
            })}
          </div>
        </>
      )}
    </div>
  );
};

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    onSelect?: () => void;
  }
>(({ className, onSelect, onClick, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className
    )}
    onClick={(e) => {
      onSelect?.();
      onClick?.(e);
    }}
    {...props}
  />
));
DropdownMenuItem.displayName = "DropdownMenuItem";

export { DropdownMenu, DropdownMenuItem };

