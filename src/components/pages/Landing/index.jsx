import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  // Scroll to top of page
  const scrollToTop = () => {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0); // Fallback for older browsers
    }
  };

  // Open Human Rights First website
  const handleReadMore = () => {
    window.open('https://www.humanrightsfirst.org', '_blank');
  };

  return (
    <div className='flex flex-col items-center w-full'>
      {/* Title Section */}
      <div className='w-full primary-c text-white text-center py-8'>
        <div className='max-w-[1200px] mx-auto px-4'>
          <h1 className='text-4xl font-bold mb-4'>Asylum Office Grant Rate Tracker</h1>
          <p className='text-lg'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
            Asylum Office decisions
          </p>
        </div>
      </div>

      <div className='w-full secondary-c'>
        <div className='max-w-[1200px] w-full px-4 mx-auto pt-12'>
          {/* Graph Section */}
          <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
            <div className='flex flex-col items-center'>
              <img src={barGraph} alt='Bar Graph' className='h-32 object-contain mb-4' />
              <p className='text-center'>Search Grant Rates By Office</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={pieChart} alt='Pie Chart' className='h-32 object-contain mb-4' />
              <p className='text-center'>Search Grant Rates By Nationality</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={lineGraph} alt='Line Graph' className='h-32 object-contain mb-4' />
              <p className='text-center'>Search Grant Rates Over Time</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex justify-center gap-4 mb-12'>
            <button className='bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700'>View the Data</button>
            <button onClick={downloadCSV} className='bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700'>
              Download the Data
            </button>
          </div>

          {/* Info Section */}
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-16 mb-12'>
            <img src={paperStack} alt='Stack of Papers' className='w-full h-auto rounded-lg shadow-md' />
            <div className='flex items-center justify-center'>
              <p className='text-center'>
                Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May
                2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant
                rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
              </p>
            </div>
          </div>

          {/* Statistics Section Title */}
          <h2 className='text-2xl font-bold mb-8'>Systemic Disparity Insights</h2>

          {/* Statistics Grid */}
          <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
            <div className='text-center'>
              <h3 className='text-3xl font-bold mb-4'>36%</h3>
              <p>
                By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to
                28 percent in fiscal year 2020.
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-3xl font-bold mb-4'>5%</h3>
              <p>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
            </div>
            <div className='text-center'>
              <h3 className='text-3xl font-bold mb-4'>6x Lower</h3>
              <p>Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.</p>
            </div>
          </div>

          {/* Read More and Back to Top Buttons */}
          <div className='flex flex-col items-center gap-4 mb-8'>
            <button onClick={handleReadMore} className='bg-[#666555] text-white px-6 py-2 rounded'>
              Read More
            </button>
            <button onClick={scrollToTop} className='text-gray-600'>
              Back To Top ↑
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
