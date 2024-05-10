

    function showPopup(){
        document.getElementById("myForm").style.visibility = "visible";
    }
    
    function hidePopup(){
        document.getElementById("myForm").style.visibility = "hidden";
    }

    function newUser(){
        if(document.getElementById("inputName").value !== ""){
            
            const storedNames = localStorage.getItem("namesArray");
            let name = JSON.parse(storedNames) || [];
            name.push(document.getElementById("inputName").value);
            updatedStoredNames = JSON.stringify(name);
            localStorage.setItem("namesArray", updatedStoredNames);



            const storedSumOnesRes = localStorage.getItem("sumOnesArray");
            let sumOnesRes = JSON.parse(storedSumOnesRes) || [];
            sumOnesRes.push(0);
            updatedStoredSumOnesRes = JSON.stringify(sumOnesRes);
            localStorage.setItem("sumOnesArray", updatedStoredSumOnesRes);



            const storedSumTensRes = localStorage.getItem("sumTensArray");
            let sumTensRes = JSON.parse(storedSumTensRes) || [];
            sumTensRes.push(0);
            updatedStoredSumTensRes = JSON.stringify(sumTensRes);
            localStorage.setItem("sumTensArray", updatedStoredSumTensRes);



            const storedSubOnesRes = localStorage.getItem("subOnesArray");
            let subOnesRes = JSON.parse(storedSubOnesRes) || [];
            subOnesRes.push(0);
            updatedStoredSubOnesRes = JSON.stringify(subOnesRes);
            localStorage.setItem("subOnesArray", updatedStoredSubOnesRes);



            const storedSubTensRes = localStorage.getItem("subTensArray");
            let subTensRes = JSON.parse(storedSubTensRes) || [];
            subTensRes.push(0);
            updatedStoredSubTensRes = JSON.stringify(subTensRes);
            localStorage.setItem("subTensArray", updatedStoredSubTensRes);

            window.location.href = 'levels.html';

        }
        else{
            document.getElementById("inputNameMessage").innerHTML = "فضلاً أدخل اسماً";
        } 

    }
