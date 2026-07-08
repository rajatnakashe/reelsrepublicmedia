*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}
 
html{
    scroll-behavior:smooth;
}
 
body{
    background:#0f0f11;
    color:white;
}
 
/* Navbar */
 
nav{
    position:fixed;
    width:100%;
    top:0;
    left:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    backdrop-filter:blur(15px);
    background:rgba(0,0,0,.45);
    z-index:1000;
}
 
.logo img{
    width:170px;
}
 
nav ul{
    display:flex;
    list-style:none;
    gap:35px;
}
 
nav a{
    color:white;
    text-decoration:none;
    font-weight:500;
    transition:.3s;
}
 
nav a:hover{
    color:#ff6a00;
}
 
/* Hero */
 
.hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:120px 8%;
    overflow:hidden;
}
 
.hero-text{
    width:50%;
}
 
.hero-text h1{
    font-size:70px;
    line-height:1.1;
}
 
.hero-text h2{
    margin-top:20px;
    color:#ff6a00;
    font-size:35px;
}
 
.hero-text p{
    margin:30px 0;
    color:#bbb;
    font-size:20px;
    line-height:1.8;
}
 
.btn{
    display:inline-block;
    padding:18px 42px;
    border-radius:50px;
    background:linear-gradient(90deg,#ff6a00,#8b2eff);
    color:white;
    text-decoration:none;
    font-weight:600;
    transition:.3s;
}
 
.btn:hover{
    transform:translateY(-5px);
    box-shadow:0 20px 50px rgba(255,106,0,.4);
}
 
.hero-image{
    width:40%;
    display:flex;
    justify-content:center;
}
 
.hero-image img{
    width:100%;
    max-width:450px;
    animation:float 5s ease-in-out infinite;
}
 
@keyframes float{
    0%{transform:translateY(0);}
    50%{transform:translateY(-20px);}
    100%{transform:translateY(0);}
}
 
/* Mobile */
 
@media(max-width:900px){
 
.hero{
flex-direction:column;
text-align:center;
padding-top:150px;
}
 
.hero-text{
width:100%;
}
 
.hero-image{
width:80%;
margin-top:60px;
}
 
.hero-text h1{
font-size:48px;
}
 
.hero-text h2{
font-size:24px;
}
 
nav ul{
display:none;
}
 
}
 