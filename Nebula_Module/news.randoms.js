    let time = 0;
            setInterval(() => {
                if(time==0){
                    document.getElementById("randoms").innerHTML = "More Capabilities";
                    time++;
                } else if(time==1){
                    document.getElementById("randoms").innerHTML = "Innovative Resources";
                    time++;
                } else if(time==2){
                    document.getElementById("randoms").innerHTML = "Smarter Solutions";
                    time++;
                } else if(time==3){
                    document.getElementById("randoms").innerHTML = "Vibrant User Base";
                    time++;
                } else if(time==4){
                    document.getElementById("randoms").innerHTML = "Enhanced Feature";
                    time++;
                } else if(time==5){
                    document.getElementById("randoms").innerHTML = "Powerful Tools";
                    time++;
                } else if(time==6){
                    document.getElementById("randoms").innerHTML = "Wider Reach";
                    time =0;
                }
            },3000)