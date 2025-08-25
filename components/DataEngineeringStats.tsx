// components/DataEngineeringStats.tsx
'use client';

import React from 'react';

export default function DataEngineeringStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
      
      <div className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">20M+</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Records Processed Daily</div>
      </div>
      
      <div className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.9%</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Pipeline Uptime</div>
      </div>
      
      <div className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">5TB+</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Data Migrated to Cloud</div>
      </div>
      
      <div className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">$50K+</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Annual Cost Savings</div>
      </div>
      
      <div className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
        <div className="text-3xl font-bold text-red-600 dark:text-red-400">40%</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">Performance Improvement</div>
      </div>
      
    </div>
  );
}
