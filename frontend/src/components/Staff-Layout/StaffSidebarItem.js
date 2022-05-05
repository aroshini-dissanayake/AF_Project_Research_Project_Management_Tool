import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
// import * as MdIcons from 'react-icons/md';
// import * as RiIcons from 'react-icons/ri';
// import * as GiIcons from 'react-icons/gi';

export const StaffSidebarData =[

    {
        title : 'Dashboard',
        path : '/staffdashboard',
        icon : <AiIcons.AiFillDashboard/>,
        cName : 'nav-text'

    },

    {
        title : 'Research Topic',
        path : '/adminhome',
        icon : <AiIcons.AiFillFileAdd/>,
        cName : 'nav-text'

    },

    {
        title : 'Supervisors',
        path : '/displaygroups',
        icon : <BsIcons.BsFillPersonFill/>,
        cName : 'nav-text'

    },

    {
        title : 'Co-Supervisors',
        path : '/payment',
        icon : <BsIcons.BsFillPersonFill/>,
        cName : 'nav-text'

    },

    {
        title : 'Panel Members',
        path : '/discount',
        icon : <BsIcons.BsFillPersonFill/>,
        cName : 'nav-text'

    },

    {
        title : 'Chat With Group ',
        path : '/chatapp',
        icon : <BsIcons.BsFillChatTextFill/>,
        cName : 'nav-text'

    },

    // {
    //     title : 'Advertisement',
    //     path : '/advertisement',
    //     icon : <AiIcons.AiFillFileAdd/>,
    //     cName : 'nav-text'

    // },
    // {
    //     title : 'Request Item',
    //     path : '/requests',
    //     icon : <GiIcons.GiSandsOfTime/>,
    //     cName : 'nav-text'

    // },

    // {
    //     title : 'Feedback',
    //     path : '/feedback',
    //     icon : <RiIcons.RiFeedbackLine/>,
    //     cName : 'nav-text'

    // },

]