
import type { NewsPayload } from "../../typescript/interface/news.interface";
import type { DynamicInputProps } from "../../typescript/type/component.type";

export const newsinputfield:Array<Omit<DynamicInputProps<NewsPayload>, "register" | "errors">> = [
    {
        name:"title",
        label:"Enter Title",
        type:"text",
        required:true,
    },
    {
        name:"content",
        label:"Enter Content",
        type:"text",
        required:true,
    },
]