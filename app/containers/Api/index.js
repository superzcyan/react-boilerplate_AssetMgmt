/**
 *
 * Api
 *
 */

import React from 'react';
import axios from 'axios';

const apiURL = 'http://localhost:61443/api';

//Authenticate User
export async function authenthicateUserApiRequest(userName,password){  
  return await axios.post(`${apiURL}/Users/authenticate?UserName=${userName}&Password=${password}`)
}

//Get Model Items By Model Name
export async function getModelItems(modelTitle, currentPage, token){
  return await axios.get(`${apiURL}/${modelTitle}?CurrentPage=${currentPage}&ShowAll=false`, {headers:{'Authorization': `Bearer ${token}`}})
}
//Get Model Items By Model Name and ID
export async function getModelItemsById(modelTitle, token){
  return await axios.get(`${apiURL}/${modelTitle}?ShowAll=true`, {headers:{'Authorization': `Bearer ${token}`}})
}

//Get Asset Item with Search and Filters
///Assets?OrderBy=2&OrderType=1&Keyword=Category%201&CurrentPage=1&ShowAll=false
export async function getAssetItem(orderBy, orderType, assetKeyword, currentPage, token){
  return await axios.get(`${apiURL}/Assets?OrderBy=${orderBy}&OrderType=${orderType}&Keyword=${assetKeyword}&CurrentPage=${currentPage}&ShowAll=false`,
    {headers:{'Authorization': `Bearer ${token}`}} );
}
//Get All Model Items
export async function getAllModelItems(token){
  return await Promise.all ([ 
    (axios.get(`${apiURL}/Categories?ShowAll=true`, {headers:{'Authorization': `Bearer ${token}`}})),
    (axios.get(`${apiURL}/Manufacturers?ShowAll=true`,  {headers:{'Authorization': `Bearer ${token}`}})),
    (axios.get(`${apiURL}/Models?ShowAll=true`,  {headers:{'Authorization': `Bearer ${token}`}})),
    (axios.get(`${apiURL}/Processors?ShowAll=true`,  {headers:{'Authorization': `Bearer ${token}`}})),
    (axios.get(`${apiURL}/Suppliers?ShowAll=true`,  {headers:{'Authorization': `Bearer ${token}`}})),
    (axios.get(`${apiURL}/Users?ShowAll=true`,  {headers:{'Authorization': `Bearer ${token}`}})),
    (axios.get(`${apiURL}/Sizes/harddisk?ShowAll=true`,  {headers:{'Authorization': `Bearer ${token}`}})),                              
    (axios.get(`${apiURL}/Sizes/memory?ShowAll=true`,  {headers:{'Authorization': `Bearer ${token}`}})),
    (axios.get(`${apiURL}/Sizes/videocard?ShowAll=true`,  {headers:{'Authorization': `Bearer ${token}`}})),
    (axios.get(`${apiURL}/statustypes`)),
    (axios.get(`${apiURL}/assets_orderby`)),
    (axios.get(`${apiURL}/assets_ordertype`)), 
  ])
}

//Add New Model Item 
export async function addNewItem(modelTitle,newItem,token){
  return await axios.post(`${apiURL}/${modelTitle}`, newItem, {headers:{'Authorization': `Bearer ${token}`}})
}

//Updatet Asset Info
export async function updateItemInfo(modelTitle,itemId,editedItem, token){
  return await  axios.put(`${apiURL}/${modelTitle}/${itemId}`, editedItem, {headers:{'Authorization': `Bearer ${token}`}})  
}