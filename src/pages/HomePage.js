import React, { useState } from 'react';
import Avatar from 'components/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { settingsSelector } from '../slices/settings'
import { setSettings } from 'slices/settings';
import { 
  Eye, 
  Smile, 
  Scissors, 
  UserCheck, 
  Shirt, 
  Glasses, 
  Watch, 
  Zap 
} from "lucide-react";

  

const HomePage = () => {
  const dispatch = useDispatch();
  const [activeCustomization, setActiveCustomization] = useState('eyes');
  const buttons = [
    { id: "eyes", name: "Eyes", icon: Eye },
    { id: "mouth", name: "Mouth", icon: Smile },
    { id: "hairstyles", name: "Hair Styles", icon: Scissors },
    { id: "facialhairs", name: "Facial Hair", icon: UserCheck },
    { id: "clothes", name: "Clothes", icon: Shirt },
    { id: "glasses", name: "Glasses", icon: Glasses },
    { id: "accessories", name: "Accessories", icon: Watch },
    { id: "tattoos", name: "Tattoos", icon: Zap }
  ];
  const [projectName, setProjectName] = useState("My Project");
  const [editing, setEditing] = useState(false);

  const handleEdit = () => setEditing(true);
  const handleSave = () => setEditing(false);
  const settings = useSelector(settingsSelector);
  const {
    skinColor
  } = settings;

  const handleSettingsChange = (key, value) => {
    dispatch(setSettings({ [key]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Topbar */}
      <header className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
        <div className="font-bold text-lg">TippyTippy Avatar</div>
        <button className="hover:underline">Help</button>
      </header>

      {/* Second Row - 3 Columns */}
      <section className="flex flex-col md:flex-row px-6 py-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex justify-start md:w-1/3 space-x-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Open
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>

        <div className="flex justify-center items-center md:w-1/3">
            <div className="flex items-center justify-center md:w-1/3">
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
      </section>

      {/* New 3-Column Row */}
      <section className="flex flex-grow flex-col xl:flex-row gap-4 px-4 py-6 bg-white">
            <div className="tippy-tippy-col flex-col flex-1 bg-blue-50 rounded shadow min-h-[120px] flex items-center justify-center"><Avatar activeCustomization={activeCustomization} /></div>
            <div className="tippy-tippy-col flex-col flex-1 bg-blue-50 rounded shadow min-h-[120px] flex items-center justify-center">
              <div id='options_title'>SELECT FEATURE</div>
              <div className="flex gap-2 items-center justify-center flex-row flex-wrap">

                <div className="flex flex-wrap justify-center items-center gap-6">
                  {buttons.map((button) => {
                    const IconComponent = button.icon;
                    const isActive = activeCustomization === button.id;
                    const buttonType = isActive ? 'primary' : 'default';
                    
                    return (
                      <button
                        key={button.id}
                        id={button.id}
                        onClick={() => setActiveCustomization(button.id)}
                        type="button"
                        className={`tippy-tippy-btn w-32 h-32 border-2 rounded-xl shadow-sm transition-all duration-200 flex flex-col items-center justify-center gap-2 active:scale-95 ${
                          buttonType === 'primary' 
                            ? 'bg-blue-500 border-blue-600 text-white shadow-md' 
                            : 'bg-white border-gray-200 text-gray-700 hover:shadow-md hover:border-blue-300 hover:bg-blue-50'
                        }`}
                      >
                        <IconComponent className="w-8 h-8" />
                        <span className="text-sm font-medium text-center px-2">
                          {button.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="tippy-tippy-col flex-col flex-1 bg-blue-50 rounded shadow min-h-[120px] flex items-center justify-center">
              <div id='options_wrap'>
                <div id='options' style={{'display': (activeCustomization == 'skincolor') ? 'initial':'none'}}>
                    <div id='options_title'>SELECT SKIN COLOR</div>
                    <div id='options_div'>
                        <div className='skins' id='s_ffdbb4' onClick={() => handleSettingsChange('skinColor', '#ffdbb4')} style={{'backgroundColor':'#ffdbb4'}}></div>
                        <div className='skins' id='s_edb98a' onClick={() => handleSettingsChange('skinColor', '#edb98a')} style={{'backgroundColor':'#edb98a'}}></div>
                        <div className='skins' id='s_fd9841' onClick={() => handleSettingsChange('skinColor', '#fd9841')} style={{'backgroundColor':'#fd9841'}}></div>
                        <div className='skins' id='s_fcee93' onClick={() => handleSettingsChange('skinColor', '#fcee93')} style={{'backgroundColor':'#fcee93'}}></div>
                        <div className='skins' id='s_d08b5b' onClick={() => handleSettingsChange('skinColor', '#d08b5b')} style={{'backgroundColor':'#d08b5b'}}></div>
                        <div className='skins' id='s_ae5d29' onClick={() => handleSettingsChange('skinColor', '#ae5d29')} style={{'backgroundColor':'#ae5d29'}}></div>
                        <div className='skins' id='s_614335' onClick={() => handleSettingsChange('skinColor', '#614335')} style={{'backgroundColor':'#614335'}}></div>
                    </div>
                </div>
                <div id="options" style={{'display': (activeCustomization == 'eyes') ? 'initial':'none'}}>
                  <div id="options_title">SELECT EYES</div>
                  <div id="options_div">
                    <div className="eyes" id="e_default" onClick={() => handleSettingsChange('eyes','e_default')} style={{"backgroundColor":skinColor,"backgroundPosition":"0px 0px"}} />
                    <div className="eyes" id="e_dizzy" onClick={() => handleSettingsChange('eyes','e_dizzy')} style={{"backgroundColor":skinColor,"backgroundPosition":"-53px 0px"}} />
                    <div className="eyes" id="e_eyeroll" onClick={() => handleSettingsChange('eyes','e_eyeroll')} style={{"backgroundColor":skinColor,"backgroundPosition":"-106px 0px"}} />
                    <div className="eyes" id="e_happy" onClick={() => handleSettingsChange('eyes','e_happy')} style={{"backgroundColor":skinColor,"backgroundPosition":"-159px 0px"}} />
                    <div className="eyes" id="e_close" onClick={() => handleSettingsChange('eyes','e_close')} style={{"backgroundColor":skinColor,"backgroundPosition":"-212px 0px"}} />
                    <div className="eyes" id="e_hearts" onClick={() => handleSettingsChange('eyes','e_hearts')} style={{"backgroundColor":skinColor,"backgroundPosition":"-265px 0px"}} />
                    <div className="eyes" id="e_side" onClick={() => handleSettingsChange('eyes','e_side')} style={{"backgroundColor":skinColor,"backgroundPosition":"-318px 0px"}} />
                    <div className="eyes" id="e_wink" onClick={() => handleSettingsChange('eyes','e_wink')} style={{"backgroundColor":skinColor,"backgroundPosition":"-371px 0px"}} />
                    <div className="eyes" id="e_squint" onClick={() => handleSettingsChange('eyes','e_squint')} style={{"backgroundColor":skinColor,"backgroundPosition":"-424px 0px"}} />
                    <div className="eyes" id="e_surprised" onClick={() => handleSettingsChange('eyes','e_surprised')} style={{"backgroundColor":skinColor,"backgroundPosition":"-477px 0px"}} />
                    <div className="eyes" id="e_winkwacky" onClick={() => handleSettingsChange('eyes','e_winkwacky')} style={{"backgroundColor":skinColor,"backgroundPosition":"-530px 0px"}} />
                    <div className="eyes" id="e_cry" onClick={() => handleSettingsChange('eyes','e_cry')} style={{"backgroundColor":skinColor,"backgroundPosition":"-583px 0px"}} />
                  </div>
                </div>
                <div id='options' style={{'display': (activeCustomization == 'eyes') ? 'initial':'none'}}>
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
              </div>
              <div id="options" style={{'display': (activeCustomization == 'mouth') ? 'initial':'none'}}>
                <div id="options_title">SELECT MOUTH</div>
                <div id="options_div">
                  <div className="mouths" id="m_default" onClick={() => handleSettingsChange('mouth','m_default')}  style={{ backgroundColor: skinColor, backgroundPosition: "0px -106px" }}/>
                  <div className="mouths" id="m_twinkle" onClick={() => handleSettingsChange('mouth','m_twinkle')}  style={{ backgroundColor: skinColor, backgroundPosition: "-53px -106px" }}/>
                  <div className="mouths" id="m_tongue" onClick={() => handleSettingsChange('mouth','m_tongue')}  style={{ backgroundColor: skinColor, backgroundPosition: "-106px -106px"}}/>
                  <div className="mouths" id="m_smile" onClick={() => handleSettingsChange('mouth','m_smile')}  style={{ backgroundColor: skinColor, backgroundPosition: "-159px -106px" }}/>
                  <div className="mouths" id="m_serious" onClick={() => handleSettingsChange('mouth','m_serious')}  style={{ backgroundColor: skinColor, backgroundPosition: "-212px -106px" }}/>
                  <div className="mouths" id="m_scream" onClick={() => handleSettingsChange('mouth','m_scream')}  style={{ backgroundColor: skinColor, backgroundPosition: "-265px -106px" }}/>
                  <div className="mouths" id="m_sad" onClick={() => handleSettingsChange('mouth','m_sad')}  style={{ backgroundColor: skinColor, backgroundPosition: "-318px -106px" }}/>
                  <div className="mouths" id="m_grimace" onClick={() => handleSettingsChange('mouth','m_grimace')}  style={{ backgroundColor: skinColor, backgroundPosition: "-371px -106px" }}/>
                  <div className="mouths" id="m_eating" onClick={() => handleSettingsChange('mouth','m_eating')}  style={{ backgroundColor: skinColor, backgroundPosition: "-424px -106px" }}/>
                  <div className="mouths" id="m_disbelief" onClick={() => handleSettingsChange('mouth','m_disbelief')}  style={{ backgroundColor: skinColor, backgroundPosition: "-477px -106px" }}/>
                  <div className="mouths" id="m_concerned" onClick={() => handleSettingsChange('mouth','m_concerned')}  style={{ backgroundColor: skinColor, backgroundPosition: "-530px -106px" }}/>
                  <div className="mouths" id="m_vomit" onClick={() => handleSettingsChange('mouth','m_vomit')}  style={{ backgroundColor: skinColor, backgroundPosition: "-583px -106px" }}/>
                </div>
              </div>
              <div id="options" style={{'display': (activeCustomization == 'hairstyles') ? 'initial':'none'}}>
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
              </div>
              <div id="options" style={{'display': (activeCustomization == 'hairstyles') ? 'initial':'none'}}>
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
              </div>

              <div id="options" style={{'display': (activeCustomization == 'facialhairs') ? 'initial':'none'}}>
                <div id="options_title">SELECT FACIAL HAIR</div>
                <div id="options_div">
                  <div className="facialhairs" id="f_none" onClick={() => handleSettingsChange('facialHair',"f_none")} style={{"backgroundColor":"#ffffff","backgroundPosition":"0px -212px"}} />
                  <div className="facialhairs" id="f_magnum" onClick={() => handleSettingsChange('facialHair',"f_magnum")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-53px -212px"}} />
                  <div className="facialhairs" id="f_fancy" onClick={() => handleSettingsChange('facialHair',"f_fancy")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-106px -212px"}} />
                  <div className="facialhairs" id="f_magestic" onClick={() => handleSettingsChange('facialHair',"f_magestic")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-159px -212px"}} />
                  <div className="facialhairs" id="f_light" onClick={() => handleSettingsChange('facialHair',"f_light")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-212px -212px"}} />
                </div>
              </div>
              <div id="options" style={{'display': (activeCustomization == 'clothes') ? 'initial':'none'}}>
                <div id="options_title">SELECT CLOTHES</div>
                <div id="options_div">
                  <div className="clothes" id="c_vneck" onClick={() => handleSettingsChange('cloth',"c_vneck")} style={{"backgroundColor":"#ffffff","backgroundPosition":"0px -265px"}} />
                  <div className="clothes" id="c_sweater" onClick={() => handleSettingsChange('cloth',"c_sweater")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-53px -265px"}} />
                  <div className="clothes" id="c_hoodie" onClick={() => handleSettingsChange('cloth',"c_hoodie")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-106px -265px"}} />
                  <div className="clothes" id="c_overall" onClick={() => handleSettingsChange('cloth',"c_overall")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-159px -265px"}} />
                  <div className="clothes" id="c_blazer" onClick={() => handleSettingsChange('cloth',"c_blazer")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-212px -265px"}} />
                </div>
              </div>
              <div id="options" style={{'display': (activeCustomization == 'clothes') ? 'initial':'none'}}>
                <div id="options_title">SELECT FABRIC COLOR</div>
                <div id="options_div">
                  <div className="fabriccolors" id="f_545454" onClick={() => handleSettingsChange('fabricColor',"#545454")} style={{"backgroundColor":"#545454"}} />
                  <div className="fabriccolors" id="f_65c9ff" onClick={() => handleSettingsChange('fabricColor',"#65c9ff")} style={{"backgroundColor":"#65c9ff"}} />
                  <div className="fabriccolors" id="f_5199e4" onClick={() => handleSettingsChange('fabricColor',"#5199e4")} style={{"backgroundColor":"#5199e4"}} />
                  <div className="fabriccolors" id="f_25557c" onClick={() => handleSettingsChange('fabricColor',"#25557c")} style={{"backgroundColor":"#25557c"}} />
                  <div className="fabriccolors" id="f_e6e6e6" onClick={() => handleSettingsChange('fabricColor',"#e6e6e6")} style={{"backgroundColor":"#e6e6e6"}} />
                  <div className="fabriccolors" id="f_929598" onClick={() => handleSettingsChange('fabricColor',"#929598")} style={{"backgroundColor":"#929598"}} />
                  <div className="fabriccolors" id="f_a7ffc4" onClick={() => handleSettingsChange('fabricColor',"#a7ffc4")} style={{"backgroundColor":"#a7ffc4"}} />
                  <div className="fabriccolors" id="f_ffdeb5" onClick={() => handleSettingsChange('fabricColor',"#ffdeb5")} style={{"backgroundColor":"#ffdeb5"}} />
                  <div className="fabriccolors" id="f_ffafb9" onClick={() => handleSettingsChange('fabricColor',"#ffafb9")} style={{"backgroundColor":"#ffafb9"}} />
                  <div className="fabriccolors" id="f_ffffb1" onClick={() => handleSettingsChange('fabricColor',"#ffffb1")} style={{"backgroundColor":"#ffffb1"}} />
                  <div className="fabriccolors" id="f_ff5c5c" onClick={() => handleSettingsChange('fabricColor',"#ff5c5c")} style={{"backgroundColor":"#ff5c5c"}} />
                  <div className="fabriccolors" id="f_e3adff" onClick={() => handleSettingsChange('fabricColor',"#e3adff")} style={{"backgroundColor":"#e3adff"}} />
                </div>
              </div>
              <div id="options" style={{'display': (activeCustomization == 'glasses') ? 'initial':'none'}}>
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
              </div>
              <div id="options" style={{'display': (activeCustomization == 'glasses') ? 'initial':'none'}}>
                <div id="options_title">SELECT GLASS OPACITY</div>
                <div id="options_div">
                  <div className="glassopacity" id="o_10" onClick={() => handleSettingsChange('glassOpacity',"o_10")} style={{"backgroundColor":"#ffffff"}}>10%</div>
                  <div className="glassopacity" id="o_25" onClick={() => handleSettingsChange('glassOpacity',"o_25")}style={{"backgroundColor":"#ffffff"}}>25%</div>
                  <div className="glassopacity" id="o_50" onClick={() => handleSettingsChange('glassOpacity',"o_50")} style={{"backgroundColor":"#ffffff"}}>50%</div>
                  <div className="glassopacity" id="o_75" onClick={() => handleSettingsChange('glassOpacity',"o_75")} style={{"backgroundColor":"#ffffff"}}>75%</div>
                  <div className="glassopacity" id="o_100" onClick={() => handleSettingsChange('glassOpacity',"o_100")} style={{"backgroundColor":"#ffffff"}}>100%</div>
                </div>
              </div>
              <div id="options" style={{'display': (activeCustomization == 'accessories') ? 'initial':'none'}}>
                <div id="options_title">SELECT ACCESORIES</div>
                <div id="options_div">
                  <div className="accessories" id="a_none" onClick={() => handleSettingsChange('accessories',"a_none")} style={{"backgroundColor":"#ffffff","backgroundPosition":"0px -369px"}} />
                  <div className="accessories" id="a_earphones" onClick={() => handleSettingsChange('accessories',"a_earphones")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-53px -369px"}} />
                  <div className="accessories" id="a_earring1" onClick={() => handleSettingsChange('accessories',"a_earring1")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-106px -369px"}} />
                  <div className="accessories" id="a_earring2" onClick={() => handleSettingsChange('accessories',"a_earring2")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-159px -369px"}} />
                  <div className="accessories" id="a_earring3" onClick={() => handleSettingsChange('accessories',"a_earring3")} style={{"backgroundColor":"#ffffff","backgroundPosition":"-212px -369px"}} />
                </div>
              </div>
              <div id="options" style={{'display': (activeCustomization == 'tattoos') ? 'initial':'none'}}>
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
              </div>
              <div id="options">
                <div id="options_title">SELECT BACKGROUND COLOR</div>
                <div id="options_div">
                  <div className="backgroundcolors" id="g_ffffff" onClick={() => handleSettingsChange('backgroundColor',"#ffffff")} style={{"backgroundColor":"#ffffff"}} />
                  <div className="backgroundcolors" id="g_f5f6eb" onClick={() => handleSettingsChange('backgroundColor',"#f5f6eb")} style={{"backgroundColor":"#f5f6eb"}} />
                  <div className="backgroundcolors" id="g_e5fde2" onClick={() => handleSettingsChange('backgroundColor',"#e5fde2")} style={{"backgroundColor":"#e5fde2"}} />
                  <div className="backgroundcolors" id="g_d5effd" onClick={() => handleSettingsChange('backgroundColor',"#d5effd")} style={{"backgroundColor":"#d5effd"}} />
                  <div className="backgroundcolors" id="g_d1d0fc" onClick={() => handleSettingsChange('backgroundColor',"#d1d0fc")} style={{"backgroundColor":"#d1d0fc"}} />
                  <div className="backgroundcolors" id="g_f7d0fc" onClick={() => handleSettingsChange('backgroundColor',"#f7d0fc")} style={{"backgroundColor":"#f7d0fc"}} />
                  <div className="backgroundcolors" id="g_d0d0d0" onClick={() => handleSettingsChange('backgroundColor',"#d0d0d0")} style={{"backgroundColor":"#d0d0d0"}} />
                </div>
              </div>
              </div>
            </div>
      </section>

      {/* Spacer to push footer to bottom */}
      <div className="flex-grow"></div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-4 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 gap-1">
        <div className="md:flex-1 text-center md:text-left font-semibold">
          TippyTippy Avatar
        </div>
        <div className="md:flex-1 text-center md:text-right text-sm italic">
          Crafted with <span className="text-red-500">♥</span> by Dakshim Chhabra
        </div>
      </footer>
    </div>



       

  );
};

export default HomePage;
