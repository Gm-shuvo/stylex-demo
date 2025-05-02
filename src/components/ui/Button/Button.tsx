/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import * as stylex from "@stylexjs/stylex";
import { button, variants, sizes } from "./button.stylex";

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  styleX?: stylex.StyleXStyles;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      asChild = false,
      disabled = false,
      loading = false,
      iconLeft,
      iconRight,
      styleX = {},
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || loading;

    return (
      <Comp
        ref={ref}
        {...props}
        disabled={isDisabled}
        
        {...stylex.props(button.base, variants[variant], sizes[size], styleX, 
          isDisabled && button.disabled
        )}
      >
        {loading ? (
          <div {...stylex.props(button.loading, variants[variant])}>
            <div {...stylex.props(button.spinner, variants[variant])} />
            {children && <span>{children}</span>}
          </div>
        ) : (
          <>
            {iconLeft && (
              <span style={{ marginRight: children ? 4 : 0 }}>{iconLeft}</span>
            )}
            {children && <span>{children}</span>}
            {iconRight && (
              <span style={{ marginLeft: children ? 4 : 0 }}>{iconRight}</span>
            )}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
