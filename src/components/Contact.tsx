import Terminal from "./Terminal"

import text from "../texts.json"

interface ContactProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function Contact({ activePage, onNavigate }: ContactProps) {
    return (
        <>
            <Terminal 
                text_in_terminal={text.terminal.Contact}
                folder="contact"
                command="cat contact.txt"
                activePage={activePage}
                onNavigate={onNavigate}
            />
        </>
    )
}