export  interface VotsMenu {
  MenuItems: VotsMenuItem[];
}

export interface VotsMenuItem {
  ParentMenuId: string;
  ParentMenuLabel: string;
  ChildMenuId: string;
  ChildMenuLabel: string;
}

export interface MenuItem { 
  ChildMenuId: string;
  ChildMenuLabel: string;
}

export interface MenuItems {
  ParenMenus: VotsMenuParent[];
}

export interface VotsMenuParent {
  ParentMenuId: string;
  ParentMenuLabel: string;
  MenuItems: VotsMenuItem[];
}
