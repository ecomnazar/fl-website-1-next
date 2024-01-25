import { inter } from "./layout";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" /> */}
            {/* <Script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js" /> */}
            {/* <Head>
              <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
              <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"></script>
            </Head> */}
            <body className={inter.className}>{children}</body>
        </html>
    );
}
