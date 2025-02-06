import { useAppContext } from '../../context/AppContext.jsx';
import { mapTypes } from '../pages/DataVisualizations/getMapView.jsx';

const { ScatterPlot, ChoroplethMap, HeatMap } = mapTypes;

export const GraphButtons = ({ mapView, setMapView }) => {
  const { updateQuery, clearQuery } = useAppContext();

  return (
    <section className='data-buttons flex-c justify-center gap-4 md:gap-6 p-4 md:p-0'>
      <section className='plot-buttons flex-c gap-2 md:gap-1 w-full md:w-auto'>
        <button
          className='scatter-plot bg-white p-2 md:p-1 text-black border-2 rounded-md md:rounded-none w-full md:w-auto text-sm md:text-base'
          disabled={mapView === ScatterPlot}
          onClick={() => setMapView(ScatterPlot)}
        >
          Time Series
        </button>
        <button
          className='heat-map bg-white p-2 md:p-1 text-black border-2 rounded-md md:rounded-none w-full md:w-auto text-sm md:text-base'
          disabled={mapView === HeatMap}
          onClick={() => setMapView(HeatMap)}
        >
          USCIS Asylum Offices Heat Map
        </button>
        <button
          className='choropleth-map bg-white p-2 md:p-1 text-black border-2 rounded-md md:rounded-none w-full md:w-auto text-sm md:text-base'
          disabled={mapView === ChoroplethMap}
          onClick={() => setMapView(ChoroplethMap)}
        >
          Citizenship of Asylum Seeker
        </button>
      </section>

      <section className='query-buttons flex-c gap-2 md:gap-1 w-full md:w-auto'>
        <button
          className='update-query primary-c text-amber-50 p-2 md:p-1 rounded-md md:rounded-none w-full md:w-auto text-sm md:text-base'
          onClick={updateQuery}
        >
          Update Query
        </button>
        <button
          className='clear-query primary-c text-amber-50 p-2 md:p-1 rounded-md md:rounded-none w-full md:w-auto text-sm md:text-base'
          onClick={clearQuery}
        >
          Clear Query
        </button>
      </section>
    </section>
  );
};
