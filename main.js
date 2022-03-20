function setup()
{

c1=createCanvas(450,300)
c1.center();
v1=createCapture(VIDEO);
v1.hide();

}

function draw()
{

image(v1,0,0,450,300)
tint(shade);
stroke("red");
fill("red");
circle(10,10,50);

stroke("red");
fill("red");
circle(40,10,50);

stroke("green");
fill("green");
circle(70,10,50);

stroke("green");
fill("green");
circle(100,10,50);

stroke("green");
fill("green");
circle(130,10,50);

stroke("green");
fill("green");
circle(160,10,50);

stroke("green");
fill("green");
circle(190,10,50);

stroke("green");
fill("green");
circle(220,10,50);

stroke("green");
fill("green");
circle(250,10,50);

stroke("green");
fill("green");
circle(270,10,50);

stroke("green");
fill("green");
circle(300,10,50);

stroke("green");
fill("green");
circle(330,10,50);

stroke("green");
fill("green");
circle(360,10,50);

stroke("red");
fill("red");
circle(390,10,50);

stroke("red");
fill("red");
circle(420,10,50);

stroke("red");
fill("red");
circle(10,290,50);

stroke("red");
fill("red");
circle(30,290,50);

stroke("red");
fill("red");
circle(60,290,50);

stroke("green");
fill("green");
circle(90,290,50);

stroke("green");
fill("green");
circle(120,290,50);

stroke("green");
fill("green");
circle(150,290,50);

stroke("green");
fill("green");
circle(180,290,50);

stroke("green");
fill("green");
circle(210,290,50);

stroke("green");
fill("green");
circle(240,290,50);

stroke("green");
fill("green");
circle(270,290,50);

stroke("green");
fill("green");
circle(300,290,50);

stroke("green");
fill("green");
circle(330,290,50);

stroke("green");
fill("green");
circle(360,290,50);

stroke("red");
fill("red");
circle(360,290,50);

stroke("red");
fill("red");
circle(360,290,50);





}

function takephoto()
{

    save ("filter.jpg")

}

shade=""

function colorfilter()
{

shade=document.getElementById("filtercolor").value;

}