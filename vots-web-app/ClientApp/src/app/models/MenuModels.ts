export  interface VotsMenu {
  MenuItems: VotsMenuItem[];
}

export interface VotsMenuItem {
  ParentMenuId: string;
  ParentMenuLabel: string;
  ChildMenuId: string;
  ChildMenuLabel: string;
}
