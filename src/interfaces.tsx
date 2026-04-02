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
    text: string[];
}

interface StatusPanelProps {
    serviceName: string;
    status: string;
}

interface StatusPanelTableProps {
    data: StatusPanelProps[];
}

export type { Technology, SeparatorProps, TechnologiesTableProps, StatusPanelProps, StatusPanelTableProps };