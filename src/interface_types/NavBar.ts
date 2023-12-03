import { PRODUCT_CATEGORIES } from "@/config"

export type Category=typeof PRODUCT_CATEGORIES[number]

export interface NavItemPropsType{
    category:Category
    handleOpen:(index:number)=>void
    isOpen:boolean
    index:number
    isAnyOpen:boolean
}

