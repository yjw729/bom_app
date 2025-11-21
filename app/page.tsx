'use client'

import { Sidebar } from "./components/sidebar"

import { StyleNode } from "./components/stylenode"
import { DefineCost } from "./components/definecost"
import { DefineNode } from "./components/definenode"
import { UserPanel } from "./components/userpanel"

import React, { useState } from 'react';


export default function Page() { 
  // State to track the active section/route. Initialize to Step 1.
  // State to track the active section/route. Initialize to Step 1.
  const [activeStep, setActiveStep] = useState('/cut-style');

  // Router logic to render the correct component
  const renderMainContent = () => {
    switch (activeStep) {
      case '/cut-style':
        // Pass setActiveStep function to allow the form to trigger navigation
        return <StyleNode onSave={setActiveStep} />;
      case '/definenode':
        // NOTE: Uses DefineNode component to match the user's requested import name
        return <DefineNode onSave={setActiveStep}/>;
      case '/costing':
        return <DefineCost/>;
      default:
        return <div>404 Not Found</div>;
    }
  };

  return (
    // Outer flex container for the side-by-side layout
    <div className="flex min-h-screen bg-gray-100">
      
      {/* 1. Left Sidebar (Fixed Width) */}
      <Sidebar activePath={activeStep} setActivePath={setActiveStep} />
      
      {/* 2. Main Content Area (Fluid/Center) */}
      <main className="flex-1 p-8 lg:p-12">
        {renderMainContent()}
      </main>
      
      {/* 3. Right User Panel (Fixed Width) */}
      <UserPanel />
      
    </div>
  );
}