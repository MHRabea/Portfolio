/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        fadeInX  :'fadeInX 1s ease-in-out' ,
        fadeInY : 'fadeInY 1s ease-in-out',
        fadeIn : 'fadeIn 1s ease-in-out',
        expand : 'expand 1s ease-in-out',
        collapse : 'collapse 1s ease-in-out',
        expand40 : "expand40 1s ease-in-out",
        expandHz : "expandHz 1s ease-in-out",
        translateXin : "translateXin 1s ease-in-out forwards",
        translateXout : "translateXout 1s ease-in-out forwards",

      },
      keyframes:{
        fadeInX:{
          '0%' :{"opacity" :'0', 'display' : 'hidden' ,
        "transform":"translateX(-25px)"},
          '100%' : {'opacity' : '1',
        'transform':'translateX(0)'}
        } ,
        fadeInY:{
          '0%' :{"opacity" :'0',
        "transform":"translateY(-25px)"},
          '100%' : {'opacity' : '1',
        'transform':'translateY(0)'}
        },
        fadeIn:{
          "0%" :{"opacity" :"0",},
          '100%' : {'opacity' : '1'}
        },
        translateXin:{
          "0%" :{"transform" :"translateX(-24rem)"},
          "100%" : {"transform" :"translateX(0)"},
        },
        translateXout:{
          "0%" :{"transform" :"translateX(0)"},
          "100%" : {"transform" :"translateX(24rem)"},
        },
        
        expand:{
          "0%" : {"opacity" :"0", 'height' : '0%' },
           '100%' :{'opacity' : '1' , 'height' : '30rem'} 
        },
        expandHz:{
          "0%" : {"opacity" :"0", 'width' : '0%' },
           '100%' :{'opacity' : '1' , 'width' : '70%'} 
        },
        expand40:{
          "0%" : {"opacity" :"0", 'height' : '0' },
          
           '100%' :{'opacity' : '1' , 'height' : '40rem'} 
        },
        collapse:{
          "0%" : {"opacity" :"1", "width" : '5rem' , 'height' : '30rem' },
           '100%' :{'opacity' : '0' , 'width' : '0%' , 'height' : '0%'} 
        },
        collapse40:{
          "0%" : {"opacity" :"1", 'height' : '40rem' },
           '100%' :{'opacity' : '0' , 'height' : '0%'} 
        }

      }, 
      screens: {
        '2xl' : '1700px', 

      },
      colors: {
        'custom1': "#1e1e1e"
      },
    },
  },
  plugins: [],
}

