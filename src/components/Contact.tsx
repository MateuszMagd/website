import Terminal from "./Terminal"

interface ContactProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function Contact({ activePage, onNavigate }: ContactProps) {
    return (
        <>
            <Terminal 
                text_in_terminal="You can contact me via email at example@example.com"
                folder="contact"
                command="cat contact.txt"
                activePage={activePage}
                onNavigate={onNavigate}
            />
        </>
    )
}