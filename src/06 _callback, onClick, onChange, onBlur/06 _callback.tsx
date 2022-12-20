import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {
    
    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
      alert("user have been deleted")
    }

    const onNameChanged = () => {
      alert("name changed")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        alert("age changed:" + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }

    return <div onBlur={focusLostHandler} onChange={onNameChanged}><textarea> Rustam </textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name={"delete"} onClick={deleteUser}>delete</button>

        
    </div>
}