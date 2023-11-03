class DonutMaker {
    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
        this.autoClickerInterval = null;
    }

    clickDonut() {
        this.donutCount++;
    }

    buyAutoClicker() {
        if (this.donutCount >= this.autoClickerCost) {
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCount++;
            this.autoClickerCost = Math.ceil(this.autoClickerCost * 1.1);
        }
    }

    activateAutoClicker() {
        if (this.autoClickerCount > 0 && !this.autoClickerInterval) {
            this.autoClickerInterval = setInterval(() => {
                this.clickDonut();
                this.updateDisplay();
            }, 1000);
        }
    }

    resetGame() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
        clearInterval(this.autoClickerInterval);
        this.autoClickerInterval = null;
        this.updateDisplay();
    }

    updateDisplay() {
        document.getElementById("donut-count").textContent = this.donutCount;
        document.getElementById("auto-clicker-count").textContent = this.autoClickerCount;
        document.getElementById("buy-auto-clicker").disabled = this.donutCount < this.autoClickerCost;
    }
}

const donutMaker = new DonutMaker();

document.getElementById("donut-click").addEventListener("click", () => {
    donutMaker.clickDonut();
    donutMaker.updateDisplay();
});

document.getElementById("buy-auto-clicker").addEventListener("click", () => {
    donutMaker.buyAutoClicker();
    donutMaker.activateAutoClicker();
    donutMaker.updateDisplay();
});

document.getElementById("reset-game").addEventListener("click", () => {
    donutMaker.resetGame();
    donutMaker.updateDisplay();
});
