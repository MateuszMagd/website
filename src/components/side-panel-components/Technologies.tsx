import '../../styles/Technologies.css'

import type { TechnologiesTableProps } from '../../interfaces';

export default function Technologies({ headers, rows }: TechnologiesTableProps) {
    return (
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
        </div>
    )
}