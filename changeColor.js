function ChangeTextColor() {

    this.text = document.getElementById('text');
    console.log(this.text);
    var that = this;

    this.changeColor = function () {

        that.text.style.color = "blue";
    };

    setTimeout(this.changeColor, 5000);

}

ChangeTextColor();
