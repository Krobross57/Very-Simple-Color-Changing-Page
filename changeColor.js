function ChangeTextColor() {

    this.text = document.getElementsByTagName("p");
    
    this.changeColor = function() {
        
        this.text.style.color = "blue";
    };
    
    setTimeout(this.changeColor, 5000);

}

ChangeTextColor();
