import React from 'react';
import MentorshipCalendar from '../../../components/mentorship/MentorshipCalendar';

export default function MentorshipDates() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Mentorship Sessions Calendar</h1>
      <MentorshipCalendar />
    </div>
  );
}