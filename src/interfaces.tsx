interface SeparatorProps {
    leftText?: string;
    rightText?: string;
}

interface Technology {
    name: string;
    experience: string;
}

interface TechnologiesTableProps {
    headers: string[];
    rows: Technology[];
}

export type { Technology, SeparatorProps, TechnologiesTableProps };