
import React from 'react';
import ProcessList from './ProcessList';
import CheckInPanel from './CheckInPanel';
import AudienceSummary from './AudienceSummary';
import HappeningNow from './HappeningNow';

const OnePage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full gap-6 p-4 md:p-6 overflow-hidden">
      {/* Main Content: Process List */}
      <div className="lg:w-2/3 h-full flex flex-col min-h-0">
        <ProcessList />
      </div>

      {/* Sidebar content: Cards */}
      <div className="lg:w-1/3 h-full flex flex-col gap-6 overflow-y-auto">
        {/* Remove main title from these components for a cleaner look in this view */}
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <CheckInPanel />
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <AudienceSummary />
        </div>
        <HappeningNow />
      </div>
    </div>
  );
};

export default OnePage;