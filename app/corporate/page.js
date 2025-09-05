import React from 'react';
import CorporateServices from '@/components/services/CorporateServices';

export const metadata = {
  title: 'Corporate Services | Grubox',
  description: 'Explore our tailored corporate food and vending services for modern offices across NCR.',
};

export default function CorporatePage() {
  return (
    <div className="w3-light-grey">
      <CorporateServices />
    </div>
  );
}
