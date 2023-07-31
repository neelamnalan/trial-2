class Box{
//constructor - modules
constructor(x,y,w,h){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
}
//display or show
display(){
    rect(this.x,this.y,this.w,this.h)
}
speedx(sx){
    this.x+=sx
}
speedy(sy){
    this.y+=sy
}
}