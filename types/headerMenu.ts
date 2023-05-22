type SubMenu = {
  id: number,
  class: string,  
  title: string,  
  childmenu?: Menu[]
};
export type Menu = {
  id: number;
  title: string;
  class: string;
  path?: string;
  newTab: boolean;
  submenu?:SubMenu[]
};
