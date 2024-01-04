import React, { useState, useEffect } from 'react';

const TrustPilotWidget = () => {
  const [companyStats, setCompanyStats] = useState<any>(null);

  useEffect(() => {
    // Fetch TrustPilot company stats when the component mounts
    const fetchCompanyStats = async () => {
      try {
        const response = await fetch('https://api.trustpilot.com/v1/business-units/find?name=staysure.co.uk', {
          headers: {
            'apikey': 'waKrJRkUeYRXLJdVBAeHukkk2s0d8srx', // replace with your actual API key
          },
        });
        const data = await response.json();
        setCompanyStats(data);
      } catch (error) {
        console.error('Error fetching TrustPilot data:', error);
      }
    };

    fetchCompanyStats();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="trustpilot-widget">
      {companyStats && (
        <div>
          <div>Business Unit Name: {companyStats.displayName}</div>
          <div>Business Unit ID: {companyStats.id}</div>
          <div>Trust Score: {companyStats.score.trustScore}</div>
          {/* Add other relevant information */}
        </div>
      )}
    </div>
  );
};

export default TrustPilotWidget;