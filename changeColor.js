function ChangeTextColor() {

    this.text = document.getElementsByTagName("p");
    
    this.changeColor = function() {
        
        this.text.style.color = "blue";
    }
    
    

}

ChangeTextColor();
