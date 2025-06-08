import Header from "../src/components/header"; /* 1导入封装文件 header.tsx */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
         <Header/> 
        {children}
    </>
  );
}
