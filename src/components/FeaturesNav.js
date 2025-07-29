import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSettingsChange } from 'utils/shared';
import { settingsSelector, setSettings } from 'slices/settings';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { features } from 'lib/options';

const FeaturesNav = ({ type = 'desktop' }) => {
    const {settings} = useSelector(settingsSelector);
    const {
        activeCustomization
    } = settings;


    return(
    <>
        <div className="flex gap-2 md:h-auto items-center justify-items-start md:justify-center flex-row flex-wrap relative">
            
            <div className={`flex flex-wrap justify-items-start md:justify-center items-center md:p-4 md:p-2  sm:gap-4 md:gap-2 lg:gap-4`} >
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
                    className={`tippy-tippy-btn block ${type == 'desktop' ? 'w-1/4 md:h-28 lg:h-32' : 'w-full h-16 sm:h-28'} border-b-2   md:border-2 md:rounded-xl shadow-sm transition-all duration-200 flex flex-col items-center justify-center gap-2 active:scale-95 ${
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