
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  return (
    <div className="min-h-screen bg-white">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
      />
      <main>
        <Hero currentLanguage={currentLanguage} />
        <Features currentLanguage={currentLanguage} />
        <Community currentLanguage={currentLanguage} />
      </main>
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
};

export default Index;
