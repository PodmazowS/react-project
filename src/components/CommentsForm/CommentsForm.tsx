import React, { useState, useEffect, useRef } from 'react';

import './CommentsForm.css'; 


interface Props{
  addComment: (comment: {
    name: string,
    email: string,
    body: string,
  }) => void;
}

export const CommentsForm: React.FC<Props> = ({addComment}) => {
 
  const name=useRef<HTMLInputElement>(null);
  const email=useRef<HTMLInputElement>(null);
  const body=useRef<HTMLInputElement>(null);


  const onSubmit=(e: React.FormEvent)=>{
    e.preventDefault();
    
    addComment({email: email.current!.value, name: name.current!.value, body: body.current!.value});
  }

  return  <form className="form" onSubmit={onSubmit}>
    <input type="text"ref={name} placeholder='Name'/>
    <input type="text"ref={email} placeholder='Email' />
    <input type="text"ref={body} placeholder='Your comment'/>
    <button>Add</button>
    </form>};
    

