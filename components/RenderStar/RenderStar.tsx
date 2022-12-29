import React from "react";
import { IconStar } from "../../utils/svg";

interface inPropsRenderStar{
    type: "empty" | "half-filled" | "filled"
}

export const RenderStar = ({type}: inPropsRenderStar) => {
    if (type === "empty") {
        return (
            <IconStar>
                <stop offset="100%" stop-color="grey"/>
            </IconStar>
        )
    } else if (type === "half-filled") {
        return (
            <IconStar>
                <>
                    <stop offset="50%" stop-color="yellow"/>
                    <stop offset="50%" stop-color="grey"/>
                </>
            </IconStar>
        )
    } else if (type === "filled") {
        return (
            <IconStar>
                <stop offset="100%" stop-color="yellow"/>
            </IconStar>
        )
    } else return null
}