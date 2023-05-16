import "./globals.css";

export const metadata = {
    title: "Gustavo Pendeza Portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
