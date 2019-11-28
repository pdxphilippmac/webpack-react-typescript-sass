import * as React from "react";
import "./Banner.scss";
import { FC } from "react"

interface IProps {
    name: string;

}



export const InitialText: FC<IProps> = (props) => <div className="banner">
    <span className="banner__text">
        Hello {name}!
</span>
</div>



