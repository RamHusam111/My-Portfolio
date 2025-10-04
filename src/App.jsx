import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from './shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App(props) {
  const [activeSection, setActiveSection] = React.useState('about');
  const debounceRef = React.useRef();
  const lockRef = React.useRef(null);


  const setActiveSectionDebounced = React.useCallback((id) => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setActiveSection(id), 58);
  }, []);

  React.useEffect(() => {
    const clearLock = () => { lockRef.current = null; };

    

    const hasScrollEnd = 'onscrollend' in window || 'onscrollend' in document;
    if (hasScrollEnd) {
      window.addEventListener('scrollend', clearLock);
      return () => window.removeEventListener('scrollend', clearLock);
    }


    let t;
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(clearLock, 120);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);

  
  const handleNavClick = (id) => {
    lockRef.current = id;
    setActiveSection(id); // highlight immediately to the clicked section
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  
  const handleSectionInView = React.useCallback((id) => {
    if (lockRef.current && id !== lockRef.current) return; // ignore others
    setActiveSectionDebounced(id);
    if (lockRef.current === id) {
      lockRef.current = null; // reached target, unlock
    }
  }, [setActiveSectionDebounced]);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent onSectionInView={handleSectionInView} />
      </Container>
      <Footer />
    </AppTheme>
  );
}

export default App;
