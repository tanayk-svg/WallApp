export interface Carousels{
  image: string,
  name:string,
}

export function useCarousel(): Carousels[] {
  return [{
    image:"https://ideogram.ai/assets/progressive-image/balanced/response/Ln167q9TRx2RD7HCStlQCA",
    name:"Web3"  
  },{image:"https://ideogram.ai/assets/progressive-image/balanced/response/A2nxAAZuStCTA6O3-epJGg",
    name:"Cherry On Wine"  
    }, {
    image:"https://ideogram.ai/assets/progressive-image/balanced/response/-3709aWxQZ-jX4TrCTPKWA",
     name:"Alien On Travel"
    }, {
    image: "https://ideogram.ai/assets/progressive-image/balanced/response/ZIMxi2hYSeWZa9GRL2pOEQ",
      name:"King Of Cats"
    }, {
    image:"https://ideogram.ai/assets/progressive-image/balanced/response/I6Rz99ETQ8CAwIcCski8eQ"
      ,name:"Excercise Daily"
    }, {image:  "https://ideogram.ai/assets/progressive-image/balanced/response/OJDI2evbRM6K7VFdt9z2fg",
    name:"Stranger Things Cast"
  }
  ];
}