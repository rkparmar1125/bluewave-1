type SubMenu = {
  id: number,
  class: string,  
  title: string,  
  path?: string;
  newTab: boolean;
};
export type Menu = {
  id: number;
  title: string;
  class: string;
  path?: string;
  newTab: boolean;
  submenu?:Menu[]
};
