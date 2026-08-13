import React from 'react';

interface CommunityVectorBannerProps {
  color?: string; // e.g. '#103642' for banner bg color
  cutoutColor?: string; // e.g. '#F4F6F9' for page background cutouts
  height?: number;
  className?: string;
}

export const CommunityVectorBanner: React.FC<CommunityVectorBannerProps> = ({
  color = '#103642',
  cutoutColor = '#F4F6F9',
  height = 85,
  className = '',
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none bg-[#fff] ${className}`}>
      <svg
        className="w-full block"
        style={{ height: `${height}px` }}
        viewBox="0 0 1360 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="navyDenseCommunityVectorPattern"
            width="340"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* 1. HOUSE WITH EARTH IN HANDS SILHOUETTE (X: 6) */}
            <g transform="translate(6, 14)">
              {/* Roof Structure */}
              <path d="M 22 5 L 42 20 L 38 20 L 38 9 L 33 9 L 33 16 L 22 8 L 3 20 L 7 23 L 22 10 Z" fill={color} />
              <path d="M 22 10 L 40 24 L 36 27 L 22 16 L 8 27 L 4 24 Z" fill={color} />
              
              {/* Globe inside House */}
              <circle cx="22" cy="32" r="10" fill="none" stroke={color} strokeWidth="2" />
              <ellipse cx="22" cy="32" rx="5" ry="9.5" fill="none" stroke={color} strokeWidth="1.2" />
              <line x1="12" y1="32" x2="32" y2="32" stroke={color} strokeWidth="1.2" />

              {/* Caring Hands Cradling House */}
              <path d="M 3 48 C 7 37 12 32 17 35 C 20 37 18 43 14 50 C 9 55 6 55 3 48 Z" fill={color} />
              <path d="M 41 48 C 37 37 32 32 27 35 C 24 37 26 43 30 50 C 35 55 38 55 41 48 Z" fill={color} />
              <path d="M 7 53 C 15 62 29 62 37 53 C 33 65 11 65 7 53 Z" fill={color} />
            </g>

            {/* 2. DENSE FAMILY SILHOUETTE CHAIN (Father, Child, Mother, Child, Father) (X: 58) */}
            <g transform="translate(58, 10)">
              {/* Father 1 */}
              <circle cx="18" cy="11" r="4.8" fill={color} />
              <path d="M 11 21 C 11 18 14 17 18 17 C 22 17 25 18 25 21 L 26 42 H 22 L 21 72 H 15 L 14 42 H 10 Z" fill={color} />

              {/* Child 1 */}
              <circle cx="35" cy="30" r="3.5" fill={color} />
              <path d="M 30 37 C 30 35 32 34 35 34 C 38 34 40 35 40 37 L 41 50 H 38 L 37 72 H 33 L 32 50 H 29 Z" fill={color} />

              {/* Mother */}
              <circle cx="54" cy="13" r="4.5" fill={color} />
              <path d="M 48 22 C 48 19 51 18 54 18 C 57 18 60 19 60 22 L 64 45 C 61 49 47 49 44 45 L 48 22 Z" fill={color} />
              <path d="M 49 45 L 46 72 H 52 L 54 48 L 56 72 H 62 L 59 45 Z" fill={color} />

              {/* Child 2 */}
              <circle cx="73" cy="30" r="3.5" fill={color} />
              <path d="M 68 37 C 68 35 70 34 73 34 C 76 34 78 35 78 37 L 79 50 H 76 L 75 72 H 71 L 70 50 H 67 Z" fill={color} />

              {/* Father 2 */}
              <circle cx="91" cy="11" r="4.8" fill={color} />
              <path d="M 84 21 C 84 18 87 17 91 17 C 95 17 98 18 98 21 L 99 42 H 95 L 94 72 H 88 L 87 42 H 83 Z" fill={color} />

              {/* Linked Arms */}
              <path d="M 20 27 Q 28 37 34 37 Q 46 37 51 27 Q 59 37 71 37 Q 82 37 88 27" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
            </g>

            {/* 3. DENSE BANYAN TREE OF LIFE SILHOUETTE (X: 168) */}
            <g transform="translate(168, 2)">
              {/* Roots */}
              <path d="M 40 82 C 28 87 14 95 4 100 C 19 94 34 88 42 82 Z" fill={color} />
              <path d="M 50 82 C 62 87 76 95 86 100 C 71 94 56 88 48 82 Z" fill={color} />
              <path d="M 45 76 C 34 87 23 100 18 104 C 29 95 39 86 43 79 Z" fill={color} />
              <path d="M 45 76 C 56 87 67 100 72 104 C 61 95 51 86 47 79 Z" fill={color} />

              {/* Trunk */}
              <path d="M 38 82 C 36 60 29 48 19 36 C 29 45 38 54 42 70 Z" fill={color} />
              <path d="M 52 82 C 54 60 61 48 71 36 C 61 45 52 54 48 70 Z" fill={color} />
              <path d="M 43 76 C 45 54 45 42 45 26 C 45 42 45 54 47 76 Z" fill={color} opacity="0.9" />

              {/* Canopy Circles */}
              <circle cx="45" cy="24" r="24" fill={color} />
              <circle cx="27" cy="30" r="18" fill={color} />
              <circle cx="63" cy="30" r="18" fill={color} />
              <circle cx="16" cy="40" r="13" fill={color} />
              <circle cx="74" cy="40" r="13" fill={color} />

              {/* Leaf Cutout Details inside Canopy */}
              <path d="M 45 4 C 40 12 40 21 45 28 C 50 21 50 12 45 4 Z" fill={cutoutColor} />
              <path d="M 29 12 C 26 19 30 26 37 30 C 34 23 31 16 29 12 Z" fill={cutoutColor} />
              <path d="M 61 12 C 64 19 60 26 53 30 C 56 23 59 16 61 12 Z" fill={cutoutColor} />

              {/* Hanging Aerial Roots */}
              <path d="M 23 40 V 66 M 31 36 V 62 M 59 36 V 62 M 67 40 V 66" stroke={cutoutColor} strokeWidth="1.6" strokeLinecap="round" />

              {/* Education Mortarboard Cap Badge */}
              <g transform="translate(60, 8) scale(0.6)">
                <polygon points="12,2 24,8 12,14 0,8" fill={cutoutColor} />
                <rect x="6" y="9" width="12" height="6" rx="1" fill={cutoutColor} />
                <path d="M 22 9 V 18" stroke={cutoutColor} strokeWidth="1.5" />
              </g>

              {/* Clean Energy/Water Leaf Badge */}
              <g transform="translate(14, 8) scale(0.6)">
                <path d="M 10 2 C 3 8 3 16 10 20 C 17 16 17 8 10 2 Z" fill={cutoutColor} />
                <path d="M 10 7 L 8 13 H 11 L 9 17" stroke={color} strokeWidth="1.5" fill="none" strokeLinejoin="round" />
              </g>
            </g>

            {/* 4. SECOND DENSE FAMILY SILHOUETTE CHAIN (X: 255) */}
            <g transform="translate(255, 10)">
              {/* Father 1 */}
              <circle cx="18" cy="11" r="4.8" fill={color} />
              <path d="M 11 21 C 11 18 14 17 18 17 C 22 17 25 18 25 21 L 26 42 H 22 L 21 72 H 15 L 14 42 H 10 Z" fill={color} />

              {/* Child 1 */}
              <circle cx="35" cy="30" r="3.5" fill={color} />
              <path d="M 30 37 C 30 35 32 34 35 34 C 38 34 40 35 40 37 L 41 50 H 38 L 37 72 H 33 L 32 50 H 29 Z" fill={color} />

              {/* Mother */}
              <circle cx="54" cy="13" r="4.5" fill={color} />
              <path d="M 48 22 C 48 19 51 18 54 18 C 57 18 60 19 60 22 L 64 45 C 61 49 47 49 44 45 L 48 22 Z" fill={color} />
              <path d="M 49 45 L 46 72 H 52 L 54 48 L 56 72 H 62 L 59 45 Z" fill={color} />

              {/* Child 2 */}
              <circle cx="73" cy="30" r="3.5" fill={color} />
              <path d="M 68 37 C 68 35 70 34 73 34 C 76 34 78 35 78 37 L 79 50 H 76 L 75 72 H 71 L 70 50 H 67 Z" fill={color} />

              {/* Father 2 */}
              <circle cx="91" cy="11" r="4.8" fill={color} />
              <path d="M 84 21 C 84 18 87 17 91 17 C 95 17 98 18 98 21 L 99 42 H 95 L 94 72 H 88 L 87 42 H 83 Z" fill={color} />

              {/* Linked Arms */}
              <path d="M 20 27 Q 28 37 34 37 Q 46 37 51 27 Q 59 37 71 37 Q 82 37 88 27" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
            </g>

            {/* GROUND BASELINE MERGING SEAMLESSLY INTO STATSBANNER */}
            <rect x="0" y="90" width="340" height="30" fill={color} />
          </pattern>
        </defs>

        <rect width="1360" height="120" fill="url(#navyDenseCommunityVectorPattern)" />
      </svg>
    </div>
  );
};

export default CommunityVectorBanner;
