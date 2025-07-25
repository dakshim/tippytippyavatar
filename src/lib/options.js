import { 
  Eye, 
  Smile, 
  Scissors,
  Settings, 
  UserCheck, 
  Shirt, 
  Glasses, 
  Watch, 
  Zap 
} from "lucide-react";

import {
  EyesClosed,
  EyesCry,
  EyesDefault,
  EyesEyeRoll,
  EyesHappy,
  EyesHearts,
  EyesSide,
  EyesSquint,
  EyesSurprised,
  EyesWink,
  EyesWinkWacky,
  EyesDizzy
} from "./Eyes";

import {
  FacialHairBeardLight,
  FacialHairBeardMajestic,
  FacialHairBeardMedium,
  FacialHairMoustacheFancy,
  FacialHairMoustacheMagnum,
} from "./FacialHair";

import {MouthConcerned,
   MouthDefault,
    MouthDisbelief,
    MouthEating,
    MouthGrimace,
    MouthSad,
    MouthSerious,
    MouthSmile,
    MouthScreamOpen,
    MouthTongue,
    MouthTwinkle,
    MouthVomit
} from "./Mouth";


export const skinColors = [
    { id: 's_ffdbb4', color: '#ffdbb4' },
    { id: 's_edb98a', color: '#edb98a' },
    { id: 's_fd9841', color: '#fd9841' },
    { id: 's_fcee93', color: '#fcee93' },   
    { id: 's_d08b5b', color: '#d08b5b' },
    { id: 's_ae5d29', color: '#ae5d29' },
    { id: 's_614335', color: '#614335' }
];

export const features = [
    { id: "settings", name: "Settings", icon: Settings },
    { id: "eyes", name: "Eyes", icon: Eye },
    { id: "mouth", name: "Mouth", icon: Smile },
    { id: "hairstyles", name: "Hair Styles", icon: Scissors },
    { id: "facialhairs", name: "Facial Hair", icon: UserCheck },
    { id: "clothes", name: "Clothes", icon: Shirt },
    { id: "glasses", name: "Glasses", icon: Glasses },
    { id: "accessories", name: "Accessories", icon: Watch },
    { id: "tattoos", name: "Tattoos", icon: Zap },
    
  ];


export const backgroundColors = [
    { id: 'g_ffffff', color: '#ffffff' },
    { id: 'g_f5f6eb', color: '#f5f6eb' },
    { id: 'g_e5fde2', color: '#e5fde2' },
    { id: 'g_d5effd', color: '#d5effd' },
    { id: 'g_d1d0fc', color: '#d1d0fc' },
    { id: 'g_f7d0fc', color: '#f7d0fc' },
    { id: 'g_d0d0d0', color: '#d0d0d0' }
];

export const eyes = [
  {name: "Closed", id: "e_close", icon: EyesClosed},
  {name: "Cry", id: "e_cry", icon: EyesCry},
  {name: "Default", id: "e_default", icon: EyesDefault},
  {name: "Eye Roll", id: "e_eyeroll", icon: EyesEyeRoll},
  {name: "Happy", id: "e_happy", icon: EyesHappy},
  {name: "Hearts", id: "e_hearts", icon: EyesHearts},
  {name: "Side", id: "e_side", icon: EyesSide},
  {name: "Squint", id: "e_squint", icon: EyesSquint},
  {name: "Surprised", id: "e_surprised", icon: EyesSurprised},
  {name: "Wink", id: "e_wink", icon: EyesWink},
  {name: "Wink Wacky", id: "e_winkwacky", icon: EyesWinkWacky},
  {name: "Dizzy", id: "e_dizzy", icon: EyesDizzy},
];

export const facialHairs = [
  {name: "None", id: "f_none", icon: null},
  {name: "Beard Light", id: "f_light", icon: FacialHairBeardLight},
  {name: "Beard Majestic", id: "f_magestic", icon: FacialHairBeardMajestic},
  {name: "Beard Medium", id: "f_medium", icon:  FacialHairBeardMedium},
  {name: "Moustache Fancy", id: "f_fancy", icon: FacialHairMoustacheFancy},
  {name: "Moustache Magnum", id: "f_magnum", icon: FacialHairMoustacheMagnum}, 
];

export const fabricColors = [
  { id: 'f_545454', color: '#545454' },
  { id: 'f_65c9ff', color: '#65c9ff' },
  { id: 'f_5199e4', color: '#5199e4' },
  { id: 'f_25557c', color: '#25557c' },
  { id: 'f_e6e6e6', color: '#e6e6e6' },
  { id: 'f_929598', color: '#929598' },
  { id: 'f_a7ffc4', color: '#a7ffc4' },
  { id: 'f_ffdeb5', color: '#ffdeb5' },
  { id: 'f_ffafb9', color: '#ffafb9' },
  { id: 'f_ffffb1', color: '#ffffb1' },
  { id: 'f_ff5c5c', color: '#ff5c5c' },
  { id: 'f_e3adff', color: '#e3adff' },
];

export const mouths = [
  { name: "Concerned", id: "m_concerned", icon: MouthConcerned },
  { name: "Default", id: "m_default", icon: MouthDefault },
  { name: "Disbelief", id: "m_disbelief", icon: MouthDisbelief },
  { name: "Eating", id: "m_eating", icon: MouthEating },
  { name: "Grimace", id: "m_grimace", icon: MouthGrimace },
  { name: "Sad", id: "m_sad", icon: MouthSad },
  { name: "Serious", id: "m_serious", icon: MouthSerious },
  { name: "Smile", id: "m_smile", icon: MouthSmile },
  { name: "Scream Open", id: "m_scream", icon: MouthScreamOpen },
  { name: "Tongue Out", id: "m_tongue", icon: MouthTongue },
  { name: "Twinkle", id: "m_twinkle", icon: MouthTwinkle },
  { name: "Vomit", id: "m_vomit", icon: MouthVomit }
];