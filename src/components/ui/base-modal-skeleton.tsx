import { DialogContent, DialogTitle, Skeleton } from "@mui/material";

export function BaseModalSkeleton() {
  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <Skeleton variant="rounded" height={50} />
      </DialogTitle>
      <DialogContent>
        <Skeleton
          variant="rounded"
          height={200}
          width={500}
          sx={{ maxWidth: "100%" }}
        />
      </DialogContent>
    </>
  );
}
