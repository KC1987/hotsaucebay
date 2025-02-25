import type { Selection } from "@heroui/react";

export const getSelectionSize = (selection: Selection): number => {
  if (selection === "all") return 0;
  return selection instanceof Set ? selection.size : 0;
};

export const getSelectedKeys = (selection: Selection): string[] => {
  if (selection === "all") return [];
  return Array.from(selection) as string[];
};
