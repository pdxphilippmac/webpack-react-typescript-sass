import * as React from "react"
import { FC } from "react"

interface TextProps {
    item: string
}
interface ButtonProps {

    onClick: () => void;
}
const handleClick = () => alert("Testooo")

export const Text: FC<TextProps> = (item) => <div className="Div">{item}</div>
export const Button: FC<ButtonProps> = () => <Button onClick={handleClick} />