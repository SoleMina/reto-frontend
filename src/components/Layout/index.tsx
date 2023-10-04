import { ReactNode } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import data from '@/servicio.json';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <NavBar data={data} />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
}
