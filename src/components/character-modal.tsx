import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacterDetails } from "../redux/fetchData";
import { toggleModal } from "../redux/swapiSlice";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
} from "@mui/material";
import { BaseModalSkeleton } from "./ui/base-modal-skeleton";
import { ModalDetailsInfo } from "./ui/modal-details-info";
import { ModalDetailsFilms } from "./ui/modal-details-films";
import { AppDispatch, RootState } from "../redux/store";

export function CharacterModal() {
  const { modalOpen, characterDetails, modalUrl, characterLoading } =
    useSelector((state: RootState) => state.swapi);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCharacterDetails(modalUrl));
  }, [dispatch, modalUrl]);

  function handleClose() {
    dispatch(toggleModal(false));
  }

  if (characterLoading) {
    return (
      <Dialog open={modalOpen} onClose={handleClose}>
        <BaseModalSkeleton />
      </Dialog>
    );
  }

  return (
    <Dialog open={modalOpen} onClose={handleClose}>
      {characterDetails && (
        <>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {characterDetails.name}
          </DialogTitle>
          <DialogContent dividers>
            <ModalDetailsInfo characterDetails={characterDetails} />
            <ModalDetailsFilms films={characterDetails.films} />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
