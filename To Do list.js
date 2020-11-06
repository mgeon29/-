function get_list(){ // input event
        if(window.event.keyCode == 13){ // enter

                var input = document.getElementById("valin").value; //input value
                var listplus = document.createElement("li"); // create li element
                listplus.innerHTML = input;
                document.getElementById("inlist").appendChild(listplus); // add todo list
                document.getElementById("valin").value = ""; // input reset

        }
}
