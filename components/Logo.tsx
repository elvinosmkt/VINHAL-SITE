import React from 'react';

interface LogoProps {
    className?: string;
    scrolled?: boolean;
    light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", scrolled = false, light = false }) => {
    // We want the white version when:
    // 1. It's in the footer (light=true, footer is dark)
    // 2. Translucent navbar at top (scrolled=false, hero is dark)
    const showWhite = light || !scrolled;

    return (
        <div className={`flex flex-col items-center md:items-start ${className}`}>
            <img
                src="/assets/logo.png"
                alt="Instituto Acadêmico Vinhal"
                className={`h-12 md:h-16 w-auto object-contain transition-all duration-300 ${showWhite ? 'brightness-0 invert' : ''
                    }`}
            />
        </div>
    );
};

export default Logo;
