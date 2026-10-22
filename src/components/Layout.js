import { Outlet } from 'react-router-dom';
import Header from './Header';
import AnnouncementBar from './AnnouncementBar';
import Footer from './Footer';
import usePageEffects from '../hooks/usePageEffects';

export default function Layout() {
  usePageEffects();
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <AnnouncementBar />
    <Header />
    <main id="main"><Outlet /></main>
    <Footer />
  </>;
}
