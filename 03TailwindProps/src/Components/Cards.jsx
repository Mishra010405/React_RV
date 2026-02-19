import React from 'react'

function Cards({username,Name, btntext }) {
    console.log(username);
    console.log(Name);
    console.log(btntext);
   
    
    
    
     
    return (
        

 <>
<div>
   
  <h2>Hi, My Name is Shivam Mishra</h2>
  <p>This project is made by me.</p>


<h1 class="blue-text">
    {username} {Name}</h1>
  <h4>Probably the finest cricketer in the world</h4> 
  <img class="smaller-image white-border" src="http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/06/04/Pictures/india-pakistan-virat-kohli-celebrates-azhar-wicket_d517feae-4951-11e7-9f7a-23d54b55bc46.jpg" alt="Virat Kohli" 
       onmouseover = "this.src='http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/02/02/Pictures/cricket-ind-eng-t20_6d8e0510-e93b-11e6-a2d8-09470c086dd7.jpg'"
       onmouseout = "this.src='http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/06/04/Pictures/india-pakistan-virat-kohli-celebrates-azhar-wicket_d517feae-4951-11e7-9f7a-23d54b55bc46.jpg'"/>  
  </div>
<div class="text-timeline" >
  <p class="text-li" align="center">Career Timeline of Virat Kohli</p> </div>
  <div class="text-ul white-border-ul">
       <ul>
  <li>2002 - Delhi Under-15</li>
  <li>2003–04 - Captain Delhi Under-15</li>
  <li>2004 - Delhi Under-17</li>
  <li>Feb 2006 - List A Debut</li>
  <li>Jul 2006 - India Under-19 Debut</li>
  <li>Nov 2006 - First-class debut</li>
  <li>2007 - T20(Domestic) Debut</li>
  <li>2008 - Captained the victorious Indian team at Uner-19 World Cup</li>
  <li>Aug 2008 - ODI debut against Sri Lanka</li>
    <li>Jun 2010 - T20I Debut</li>
  <li>Jun 2011 - Test Debut</li>
       <li>Dec 2009 - First ODI century</li>
    <li>2012 - Appointed the vice-captain of the ODI team</li>
    <li>Jan 2012 - First Test century</li>
    <li>Dec 2014 - Appointed as the captian of the Test team</li>
    <li>2017 - Appointed as the captain of the ODI team</li>
  </ul>
  </div>
  <div class="link">

  <a href="https://en.wikipedia.org/wiki/Virat_Kohli"> {btntext}</a> and read more about the achievemnts of this versatile cricketer
  </div>
   

 </>




    )
}

export default Cards