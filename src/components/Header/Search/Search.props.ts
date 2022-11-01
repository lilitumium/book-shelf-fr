import { ContainerProps } from "@mui/material";

interface SearchProps extends ContainerProps {
  readonly onSearch: (value: string) => void;
}

export type { SearchProps };
