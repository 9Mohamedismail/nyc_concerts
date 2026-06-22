const stadiumImages = {
  "Yankee Stadium": "Yankee_Stadium_aerial_from_Blackhawk.jpg",
  "Barclays Center": "step-inside-barclays-center.png",
  "Citi Field": "CitiField_Populous.jpeg",
  "USTA Billie Jean King National Tennis Center":
    "USTA_Billie_Jean_King_National_Tennis_Center_(48613535076).jpg",
  "Nike Track & Field Center at The Armory":
    "_the-armory-foundation-04_dd192f4f-d66e-3e79-3ca32ca7a3fb36c8.jpg",
  "Madison Square Garden":
    "Madison_Square_Garden_(MSG)_-_Full_(48124330357).jpg",
  "Forest Hills Stadium": "FH-Stadium-1--1536x1152.jpeg",
};

const getStadiumImage = (stadium) => stadiumImages[stadium] || "party.png";

export { getStadiumImage };
