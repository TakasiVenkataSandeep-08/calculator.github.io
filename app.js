window.onload = function() {

    var textbox = document.getElementById("display")
    console.log(textbox)
    var operator = "+-*/."
    var regex = /["+","\-,"*","/"]/
    var content = textbox.value
    console.log(content)
    if (content == "") {
        textbox.value = "0"
    }


    //calling append function if any click on calculator
    document.getElementById('body').addEventListener('click', function(e) {
        append(e)
    })

    function append(e) {
        console.log(content)
            //validating when clicked on AC
        if (e.target.id == "AC") {
            content = ""
            textbox.value = "0"
            console.log(content)
        }


        //validating when clicked on numbers
        else if (e.target.id == "0" || e.target.id == "1" || e.target.id == "2" || e.target.id == "3" || e.target.id == "4" || e.target.id == "5" || e.target.id == "6" || e.target.id == "7" || e.target.id == "8" || e.target.id == "9") {

            if (e.target.id == "0" && (content == "0" || content == "")) {
                content = ""
            } else if (e.target.id == "0" && content.slice(content.length - 1) == "/") {
                alert("avoid divide by zero error")
                textbox.value = content
            } else {
                content += e.target.id
                textbox.value = content
            }
            console.log(content)
        }


        //validating when clicked on operators
        else if (e.target.id == "+" || e.target.id == "*" || e.target.id == "-" || e.target.id == "/" || e.target.id == ".") {

            // allow to add decimal numbers initially
            if (e.target.id == "." && (content == "0" || content == "")) {
                content = "0" + e.target.id
                textbox.value = content

            } else if (content == "" || content == "0") {
                console.log(e.target)
                textbox.value = "0"
            }
            //ending of content is operator then dont add operator again
            else if ((operator.includes(content.slice(content.length - 1)))) {

                //checking if there is no content ending with . and then appending 0. when .is pressed
                if (content.slice(content.length - 1) != "." && e.target.id == ".") {
                    content += "0" + e.target.id
                    textbox.value = content
                } else {
                    alert('syntax error "shouldnot append two operators or "." side by side"')
                    textbox.value = content
                }
            }
            //for avoiding adding . if the string last part has .
            else {
                var arr = content.split(regex)
                if (e.target.id == "." && arr[arr.length - 1].includes(".")) {
                    alert('syntax error entering an ivalid decimal')
                    textbox.value = content
                } else {
                    content += e.target.id
                    textbox.value = content
                }
            }

        }



        //validating when = is pressed
        else if (e.target.id == "=") {
            if (content == "") {
                textbox.value = "0"
            } //avoiding statements ending with operators 
            else if (operator.includes(content.slice(content.length - 1))) {
                alert("invalid math expression entered")
                textbox.value = content
            } else {
                textbox.value = eval(content)
                content = textbox.value
            }
        }


    }










}