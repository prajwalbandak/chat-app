import React, { useState } from 'react';

export const SkeletonCard = () => {
  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md ">
        <div className="bg-white shadow-md rounded-lg p-6 animate-pulse">
          <div className="mx-auto h-12 w-auto bg-gray-300 rounded-full"></div>
          <div className="my-3 bg-gray-300 h-6 w-2/3 mx-auto rounded-full"></div>
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-gray-300 h-6 w-full rounded-md"></div>
            ))}
            <div className="flex w-full justify-center">
              <div className="bg-sky-400 h-12 w-2/3 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};