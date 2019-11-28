import * as React from "react";
import "./InitialText.scss";
import { FC } from "react"

interface IProps {
    name: string;

}



export const InitialText: FC<IProps> = (props) => <div className="inititalText">
    <span className="inititalText_text">
        Hello {name}!
    </span>
</div>



