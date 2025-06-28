import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter: React.FC = () => {
  console.log('AppFooter loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-20 md:flex-row md:py-0">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          © {currentYear} QuickSign Portal. All Rights Reserved.
        </div>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          {/* These links point to '#' as the routes are not defined in App.tsx */}
          <Link to="#" className="transition-colors hover:text-foreground">
            Terms of Service
          </Link>
          <Link to="#" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default AppFooter;