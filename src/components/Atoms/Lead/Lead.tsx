import React, { ReactNode } from 'react';

interface LeadProps {
  children: ReactNode;
}

export const Lead = ({ children }: LeadProps) => {
  return <span className="mt-6 block text-xl">{children}</span>;
};

export default Lead;
