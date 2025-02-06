import { useState } from 'react';
import { getMapView, mapTypes } from './getMapView.jsx';
import { GraphButtons } from '../../common/GraphButtons.jsx';
import { Loading } from '../../common/Loading.jsx';
import { getGraphsHeader } from './getGraphsHeader.js';

export const GraphsPage = () => {
  const [mapView, setMapView] = useState(mapTypes.ScatterPlot);

  return (
    <div className='secondary-c'>
      <div className='plot-main flex flex-col md:flex-row w-full md:w-[70%] gap-4 md:gap-10 mx-auto px-4 md:px-0 md:justify-end'>
        <div className='plot-main flex-c w-full'>
          <h1 className='py-5 text-xl md:text-2xl text-center md:text-left'>{getGraphsHeader(mapView)}</h1>
          <section className='maps overflow-x-auto'>
            <div className='min-w-[300px]'>{getMapView(mapView)}</div>
          </section>
        </div>
        <div className='w-full md:w-auto'>
          <GraphButtons mapView={mapView} setMapView={setMapView} />
        </div>
      </div>
      <Loading />
    </div>
  );
};
