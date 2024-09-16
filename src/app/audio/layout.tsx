import Audio_home from "./audio_home";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
      <Audio_home/>
      {children}
      </div>
    );
  }