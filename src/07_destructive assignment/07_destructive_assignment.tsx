import React from "react";

export type ManType = {
    name: string
    age:number
    lessons:Array<{ title: string }>
    address: {
        street: {
            title:string
        }
    }
}

type PropsType = {
    title:string
    man:ManType
    car:{model:string}
}

export const ManComponent:React.FC<PropsType> = ({title, man,...props}) => {

    // const {title, man, ...restProps} = props
  return <div>
      <h1>{props.car.model}</h1>
      <hr/>
      <div>
          {man.name}
      </div>
  </div>
}