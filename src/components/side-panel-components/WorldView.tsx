import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import '../../styles/WorldView.css';

const ALL_ARCS = [
    // Warsaw hub
    { startLat: 52.2,  startLng: 21.0,   endLat: 37.8,  endLng: -122.4 }, // → SF
    { startLat: 52.2,  startLng: 21.0,   endLat: 51.5,  endLng: -0.1   }, // → London
    { startLat: 52.2,  startLng: 21.0,   endLat: 35.7,  endLng: 139.7  }, // → Tokyo
    { startLat: 52.2,  startLng: 21.0,   endLat: -33.9, endLng: 18.4   }, // → Cape Town
    { startLat: 52.2,  startLng: 21.0,   endLat: 40.7,  endLng: -74.0  }, // → NY
    { startLat: 52.2,  startLng: 21.0,   endLat: -23.5, endLng: -46.6  }, // → São Paulo
    { startLat: 52.2,  startLng: 21.0,   endLat: 19.4,  endLng: -99.1  }, // → Mexico City
    { startLat: 52.2,  startLng: 21.0,   endLat: 25.2,  endLng: 55.3   }, // → Dubai
    { startLat: 52.2,  startLng: 21.0,   endLat: 28.6,  endLng: 77.2   }, // → New Delhi
    { startLat: 52.2,  startLng: 21.0,   endLat: -33.9, endLng: 151.2  }, // → Sydney
    // Americas
    { startLat: 37.8,  startLng: -122.4, endLat: 51.5,  endLng: -0.1   }, // SF → London
    { startLat: 37.8,  startLng: -122.4, endLat: 35.7,  endLng: 139.7  }, // SF → Tokyo
    { startLat: 37.8,  startLng: -122.4, endLat: -33.9, endLng: 151.2  }, // SF → Sydney
    { startLat: 40.7,  startLng: -74.0,  endLat: -23.5, endLng: -46.6  }, // NY → São Paulo
    { startLat: 40.7,  startLng: -74.0,  endLat: 51.5,  endLng: -0.1   }, // NY → London
    { startLat: 40.7,  startLng: -74.0,  endLat: 48.9,  endLng: 2.3    }, // NY → Paris
    { startLat: -23.5, startLng: -46.6,  endLat: 51.5,  endLng: -0.1   }, // São Paulo → London
    { startLat: -23.5, startLng: -46.6,  endLat: 37.8,  endLng: -122.4 }, // São Paulo → SF
    // Europe
    { startLat: 51.5,  startLng: -0.1,   endLat: 35.7,  endLng: 139.7  }, // London → Tokyo
    { startLat: 51.5,  startLng: -0.1,   endLat: 28.6,  endLng: 77.2   }, // London → Delhi
    { startLat: 51.5,  startLng: -0.1,   endLat: 1.3,   endLng: 103.8  }, // London → Singapore
    { startLat: 48.9,  startLng: 2.3,    endLat: 52.2,  endLng: 21.0   }, // Paris → Warsaw
    { startLat: 48.9,  startLng: 2.3,    endLat: 25.2,  endLng: 55.3   }, // Paris → Dubai
    { startLat: 55.7,  startLng: 37.6,   endLat: 35.7,  endLng: 139.7  }, // Moscow → Tokyo
    { startLat: 55.7,  startLng: 37.6,   endLat: 39.9,  endLng: 116.4  }, // Moscow → Beijing
    { startLat: 52.5,  startLng: 13.4,   endLat: 37.8,  endLng: -122.4 }, // Berlin → SF
    { startLat: 41.9,  startLng: 12.5,   endLat: 40.7,  endLng: -74.0  }, // Rome → NY
    // Asia & Pacific
    { startLat: 35.7,  startLng: 139.7,  endLat: -33.9, endLng: 151.2  }, // Tokyo → Sydney
    { startLat: 35.7,  startLng: 139.7,  endLat: 37.8,  endLng: -122.4 }, // Tokyo → SF
    { startLat: 35.7,  startLng: 139.7,  endLat: 1.3,   endLng: 103.8  }, // Tokyo → Singapore
    { startLat: 39.9,  startLng: 116.4,  endLat: 37.8,  endLng: -122.4 }, // Beijing → SF
    { startLat: 39.9,  startLng: 116.4,  endLat: 51.5,  endLng: -0.1   }, // Beijing → London
    { startLat: 1.3,   startLng: 103.8,  endLat: 37.8,  endLng: -122.4 }, // Singapore → SF
    { startLat: 1.3,   startLng: 103.8,  endLat: 28.6,  endLng: 77.2   }, // Singapore → Delhi
    { startLat: 25.2,  startLng: 55.3,   endLat: 51.5,  endLng: -0.1   }, // Dubai → London
    { startLat: 25.2,  startLng: 55.3,   endLat: 40.7,  endLng: -74.0  }, // Dubai → NY
    { startLat: 28.6,  startLng: 77.2,   endLat: 37.8,  endLng: -122.4 }, // Delhi → SF
    // Africa
    { startLat: -33.9, startLng: 18.4,   endLat: 1.3,   endLng: 103.8  }, // Cape Town → Singapore
    { startLat: -33.9, startLng: 18.4,   endLat: 51.5,  endLng: -0.1   }, // Cape Town → London
    { startLat: -1.3,  startLng: 36.8,   endLat: 25.2,  endLng: 55.3   }, // Nairobi → Dubai
    { startLat: 30.1,  startLng: 31.2,   endLat: 51.5,  endLng: -0.1   }, // Cairo → London
];

const BASE_COLORS: [number, number, number][] = [
    [0, 212, 255],
    [0, 255, 170],
    [255, 107, 53],
    [255, 255, 255],
    [167, 139, 250],
];

const FADE_DURATION = 700;

interface ArcInstance {
    id: number;
    startLat: number; startLng: number;
    endLat: number;   endLng: number;
    baseColor: [number, number, number];
    born: number;
    lifetime: number;
}

let arcIdCounter = 0;

export default function WorldView() {
    const globeRef = useRef<any>(null);
    const [countries, setCountries] = useState<any>({ features: [] });
    const arcPoolRef = useRef<ArcInstance[]>([]);
    const [displayArcs, setDisplayArcs] = useState<ArcInstance[]>([]);

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

    // Spawn arcs at random intervals
    useEffect(() => {
        const timerRef = { current: null as ReturnType<typeof setTimeout> | null };

        const spawnArc = () => {
            const template = ALL_ARCS[Math.floor(Math.random() * ALL_ARCS.length)];
            const baseColor = BASE_COLORS[Math.floor(Math.random() * BASE_COLORS.length)];
            arcPoolRef.current = [
                ...arcPoolRef.current,
                { id: arcIdCounter++, ...template, baseColor, born: Date.now(), lifetime: 2500 + Math.random() * 2000 },
            ];
        };

        const schedule = () => {
            const delay = 300 + Math.random() * 900;
            timerRef.current = setTimeout(() => { spawnArc(); schedule(); }, delay);
        };

        schedule();
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, []);

    // Tick loop: prune dead arcs and push updated list to state
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            arcPoolRef.current = arcPoolRef.current.filter(a => now - a.born < a.lifetime);
            setDisplayArcs([...arcPoolRef.current]);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const arcColor = (arc: any): string => {
        const now = Date.now();
        const elapsed = now - arc.born;
        const remaining = arc.lifetime - elapsed;
        let opacity = 1;
        if (elapsed < FADE_DURATION)   opacity = elapsed / FADE_DURATION;
        if (remaining < FADE_DURATION) opacity = Math.min(opacity, remaining / FADE_DURATION);
        opacity = Math.max(0, Math.min(1, opacity));
        const [r, g, b] = arc.baseColor;
        return `rgba(${r},${g},${b},${opacity})`;
    };

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
                arcsData={displayArcs}
                arcColor={arcColor}
                arcAltitude={0.3}
                arcStroke={0.5}
                arcDashLength={0.4}
                arcDashGap={0.15}
                arcDashAnimateTime={1800}
            />
        </div>
    );
}
