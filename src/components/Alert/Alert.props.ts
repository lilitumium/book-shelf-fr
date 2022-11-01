import { AlertProps as AlertMUIProps } from "@mui/material";

/**
 * Alert Props
 */
interface AlertProps extends AlertMUIProps {
  /**
   * Is Alert open
   */
  open: boolean;
  /**
   * Alert description
   */
  description: string;
}

export type { AlertProps };
