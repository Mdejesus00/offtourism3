
import React from 'react';
import Header from '../components/Header';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
