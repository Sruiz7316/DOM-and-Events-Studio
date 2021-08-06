window.addEventListener('load', function() {
    const flightStatus = document.getElementById('flightStatus');
    const takenOffBtn = document.getElementById('takeoff');
    const landingBtn = document.getElementById("landing");
    const abortBtn = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const imgObj = document.getElementById("rocket");
    imgObj.style.position = "absolute";
    imgObj.style.left = "160px";
    imgObj.style.bottom = "193.12px";

    takenOffBtn.addEventListener('click', function() {
        const result = window.confirm(
            "Are you sure the shuttle is ready for takeoff?"
        );
        if (result) {
            flightStatus.innerHTML = "<b> Shuttle in flight! </b>"
            shuttleBackground.style.backgroundColor = "blue" 
            spaceShuttleHeight.innerHTML = 10000
        }
    })

    landingBtn.addEventListener('click', function() {
        const thing = window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0
    })

    abortBtn.addEventListener('click', function() {
       const thing2 = window.confirm("Confirm that you want to abort the mission.");
       if (thing2) {
           flightStatus.innerHTML = "Mission aborted."
           shuttleBackground.style.backgroundColor = "green";
           spaceShuttleHeight.innerHTML = 0;
       }
    })

    up.addEventListener('click', function() {
        movement = parseInt(imgObj.style.bottom) + 10 + 'px';
        imgObj.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000
    })

    down.addEventListener('click', function() {
        movement = parseInt(imgObj.style.bottom) - 10 + 'px';
        imgObj.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000
    })

    left.addEventListener('click', function() {
        movement = parseInt(imgObj.style.left) - 10 + 'px';
        imgObj.style.left = movement;
    })

    right.addEventListener('click', function() {
        movement = parseInt(imgObj.style.left) + 10 + 'px';
        imgObj.style.left = movement;
    })
});