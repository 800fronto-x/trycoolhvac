
import "./globals.css";

export const metadata = {
  title: "TryCool HVAC | Heating & AC Services in Washington DC",
  description: "AC repair, heating repair, and HVAC installation across the DC metro area."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
