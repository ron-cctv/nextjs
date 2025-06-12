import { AntdRegistry } from '@ant-design/nextjs-registry';   /* 导入antd的App Router */
/*  import "./globals.css";  导入全局css,这个在根layout中已经导入这里不重复 */
export default function AppaLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
     <div>
       <AntdRegistry> 
         {children}      
       </AntdRegistry>
     </div>
  );
}
