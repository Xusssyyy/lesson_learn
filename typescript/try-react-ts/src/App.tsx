import React, { useState } from "react";
import {Color} from './model/color'
import ColorBrowser from './ColorBrowser'

//根组件没有特别需求的话，不需要加React.FC
const App=()=>{
    // ts为大型项目而来，大型项目不能有bug
    // ts用来做大型项目，每一步都严格（通过类型约束或接口）
    const [color,setColor] = useState<Color>({
        red:20,
        green:40,
        blue:180
    })
    return(
        <>
        <ColorBrowser color={color}/>
        </>
    )
}

export default App