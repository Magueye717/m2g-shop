import { createSelector } from "reselect";

const selectMainMenu = state => state.mainmenu;

export const selectMainMenuSections = createSelector(
    [selectMainMenu],
    mainmenu => mainmenu.sections
);