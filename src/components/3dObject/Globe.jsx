import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

const GlobeComponent = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = Globe()
      .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe@2.24.0/example/img/earth-blue-marble.jpg')
      .backgroundColor('black')
      .pointsData([
        { lat: 40.7128, lng: -74.0060, name: 'New York' },
        { lat: 51.5074, lng: -0.1278, name: 'London' },
        { lat: 34.0522, lng: -118.2437, name: 'Los Angeles' },
        { lat: 35.6895, lng: 139.6917, name: 'Tokyo' },
      ])
      .pointLat('lat')
      .pointLng('lng')
      .pointColor(() => 'red')
      .pointRadius(0.1)
      .pointAltitude(0.05)
      .onPointClick((point) => alert(`You clicked on: ${point.name}`))

      // Add HTML elements for country names above the points
      .htmlElementsData([
        { lat: 40.7128, lng: -74.0060, name: 'New York' },
        { lat: 51.5074, lng: -0.1278, name: 'London' },
        { lat: 34.0522, lng: -118.2437, name: 'Los Angeles' },
        { lat: 35.6895, lng: 139.6917, name: 'Tokyo' },
      ])
      .htmlElement((d) => {
        const div = document.createElement('div');
        div.textContent = d.name;
        div.style.color = 'white';
        div.style.fontSize = '12px';
        return div;
      })
      .htmlLat('lat')
      .htmlLng('lng')
      .htmlAltitude(0.1)
      .htmlTransitionDuration(1000);

    globe(globeRef.current);

    const handleResize = () => {
      const width = globeRef.current.offsetWidth;
      const height = globeRef.current.offsetHeight;
      console.log(width,height)
      globe.width(width).height(height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={globeRef}
      id="globeViz"
      style={{ width: '100%', height: '100%' }}
    ></div>
  );
};

export default GlobeComponent;
