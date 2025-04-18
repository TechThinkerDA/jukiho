"use client";

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import '../i18n';


interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 bg-gray-50">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
