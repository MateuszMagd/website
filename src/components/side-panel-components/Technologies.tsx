import '../../styles/Technologies.css'
import '../../styles/VerticalSeparator.css'

import type { TechnologiesTableProps } from '../../interfaces';


export default function Technologies({ headers, rows, text }: TechnologiesTableProps) {
    return (
        <div className="technologies-border">
            <div className="technologies">
                <table>
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((tech, index) => (
                            <tr key={index}>
                                <td>{tech.name}</td>
                                <td>{tech.experience}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='vertical-separator'/>
                <div className='text-information'>{text.map((t, index) =>(
                    <p key={index}>{t}</p>
                ))}</div>
            </div>
        </div>
    )
}