import React, { useState } from 'react';

function HooksObjectFormat(initialState){
    const [value,setValue] = useState(initialState);

    function onChange(e){
        setValue(e.target.value);
    }

    function clearInput(){
        setValue("");
    }

    return {value, onChange , clearInput};
}

function App2(){
    const {value: userName, onChange: userNameOnChange, clearInput: clearUserNameInput} = HooksObjectFormat("");
    const {value: email, onChange: emailOnChange, clearInput: clearEmailInput} = HooksObjectFormat("");
    const {value: password, onChange: passwordOnChange, clearInput: clearPasswordInput} = HooksObjectFormat("");

    function handleOnSubmit(e){
        e.preventDefault();
        console.log(userName)
        console.log(email)
        console.log(password)
        clearEmailInput();
        clearPasswordInput();
        clearUserNameInput();
    }

    return(
        <div className="App1">
            <h1>App2</h1>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="User Name" value={userName} onChange={ userNameOnChange}/>
                <br/>
                <input type="email" placeholder="Vaild Email" value={email} onChange={ emailOnChange}/>
                <br/>
                <input type="password" placeholder="password"
                value={password} onChange={ passwordOnChange}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
        <br />
 
export default App2;
