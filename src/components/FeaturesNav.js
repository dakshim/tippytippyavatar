import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSettingsChange } from 'utils/shared';
import { settingsSelector, setSettings } from 'slices/settings';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { features } from 'lib/options';

const FeaturesNav = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = features.length/3;
    const {settings} = useSelector(settingsSelector);
    const {
        activeCustomization
    } = settings;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return(
    <>
        <div className="flex gap-2 md:h-auto items-center justify-center flex-row flex-wrap relative">
            {/*** Future Slide buttons */}
            <button
                    className="absolute hidden left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
                    disabled={currentSlide === 0}
                    onClick={prevSlide}
                >
                    <ChevronLeft className={`w-5 h-5 ${currentSlide === 0 ? 'text-gray-400' : 'text-gray-700'}`} />
            </button>
            <button
                className="absolute hidden right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
                disabled={currentSlide === totalSlides - 1}
                onClick={nextSlide}
            >
                <ChevronRight className={`w-5 h-5 ${currentSlide === totalSlides - 1 ? 'text-gray-400' : 'text-gray-700'}`} />
            </button>
            {/*** Future Slide Buttons */}
            
            <div className={`flex flex-wrap justify-center items-center p-4 md:p-2 gap-2 sm:gap-4 md:gap-2 lg:gap-4`} >
                {features.map((button) => {
                const IconComponent = button.icon;
                const isActive = activeCustomization === button.id;
                const buttonType = isActive ? 'primary' : 'default';
                
                return (
                    <button
                    key={button.id}
                    id={button.id}
                    onClick={() => handleSettingsChange('activeCustomization', button.id)}
                    type="button"
                    data-tooltip-id="tippy-tippy-tooltip" data-tooltip-content={button.name}
                    className={`tippy-tippy-btn block w-1/4 h-24 sm:h-28 md:h-28 lg:h-32 border-2 rounded-xl shadow-sm transition-all duration-200 flex flex-col items-center justify-center gap-2 active:scale-95 ${
                        buttonType === 'primary' 
                        ? 'bg-blue-500 border-blue-600 text-white shadow-md' 
                        : 'bg-white border-gray-200 text-gray-700 hover:shadow-md hover:border-blue-300 hover:bg-blue-50'
                    }`}
                    >
                    <IconComponent className="w-4 h-4 sm:w-8 sm:h-8" />
                    <span className="text-sm font-medium text-center px-2">
                        {button.name}
                    </span>
                    </button>
                );
                })}
            </div>
        </div>
    </>);
};
export default FeaturesNav;