import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import '../../styles/WorldView.css';

export default function WorldView() {
    const globeRef = useRef<any>(null);
    const [countries, setCountries] = useState<any>({ features: [] });

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.5;
            globeRef.current.controls().enableZoom = false;
        }
    }, []);

    return (
        <div className="world-view-container">
            <div className="world-view-header">
                <span className="world-view-title">WORLD VIEW</span>
                <span className="world-view-subtitle">ENDPOINT LAT/LON</span>
            </div>
            <Globe
                ref={globeRef}
                width={260}
                height={260}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl=""
                showGlobe={false}
                showAtmosphere={true}
                atmosphereColor="#00d4ff"
                atmosphereAltitude={0.12}
                hexPolygonsData={countries.features}
                hexPolygonResolution={3}
                hexPolygonMargin={0.3}
                hexPolygonColor={() => 'rgba(0, 212, 255, 0.8)'}
                hexPolygonAltitude={0.01}
            />
        </div>
    );
}
