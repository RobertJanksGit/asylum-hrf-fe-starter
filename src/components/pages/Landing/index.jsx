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

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  // Open Human Rights First website
  const handleReadMore = () => {
    window.open('https://www.humanrightsfirst.org', '_blank');
  };

  return (
    <div className='flex flex-col items-center w-full'>
      {/* Title Section */}
      <div className='w-full primary-c text-white text-center py-8' role='banner'>
        <div className='max-w-[1200px] mx-auto px-4'>
          <h1 className='text-4xl font-bold mb-4'>Asylum Office Grant Rate Tracker</h1>
          <p className='text-lg'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on
            Asylum Office decisions
          </p>
        </div>
      </div>

      <div className='w-full secondary-c'>
        <main className='max-w-[1200px] w-full px-4 mx-auto pt-12' role='main'>
          {/* Graph Section */}
          <section className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8' aria-label='Data Visualization Options'>
            <div className='flex flex-col items-center'>
              <img src={barGraph} alt='Bar graph showing grant rates by office' className='h-32 object-contain mb-4' />
              <p className='text-center'>Search Grant Rates By Office</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={pieChart} alt='Pie chart showing grant rates by nationality' className='h-32 object-contain mb-4' />
              <p className='text-center'>Search Grant Rates By Nationality</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={lineGraph} alt='Line graph showing grant rates over time' className='h-32 object-contain mb-4' />
              <p className='text-center'>Search Grant Rates Over Time</p>
            </div>
          </section>

          {/* Action Buttons */}
          <div className='flex justify-center gap-4 mb-12' role='group' aria-label='Data Access Options'>
            <button
              className='bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              aria-label='View the data in interactive format'
            >
              View the Data
            </button>
            <button
              onClick={downloadCSV}
              className='bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              aria-label='Download the data in CSV format'
            >
              Download the Data
            </button>
          </div>

          {/* Info Section */}
          <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-16 mb-12' aria-label='About the Tool'>
            <img src={paperStack} alt='Stack of paper documents representing asylum decisions data' className='w-full h-auto rounded-lg shadow-md' />
            <div className='flex items-center justify-center'>
              <p className='text-center'>
                Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May
                2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant
                rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
              </p>
            </div>
          </section>

          {/* Statistics Section */}
          <section aria-labelledby='stats-heading'>
            <h2 id='stats-heading' className='text-2xl font-bold mb-8 text-center'>
              Systemic Disparity Insights
            </h2>

            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8' role='list'>
              <div className='text-center' role='listitem'>
                <h3 className='text-3xl font-bold mb-4'>36%</h3>
                <p>
                  By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016
                  to 28 percent in fiscal year 2020.
                </p>
              </div>
              <div className='text-center' role='listitem'>
                <h3 className='text-3xl font-bold mb-4'>5%</h3>
                <p>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
              </div>
              <div className='text-center' role='listitem'>
                <h3 className='text-3xl font-bold mb-4'>6x Lower</h3>
                <p>
                  Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
                </p>
              </div>
            </div>
          </section>

          {/* Read More and Back to Top Buttons */}
          <div className='flex flex-col items-center gap-4 mb-8'>
            <button
              onClick={handleReadMore}
              className='bg-[#666555] text-white px-6 py-2 rounded hover:bg-[#4d4c40] focus:ring-2 focus:ring-offset-2 focus:ring-[#666555]'
              aria-label='Read more about Human Rights First'
            >
              Read More
            </button>
            <button
              onClick={scrollToTop}
              className='text-gray-600 hover:text-gray-800 focus:outline-none focus:underline'
              aria-label='Scroll back to top of page'
            >
              Back To Top ↑
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
