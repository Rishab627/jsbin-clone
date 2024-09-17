import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Header = () => {
    const nav = useNavigate();
    const [html, setHtml] = useState(false);
    const [output, setOutput] = useState(false);
    const [css, setCss] = useState(false);
    console.log(css);
  return (
    <div>
<div className='topbar-container h-8 justify-between flex bg-gray-500'>

<div className="logo-part flex gap-5 text-center ">

<a href=''><img id='logo' src=""/></a>

<div className="file cursor-pointer hover:bg-gray-300">File <span className='drop-down'></span></div>

<div className="add-library">Add Library</div>

</div>  



<div className="button-container flex gap-5">

  <div onClick={() => {
    setHtml(!html);
    nav('/html');
  }} className="html cursor-pointer">HTML</div>
  <div onClick={() => {
    setCss(!css);
  }} className="css cursor-pointer">CSS</div>
  <div className="javascript cursor-pointer">JavaScript</div>
  <div className="console cursor-pointer">Console</div>
  <div onClick={() => {
    setOutput(!output);
    nav('/output');
  }} className="output cursor-pointer">Output</div>

</div>



<div className="help flex gap-5">

<a href='' className='login'>Login or Register</a>
<a href='' className='blog'>Blog</a>
<a href='' className='help'>Help</a>


</div>


</div>


{css && <textarea className='h-fit w-screen' name="css" id="css" cols={30} rows={10} ></textarea> }



    </div>
  )
}

export default Header