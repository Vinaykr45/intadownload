import Home from "../page";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
      <Home/>
      {children}
      </div>
    );
  }