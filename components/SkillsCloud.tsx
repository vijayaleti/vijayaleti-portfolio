// components/SkillsCloud.tsx
'use client';

import React from 'react';

const skills = [
  { name: 'AWS', level: 90 },
  { name: 'Azure', level: 85 },
  { name: 'GCP', level: 75 },
  { name: 'Python', level: 95 },
  { name: 'Spark', level: 90 },
  { name: 'Databricks', level: 85 },
  { name: 'Snowflake', level: 80 },
  { name: 'Redshift', level: 80 },
  { name: 'BigQuery', level: 75 },
  { name: 'ETL', level: 90 },
  { name: 'Data Modeling', level: 88 },
  { name: 'SQL', level: 95 },
];

export default function SkillsCloud() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="relative rounded-lg bg-gradient-to-br from-purple-400 to-blue-500 p-3 text-white shadow-lg hover:scale-105 transform transition-transform duration-200"
          style={{
            fontSize: `${(skill.level / 10) + 1}rem`,
            padding: '0.75rem 1.5rem',
            minWidth: '80px',
          }}
        >
          <div className="absolute top-1 right-2 text-xs font-semibold">{skill.name}</div>
          <div className="font-bold">{skill.name}</div>
          <div className="h-2 bg-white/20 rounded-full mt-2">
            <div
              className="bg-white h-2 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
