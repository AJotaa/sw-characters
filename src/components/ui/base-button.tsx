import { Button } from "@mui/material";
import React from "react";

interface BaseButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  haveMore: string | null;
  loading: boolean;
}

export function BaseButton({
  children,
  onClick,
  haveMore,
  loading,
}: BaseButtonProps) {
  return (
    <Button
      variant="contained"
      disabled={haveMore && !loading ? false : true}
      onClick={onClick}
      sx={{
        "&.Mui-disabled": {
          backgroundColor: "#555",
          color: "#000",
          opacity: 0.5,
        },
      }}
    >
      {children}
    </Button>
  );
}
