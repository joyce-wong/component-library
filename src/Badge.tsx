import React from "react"
import classnames from "classnames"

const Badge: React.FC = ({children, className, shape, color, ...rest}) => {
  let shapeClass = shape && `button-${shape}`
  let colorClass = color && `button-${color}`
  const allClasses = classnames(shapeClass, colorClass, className)
    return <button className={allClasses} {...rest}>{children}</button>;
  };
  
  export default Badge; 
  
// export default function Badge({children, className, variant, ...rest}){



//     return (
//         // <button className={allClasses} {...rest}>
//         // {children}
//         // </button>
//         <div>
//             Hello
//         </div>
//     )
// }