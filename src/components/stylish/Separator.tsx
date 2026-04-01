import "../../styles/Separator.css"

import type { SeparatorProps } from "../../interfaces";

export default function Separator({ leftText = "Text", rightText = "Main" }: SeparatorProps) {
  return (
    <div className="panel-separator">
        <span className="left">{leftText}</span>
        <span className="right">{rightText}</span>
    </div>
  )
}