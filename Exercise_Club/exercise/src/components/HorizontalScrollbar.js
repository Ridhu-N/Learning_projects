import React from "react";
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";
const HorizontalScrollbar = ({ data,bodyPart, setBodyPart }) => {
  return (
    <div style={{display:'flex',overflowX:'scroll'}}>
      {data.map((item) => (
        <div style={{backgroundColor: '#FFFAFB'}}
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
        >
          <BodyPart item = {item} bodyPart={bodyPart} setBodyPart= {setBodyPart}/>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;



// import React, { useContext } from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import { Box, Typography } from '@mui/material';

// // import ExerciseCard from './ExerciseCard';
// import BodyPart from './BodyPart';
// import RightArrowIcon from '../utils/icons/right-arrow.png';
// import LeftArrowIcon from '../utils/icons/left-arrow.png';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
//   <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//     {data.map((item) => (
//       <Box
//         key={item.id || item}
//         itemId={item.id || item}
//         title={item.id || item}
//         m="0 40px"
//       >
//         {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : ''}
//       </Box>
//     ))}
//   </ScrollMenu>
// );

// export default HorizontalScrollbar;




// import React, { useContext } from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import { Box, Typography } from '@mui/material';

// import BodyPart from './BodyPart';
// import ForwardIcon from './images/left-arrow.png';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <svg viewBox="0 0 24 24" width="24" height="24">
//         <image href={ForwardIcon} width="24" height="24" />
//       </svg>
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <svg viewBox="0 0 24 24" width="24" height="24">
//         <image href={ForwardIcon} width="24" height="24" transform="rotate(180 12 12)" />
//       </svg>
//     </Typography>
//   );
// };

// const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
//   <div style={{ overflowX: 'scroll' }}>
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       {data.map((item) => (
//         <Box
//           key={item.id || item}
//           itemId={item.id || item}
//           title={item.id || item}
//           m="0 40px"
//         >
//           {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : ''}
//         </Box>
//       ))}
//     </ScrollMenu>
//   </div>
// );

// export default HorizontalScrollbar;


