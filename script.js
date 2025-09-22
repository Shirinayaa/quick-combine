let ecoScore = 0;
let bundleApplied = false;
let progressInterval = null;

function instantDelivery() {
    alert("Instant delivery selected. ₹30, 10 mins.");
}

function bundleDelivery() {
    const othersNearby = Math.random() < 0.7;
    bundleApplied = othersNearby;

    if (othersNearby) {
        ecoScore += 10;
        document.getElementById('bundleMessage').innerText = "Orders are bundled for your apartment.";
        alert("Bundle Delivery applied! Fee: ₹10, +5-10 mins");
    } else {
        document.getElementById('bundleMessage').innerText = "No nearby orders for bundling.";
        alert("No nearby orders. Original fee applies: ₹30, 10 mins");
    }

    document.getElementById('ecoScoreDisplay').innerText = ecoScore;
    document.getElementById('screen1').classList.add('hidden');
    document.getElementById('screen2').classList.remove('hidden');
}

function showMap() {
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen3').classList.remove('hidden');

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = "0%";
    let progress = 0;

    if(progressInterval) clearInterval(progressInterval);
    progressInterval = setInterval(() => {
        progress++;
        progressBar.style.width = progress + "%";
        if(progress >= 100){
            clearInterval(progressInterval);
            progressInterval = null;
        }
    }, 50);
}

function showImpact() {
    document.getElementById('ecoScoreFinal').innerText = ecoScore;

    const riders = bundleApplied ? "3 → 1" : "3 → 3";
    const co2 = bundleApplied ? "1.2 kg" : "0 kg";
    const fee = bundleApplied ? "₹50" : "₹0";

    document.getElementById('ridersSaved').innerText = riders;
    document.getElementById('co2Final').innerText = co2;
    document.getElementById('feeSaved').innerText = fee;

    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen4').classList.remove('hidden');
}

function restart() {
    ecoScore = 0;
    bundleApplied = false;

    if(progressInterval) clearInterval(progressInterval);
    document.getElementById('progress-bar').style.width = "0%";

    document.getElementById('ecoScoreDisplay').innerText = ecoScore;
    document.getElementById('ecoScoreFinal').innerText = ecoScore;
    document.getElementById('co2Saved').innerText = "You saved ₹0 and 0 kg CO₂!";

    document.getElementById('screen1').classList.remove('hidden');
    document.getElementById('screen2').classList.add('hidden');
    document.getElementById('screen3').classList.add('hidden');
    document.getElementById('screen4').classList.add('hidden');
}