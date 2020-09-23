class Unit {
    constructor(maxHealth, maxDistance, type, image) {
        this.type = type;
        this.health = this.maxHealth = maxHealth;
        this.distance = this.maxDistance = maxDistance;
        this.image = image;
        this.el1 = document.createElement('div');
        this.el1.classList.add('health');
        this.el2 = document.createElement('div');
        this.el2.classList.add('stamina');
        this.el3 = document.createElement('p');
        this.el3.classList.add('word');
        this.el4 = document.createElement('img');
        this.el4.setAttribute('src', this.image, 'class');
        this.el4.classList.add('picture');
        this.setContent(maxHealth, maxDistance, type, image);
        this.registerListeners();
        this.registerListeners2();
    };

    isReadyToMove() {
        return this.distance > 0;
    };

    isReadyToFight() {
        return this.health > 0;
    };

    restore() {
        this.health = this.maxHealth;
        this.distance = this.maxDistance
    };

    clone() {
        return new Unit(this.maxHealth, this.maxDistance, this.type, this.image);
    };

    setContent(maxHealth, maxDistance, type, image) {
        this.el1.innerHTML = maxHealth;
        this.el2.innerHTML = maxDistance;
        this.el3.innerText = type;
        this.el4.innerHTML = image;
    };

    registerListeners() {
        this.el1.addEventListener('click', () => {
            this.changeState();
        });

    };

    changeState() {
        this.el1.innerHTML = this.el1.innerHTML - 5;
        if (this.el1.innerHTML <= 0) {
            this.el1.classList.toggle('crossed');
            this.el2.classList.toggle('crossed');
            this.el4.classList.toggle('crossed');
            this.el1.innerHTML = 0;
            this.el2.innerHTML = 0;
        }
    };

    registerListeners2() {
        this.el2.addEventListener('click', () => {
            this.changeState2();
        })
    };

    changeState2() {
        this.el2.innerHTML = this.el2.innerHTML - 5;
        if (this.el2.innerHTML <= 0) {
            this.el1.classList.toggle('crossed');
            this.el2.classList.toggle('crossed');
            this.el4.classList.toggle('crossed');
            this.el1.innerHTML = 0;
            this.el2.innerHTML = 0;
        }
    };
};

