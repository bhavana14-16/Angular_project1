import { Injectable } from "@angular/core";

export interface Menu{
    state: string;
    name: string;
    icon: string;
    role:string;
}

const MENUITEMS=[
    {state: 'dashboard',name:"Dashboard",icon:"dashboard",role:''},
    {state: 'allprojects',name:"All Projects",icon:"allprojects",role:''},
   // {state: 'addproject',name:"Add Project",icon:"addproject",role:''},
    {state: 'addtask',name:"Add Task",icon:"addtask",role:''},
    {state: 'allemployee',name:"All Employee",icon:"allemployee",role:''},
    {state: 'addemployee',name:"Add Employee",icon:"addemployee",role:''}
];

@Injectable()
export class MenuItems{
    getMenuitems(): Menu[]{
            return MENUITEMS;
    }
}