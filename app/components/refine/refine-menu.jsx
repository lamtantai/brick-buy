import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuContainer from "../menu/menu-container";
import { openMenuRefine } from "@/app/lib/features/menu-slice";

export default function RefineMenu() {
  const isMenuRefineOpen = useSelector((state) => state.menu.isMenuRefineOpen);
  const dispatch = useDispatch();

  return (
    <MenuContainer
      isMenuOpen={isMenuRefineOpen}
      onClick={() => dispatch(openMenuRefine())}
    ></MenuContainer>
  );
}
