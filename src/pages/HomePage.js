import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { handleSettingsChange } from 'utils/shared';
import Avatar from 'components/Avatar';
import FeaturesNav from 'components/FeaturesNav';
import { useDispatch, useSelector } from 'react-redux';
import { settingsSelector, setSettings } from '../slices/settings'
import { features, skinColors, backgroundColors, eyes, facialHairs, fabricColors, mouths, clothing } from 'lib/options';

const HomePage = () => {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState("TippyTippy Avatar_" + Date.now());
  const [editing, setEditing] = useState(false);

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false);
  const {settings} = useSelector(settingsSelector);
  const {
    activeCustomization,
    skinColor
  } = settings;


  return (
    <>
    <div className="min-h-screen flex flex-col">
      {/* Topbar */}
      <header className="flex justify-center items-center  bg-gradient-to-r from-sky-500 to-indigo-500  text-white px-6 py-3">
        <div className="tippy-tippy-logo text-lg"><span className="tippy-tippy-brand">TippyTippy</span> Avatar</div>
        {/* <button className="hover:underline">Help</button> */}
      </header>

      {/* Second Row - 3 Columns */}
      {/* <section className="flex flex-col md:flex-row px-6 py-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex justify-start md:w-1/3 space-x-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Open
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>

        <div className="flex justify-center items-center md:w-1/3">
            <div className="flex items-center justify-center ">
              {editing ? (
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  onBlur={handleSave}
                  onKeyDown={(e) => e.key === "Enter" && handleSave()}
                  className="border rounded px-3 py-1 w-48"
                  autoFocus
                />
              ) : (
                <span
                  onClick={handleEdit}
                  className="cursor-pointer border-b border-dotted border-gray-600"
                  title="Click to edit project name"
                >
                  {projectName}
                </span>
              )}
            </div>
        </div>

        <div className="flex justify-end md:w-1/3">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            Share
          </button>
        </div>
      </section> */}

      {/* New 3-Column Row */}
      <section className="flex flex-grow flex-col xl:flex-row gap-0 sm:gap-4 px-0 py-0 md:px-4 sm:py-6 bg-white">
            <div className="tippy-tippy-col flex-col flex-1 bg-blue-50 rounded shadow min-h-[120px] flex items-center justify-center p-0 sm:p-4 md:p-8"><Avatar activeCustomization={activeCustomization} /></div>
            <div className="tippy-tippy-col flex-col flex-1 bg-blue-50 rounded shadow min-h-[120px] flex items-center justify-center p-0 sm:p-4 md:p-8 gap-4">
              <FeaturesNav />
            </div>
            <div className="tippy-tippy-col flex-col flex-1 bg-blue-50 rounded shadow min-h-[120px] flex items-center justify-center p-4 md:p-8">
              <div id='options_wrap'>

                {(activeCustomization === 'eyes') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT EYES</div>
                  <div id="options_div">
                    {eyes.map((eye) => {
                      const EyeComponent = eye.icon;
                      return (
                        <div className="eyes tippy-tippy-option" id={eye.id} data-tooltip-id="tippy-tippy-tooltip" data-tooltip-content={eye.name} onClick={() => handleSettingsChange('eyes', eye.id)} style={{"backgroundColor": skinColor}} key={eye.id}>
                          {eye.icon && <EyeComponent className="eyes-svg" />}
                        </div>
                      );
                    })}
                  </div>
                </div>}
                {(activeCustomization === 'eyes') &&  <div id='options' className='flex flex-col gap-4'>
                    <div id='options_title'>SELECT EYEBROWS</div>
                    <div id="options_div">
                        <div className="eyebrows" id="eb_default" onClick={() => handleSettingsChange('eyebrows','eb_default')} style={{ backgroundColor: skinColor, backgroundPosition: "0px -53px" }}/>
                        <div className="eyebrows" id="eb_default2" onClick={() => handleSettingsChange('eyebrows','eb_default2')} style={{ backgroundColor: skinColor, backgroundPosition: "-53px -53px" }}/>
                        <div className="eyebrows" id="eb_raised" onClick={() => handleSettingsChange('eyebrows','eb_raised')} style={{ backgroundColor: skinColor, backgroundPosition: "-106px -53px" }}/>
                        <div className="eyebrows" id="eb_sad" onClick={() => handleSettingsChange('eyebrows','eb_sad')} style={{ backgroundColor: skinColor, backgroundPosition: "-159px -53px" }}/>
                        <div className="eyebrows" id="eb_sad2" onClick={() => handleSettingsChange('eyebrows','eb_sad2')} style={{ backgroundColor: skinColor, backgroundPosition: "-212px -53px" }}/>
                        <div className="eyebrows" id="eb_unibrow" onClick={() => handleSettingsChange('eyebrows','eb_unibrow')} style={{ backgroundColor: skinColor, backgroundPosition: "-265px -53px" }}/>
                        <div className="eyebrows" id="eb_updown" onClick={() => handleSettingsChange('eyebrows','eb_updown')} style={{ backgroundColor: skinColor, backgroundPosition: "-318px -53px" }}/>
                        <div className="eyebrows" id="eb_updown2" onClick={() => handleSettingsChange('eyebrows','eb_updown2')} style={{ backgroundColor: skinColor, backgroundPosition: "-371px -53px" }}/>
                        <div className="eyebrows" id="eb_angry" onClick={() => handleSettingsChange('eyebrows','eb_angry')} style={{ backgroundColor: skinColor, backgroundPosition: "-424px -53px" }}/>
                        <div className="eyebrows" id="eb_angry2" onClick={() => handleSettingsChange('eyebrows','eb_angry2')} style={{ backgroundColor: skinColor, backgroundPosition: "-477px -53px" }}/>
                    </div>
              </div>}
              {(activeCustomization === 'mouth') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT MOUTH</div>
                <div id="options_div">
                    {mouths.map((mouth) => {
                      const MouthComponent = mouth.icon;
                      return (
                        <div className="mouths tippy-tippy-option" id={mouth.id} data-tooltip-id="tippy-tippy-tooltip" data-tooltip-content={mouth.name} onClick={() => handleSettingsChange('mouth', mouth.id)} style={{"backgroundColor": skinColor}} key={mouth.id}>
                          {mouth.icon && <MouthComponent className="mouths-svg" />}
                        </div>
                      );
                    })}
                </div>
              </div>}
              {(activeCustomization === 'hairstyles') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT HAIR STYLES</div>
                <div id="options_div">
                  <div className="hairstyles" id="h_bold" onClick={() => {handleSettingsChange('hairBack','h_bold'); handleSettingsChange('hairFront','h_bold'); }}  style={{"backgroundColor":"#ffffff","backgroundPosition":"0px -159px"}} />
                  <div className="hairstyles" id="h_longhair" onClick={() => {handleSettingsChange('hairBack','h_longhair'); handleSettingsChange('hairFront','h_longhair');}} style={{"backgroundColor":"#ffffff","backgroundPosition":"-53px -159px"}} />
                  <div className="hairstyles" id="h_longhairbob" onClick={() => {handleSettingsChange('hairBack','h_longhairbob'); handleSettingsChange('hairFront','h_longhairbob');}}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-106px -159px"}} />
                  <div className="hairstyles" id="h_hairbun" onClick={() => {handleSettingsChange('hairBack','h_hairbun'); handleSettingsChange('hairFront','h_hairbun');}} style={{"backgroundColor":"#ffffff","backgroundPosition":"-159px -159px"}} />
                  <div className="hairstyles" id="h_longhaircurly" onClick={() => {handleSettingsChange('hairBack','h_longhaircurly'); handleSettingsChange('hairFront','h_longhaircurly')}}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-212px -159px"}} />
                  <div className="hairstyles" id="h_longhaircurvy" onClick={() => {handleSettingsChange('hairBack','h_longhaircurvy'); handleSettingsChange('hairFront','h_longhaircurvy')}} style={{"backgroundColor":"#ffffff","backgroundPosition":"-265px -159px"}} />
                  <div className="hairstyles" id="h_longhairdread" onClick={() => {handleSettingsChange('hairBack','h_longhairdread'); handleSettingsChange('hairFront','h_longhairdread')}}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-318px -159px"}} />
                  <div className="hairstyles" id="h_nottoolong" onClick={() => {handleSettingsChange('hairBack','h_nottoolong'); handleSettingsChange('hairFront','h_nottoolong')}} style={{"backgroundColor":"#ffffff","backgroundPosition":"-371px -159px"}} />
                  <div className="hairstyles" id="h_miawallace" onClick={() => {handleSettingsChange('hairBack','h_miawallace'); handleSettingsChange('hairFront','h_miawallace');}}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-424px -159px"}} />
                  <div className="hairstyles" id="h_longhairstraight" onClick={() => {handleSettingsChange('hairBack','h_longhairstraight'); handleSettingsChange('hairFront','h_longhairstraight')}} style={{"backgroundColor":"#ffffff","backgroundPosition":"-477px -159px"}} />
                  <div className="hairstyles" id="h_longhairstraight2" onClick={() => {handleSettingsChange('hairBack','h_longhairstraight2'); handleSettingsChange('hairFront','h_longhairstraight2')}}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-530px -159px"}} />
                  <div className="hairstyles" id="h_shorthairdreads" onClick={() => {handleSettingsChange('hairBack','h_shorthairdreads'); handleSettingsChange('hairFront','h_shorthairdreads')}} style={{"backgroundColor":"#ffffff","backgroundPosition":"-583px -159px"}} />
                  <div className="hairstyles" id="h_shorthairdreads2" onClick={() => {handleSettingsChange('hairBack','h_shorthairdreads2'); handleSettingsChange('hairFront','h_shorthairdreads2')}}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-636px -159px"}} />
                  <div className="hairstyles" id="h_shorthairfrizzle" onClick={() => {handleSettingsChange('hairBack','h_shorthairfrizzle'); handleSettingsChange('hairFront','h_shorthairfrizzle')}} style={{"backgroundColor":"#ffffff","backgroundPosition":"-689px -159px"}} />
                  <div className="hairstyles" id="h_shorthairshaggy" onClick={() => {handleSettingsChange('hairBack','h_shorthairshaggy'); handleSettingsChange('hairFront','h_shorthairshaggy')}}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-742px -159px"}} />
                  <div className="hairstyles" id="h_shorthaircurly" onClick={() => {handleSettingsChange('hairBack','h_shorthaircurly'); handleSettingsChange('hairFront','h_shorthaircurly')}} style={{"backgroundColor":"#ffffff","backgroundPosition":"-795px -159px"}} />
                  <div className="hairstyles" id="h_shorthairflat" onClick={() => {handleSettingsChange('hairBack','h_shorthairflat'); handleSettingsChange('hairFront','h_shorthairflat')}}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-848px -159px"}} />
                  <div className="hairstyles" id="h_shorthairround" onClick={() => {handleSettingsChange('hairBack','h_shorthairround'); handleSettingsChange('hairFront','h_shorthairround')}} style={{"backgroundColor":"#ffffff","backgroundPosition":"-901px -159px"}} />
                  <div className="hairstyles" id="h_shorthairwaved" onClick={() => {handleSettingsChange('hairBack','h_shorthairwaved'); handleSettingsChange('hairFront','h_shorthairwaved')}}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-954px -159px"}} />
                  <div className="hairstyles" id="h_shorthairsides" onClick={() => {handleSettingsChange('hairBack','h_shorthairsides'); handleSettingsChange('hairFront','h_shorthairsides')}} style={{"backgroundColor":"#ffffff","backgroundPosition":"-1007px -159px"}} />
                </div>
              </div>}
              {(activeCustomization === 'hairstyles') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT HAIR COLOR</div>
                <div id="options_div">
                  <div className="haircolors" id="hc_bb7748_9a4f2b_6f2912" onClick={() => {handleSettingsChange('hairColor1',"#bb7748"); handleSettingsChange('hairColor2',"#9a4f2b"); handleSettingsChange('hairColor3',"#6f2912");}} style={{"backgroundColor":"#bb7748"}} />
                  <div className="haircolors" id="hc_404040_262626_101010" onClick={() => {handleSettingsChange('hairColor1',"#404040"); handleSettingsChange('hairColor2',"#262626"); handleSettingsChange('hairColor3',"#101010");}} style={{"backgroundColor":"#404040"}} />
                  <div className="haircolors" id="hc_c79d63_ab733e_844713" onClick={() => {handleSettingsChange('hairColor1',"#c79d63"); handleSettingsChange('hairColor2',"#ab733e"); handleSettingsChange('hairColor3',"#844713");}} style={{"backgroundColor":"#c79d63"}} />
                  <div className="haircolors" id="hc_e1c68e_d0a964_b88339" onClick={() => {handleSettingsChange('hairColor1',"#e1c68e"); handleSettingsChange('hairColor2',"#d0a964"); handleSettingsChange('hairColor3',"#b88339");}} style={{"backgroundColor":"#e1c68e"}} />
                  <div className="haircolors" id="hc_906253_663d32_3b1d16" onClick={() => {handleSettingsChange('hairColor1',"#906253"); handleSettingsChange('hairColor2',"#663d32"); handleSettingsChange('hairColor3',"#3b1d16");}} style={{"backgroundColor":"#906253"}} />
                  <div className="haircolors" id="hc_f8afaf_f48a8a_ed5e5e" onClick={() => {handleSettingsChange('hairColor1',"#f8afaf"); handleSettingsChange('hairColor2',"#f48a8a"); handleSettingsChange('hairColor3',"#ed5e5e");}} style={{"backgroundColor":"#f8afaf"}} />
                  <div className="haircolors" id="hc_f1e6cf_e9d8b6_dec393" onClick={() => {handleSettingsChange('hairColor1',"#f1e6cf"); handleSettingsChange('hairColor2',"#e9d8b6"); handleSettingsChange('hairColor3',"#dec393");}} style={{"backgroundColor":"#f1e6cf"}} />
                  <div className="haircolors" id="hc_d75324_c13215_a31608" onClick={() => {handleSettingsChange('hairColor1',"#d75324"); handleSettingsChange('hairColor2',"#c13215"); handleSettingsChange('hairColor3',"#a31608");}} style={{"backgroundColor":"#d75324"}} />
                  <div className="haircolors" id="hc_59a0ff_3777ff_194bff" onClick={() => {handleSettingsChange('hairColor1',"#59a0ff"); handleSettingsChange('hairColor2',"#3777ff"); handleSettingsChange('hairColor3',"#194bff");}} style={{"backgroundColor":"#59a0ff"}} />
                </div>
              </div>}

              {(activeCustomization === 'facialhairs') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT FACIAL HAIR</div>
                <div id="options_div">
                  {facialHairs.map((hair) => {
                      const HairComponent = hair.icon;
                      return (
                        <div className="facialhairs tippy-tippy-option" id={hair.id} data-tooltip-id="tippy-tippy-tooltip" data-tooltip-content={hair.name} onClick={() => handleSettingsChange('facialHair', hair.id)} style={{"backgroundColor": skinColor}} key={hair.id}>
                          {hair.icon && <HairComponent className="facialhairs-svg" />}
                        </div>
                      );
                    })}
                </div>
              </div>}
              {(activeCustomization === 'clothes') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT CLOTHES</div>
                <div id="options_div">
                  { clothing.map((cloth) => {
                    const ClothComponent = cloth.icon;
                    return (
                      <div className="clothes tippy-tippy-option bg-white" id={cloth.id} data-tooltip-id="tippy-tippy-tooltip" data-tooltip-content={cloth.name} onClick={() => handleSettingsChange('cloth', cloth.id)}  key={cloth.id}>
                        {cloth.icon && <ClothComponent className="clothes-svg" />}
                      </div>
                    );
                  })}
                </div>
              </div>}
              {(activeCustomization === 'clothes') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT FABRIC COLOR</div>
                <div id="options_div">
                  { fabricColors.map((fabric) => (
                    <div className="fabriccolors tippy-tippy-option-color" id={fabric.id} data-tooltip-id="tippy-tippy-tooltip" data-tooltip-content={fabric.name} onClick={() => handleSettingsChange('fabricColor', fabric.color)} style={{"backgroundColor": fabric.color}} />
                  ))}
                </div>
              </div>}
              
              {(activeCustomization === 'glasses') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT GLASSES</div>
                <div id="options_div">
                  <div className="glasses" id="g_none" onClick={() => handleSettingsChange('glasses',"g_none")} style={{"backgroundColor":"#ffffff","backgroundPosition":"0px -313px"}} />
                  <div className="glasses" id="g_rambo" onClick={() => handleSettingsChange('glasses',"g_rambo")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-53px -313px"}} />
                  <div className="glasses" id="g_fancy" onClick={() => handleSettingsChange('glasses',"g_fancy")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-106px -313px"}} />
                  <div className="glasses" id="g_old" onClick={() => handleSettingsChange('glasses',"g_old")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-159px -313px"}} />
                  <div className="glasses" id="g_nerd" onClick={() => handleSettingsChange('glasses',"g_nerd")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-212px -313px"}} />
                  <div className="glasses" id="g_fancy2" onClick={() => handleSettingsChange('glasses',"g_fancy2")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-265px -313px"}} />
                  <div className="glasses" id="g_harry" onClick={() => handleSettingsChange('glasses',"g_harry")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-318px -313px"}} />
                </div>
              </div>}
              {(activeCustomization === 'glassOpacity') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT GLASS OPACITY</div>
                <div id="options_div">
                  <div className="glassopacity" id="o_10" onClick={() => handleSettingsChange('glassOpacity',"o_10")} style={{"backgroundColor":"#ffffff"}}>10%</div>
                  <div className="glassopacity" id="o_25" onClick={() => handleSettingsChange('glassOpacity',"o_25")}style={{"backgroundColor":"#ffffff"}}>25%</div>
                  <div className="glassopacity" id="o_50" onClick={() => handleSettingsChange('glassOpacity',"o_50")} style={{"backgroundColor":"#ffffff"}}>50%</div>
                  <div className="glassopacity" id="o_75" onClick={() => handleSettingsChange('glassOpacity',"o_75")} style={{"backgroundColor":"#ffffff"}}>75%</div>
                  <div className="glassopacity" id="o_100" onClick={() => handleSettingsChange('glassOpacity',"o_100")} style={{"backgroundColor":"#ffffff"}}>100%</div>
                </div>
              </div>}
              {(activeCustomization === 'accessories') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT ACCESORIES</div>
                <div id="options_div">
                  <div className="accessories" id="a_none" onClick={() => handleSettingsChange('accessories',"a_none")} style={{"backgroundColor":"#ffffff","backgroundPosition":"0px -369px"}} />
                  <div className="accessories" id="a_earphones" onClick={() => handleSettingsChange('accessories',"a_earphones")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-53px -369px"}} />
                  <div className="accessories" id="a_earring1" onClick={() => handleSettingsChange('accessories',"a_earring1")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-106px -369px"}} />
                  <div className="accessories" id="a_earring2" onClick={() => handleSettingsChange('accessories',"a_earring2")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-159px -369px"}} />
                  <div className="accessories" id="a_earring3" onClick={() => handleSettingsChange('accessories',"a_earring3")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-212px -369px"}} />
                </div>
              </div>}
              {(activeCustomization === 'tattoos') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT TATTOOS</div>
                <div id="options_div">
                  <div className="tattoos" id="t_non" onClick={() => handleSettingsChange('tattoos',"t_non")}  style={{"backgroundColor":"#ffffff","backgroundPosition":"0px -419px"}} />
                  <div className="tattoos" id="t_harry" onClick={() => handleSettingsChange('tattoos',"t_harry")}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-53px -419px"}} />
                  <div className="tattoos" id="t_airbender" onClick={() => handleSettingsChange('tattoos',"t_airbender")}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-106px -419px"}} />
                  <div className="tattoos" id="t_krilin" onClick={() => handleSettingsChange('tattoos',"t_krilin")}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-159px -419px"}} />
                  <div className="tattoos" id="t_front" onClick={() => handleSettingsChange('tattoos',"t_front")}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-212px -419px"}} />
                  <div className="tattoos" id="t_tribal" onClick={() => handleSettingsChange('tattoos',"t_tribal")}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-265px -419px"}} />
                  <div className="tattoos" id="t_tribal2" onClick={() => handleSettingsChange('tattoos',"t_tribal2")}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-318px -419px"}} />
                  <div className="tattoos" id="t_throat" onClick={() => handleSettingsChange('tattoos',"t_throat")}  style={{"backgroundColor":"#ffffff","backgroundPosition":"-371px -419px"}} />
                </div>
              </div>}
              {(activeCustomization === 'settings') &&  <div id='options' className='flex flex-col gap-4'>
                <div id="options_title">SELECT BACKGROUND COLOR</div>
                <div id="options_div">
                  {backgroundColors.map((color, index) => (
                    <div className="backgroundcolors tippy-tippy-option-color" id={color.id} data-tooltip-id="tippy-tippy-tooltip" data-tooltip-content={color.name} onClick={() => handleSettingsChange('backgroundColor', color.color)} style={{"backgroundColor": color.color}} key={index}></div>
                  ))}
                </div>
              </div>}
              {(activeCustomization === 'settings') &&  <div id='options' className='flex flex-col gap-4'>
                    <div id='options_title'>SELECT SKIN COLOR</div>
                    <div id='options_div'>
                      {skinColors.map((color, index) => (
                        <div className='skins tippy-tippy-option-color' id={color.id} data-tooltip-id="tippy-tippy-tooltip" data-tooltip-content={color.name} onClick={() => handleSettingsChange('skinColor', color.color)} style={{'backgroundColor': color.color}} key={index}></div>
                      ))}
                    </div>
                </div>}
              </div>
            </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 gap-1">
        <div className="md:flex-1 text-center md:text-left font-semibold">
          TippyTippy Avatar
        </div>
        <div className="md:flex-1 flex-row text-center md:text-right text-sm italic">
          Crafted with <span>❤️</span> by <a href="https://github.com/dakshim" target="_blank"> Dakshim Chhabra</a>
        </div>
      </footer>
    </div>
    <Tooltip id="tippy-tippy-tooltip" />
    </>



       

  );
};

export default HomePage;
