import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import locationData from '../../User_Data/location_Data';

// Move navigatLocationData outside of the component to avoid re-creating it on each render
const navigatLocationData = [];
for (let i = 0; i < locationData.length; i++) {
  for (let j = i + 1; j < locationData.length; j++) {
    navigatLocationData.push({
      startLat: locationData[i].lat,
      startLng: locationData[i].lng,
      endLat: locationData[j].lat,
      endLng: locationData[j].lng,
    });
  }
}

const GlobeComponent = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = Globe()
      .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe@2.24.0/example/img/earth-blue-marble.jpg')
      .backgroundColor('black')
      .pointsData(locationData)
      .pointLat('lat')
      .pointLng('lng')
      .pointColor(() => 'red')
      .pointRadius(0.5)
      .pointAltitude(0.05)
      .htmlElementsData(locationData)
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
      .arcsData(navigatLocationData)
      .arcStartLat('startLat')
      .arcStartLng('startLng')
      .arcEndLat('endLat')
      .arcEndLng('endLng')
      .arcColor(() => ['blue', 'cyan', 'green', 'red'])
      .arcAltitude(() => 0.2)
      .arcStroke(() => 1)
      .arcDashLength(0.5)
      .arcDashGap(0.1)
      .arcDashAnimateTime(1000);

    const globeInstance = globe(globeRef.current);
    globeInstance.controls().minDistance = 100; // Minimum zoom-out distance
    globeInstance.controls().maxDistance = 300; // Maximum zoom-in distance

    // Set auto-rotation
    const controls = globeInstance.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1; // Adjust rotation speed

    // Stop rotation on hover
    globeRef.current.addEventListener('mouseenter', () => {
      controls.autoRotate = false;
    });

    // Resume rotation when hover ends
    globeRef.current.addEventListener('mouseleave', () => {
      controls.autoRotate = true;
    });

    // Handle resizing
    const handleResize = () => {
      const width = globeRef.current.offsetWidth;
      const height = globeRef.current.offsetHeight;
      globeInstance.width(width).height(height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Now there is no need to include navigatLocationData in the dependency array

  return (
    <div
      ref={globeRef}
      id="globeViz"
      style={{ width: '100%', height: '100%' }}
    ></div>
  );
};

export default GlobeComponent;
