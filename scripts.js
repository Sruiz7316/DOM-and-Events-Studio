window.addEventListener('load', function() {
    const flightStatus = document.getElementById('flightStatus');
    const takenOffBtn = document.getElementById('takeoff');
    const landingBtn = document.getElementById("landing");
    const abortBtn = document.getElementById("missionAbort");

    takenOffBtn.addEventListener('click', function() {
        const result = window.confirm(
            "Are you sure the shuttle is ready for takeoff?"
        );
        if (result) {
            flightStatus.innerHTML = "<b> Shuttle in flight! </b>"
            shuttleBackground.style.backgroundColor = "blue" 
            spaceShuttleHeight.innerHTML = 10000
        }
    }
    )

    landingBtn.addEventListener('click', function() {
        const thing = window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0
    })

    abortBtn.addEventListener('click', function() {
       const thing2 = window.confirm("Confirm that you want to abort the mission.");
       if (result) {
           flightStatus.innerHTML = "Mission aborted."
           shuttleBackground.style.backgroundColor = "green";
           spaceShuttleHeight.innerHTML = 0;
       }

    })
});