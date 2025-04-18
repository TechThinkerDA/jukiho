// "use client";
//
// import React from 'react';
// import dynamic from 'next/dynamic';
//
// // Import the tech visualization with SSR disabled
// const TechVisualizationNoSSR = dynamic(() => import('./TechVisualizationNoSSR'), {
//   ssr: false,
//   loading: () => (
//     <div className="py-16 bg-gradient-to-br from-[#f9fafb] to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-sm border border-[#e5e7eb] dark:border-gray-700 transition-colors duration-200">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold mb-4 text-[#111827] dark:text-[#f9fafb]">
//           Technology & Development
//         </h2>
//         <p className="text-[#111827]/80 dark:text-[#f9fafb]/80 mb-8 max-w-2xl mx-auto">
//           Loading 3D visualization...
//         </p>
//         <div className="w-full h-[400px] flex items-center justify-center">
//           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#4f46e5] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
//         </div>
//       </div>
//     </div>
//   )
// });
//
// // Client component wrapper
// export function ClientTechWrapper() {
//   return <TechVisualizationNoSSR />;
// }
