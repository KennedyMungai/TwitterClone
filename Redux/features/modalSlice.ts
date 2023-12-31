import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IModalState {
    isOpen: boolean
}

const initialState: IModalState = {
    isOpen: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: ({ isOpen }) => ({ isOpen: true }),
        closeModal: ({ isOpen }) => ({ isOpen: false })
    }
})

export const { openModal, closeModal } = modalSlice.actions

export const selectIsOpen = (state: RootState) => state.isOpen

export default modalSlice.reducer