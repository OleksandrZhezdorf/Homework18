const units = [new Unit(50, 100, 'Archer', 'https://ru.wiki.tribalwars2.com/images/f/f7/Archer_big.png'),
new Unit(100, 50, 'Pikeman', 'https://ru.wiki.tribalwars2.com/images/e/e9/Spearman_big.png'),
new Unit(150, 50, 'Swordsman', 'https://ru.wiki.tribalwars2.com/images/d/d2/Swordsman_big.png')];

units.push(units[0].clone());
units.push(units[0].clone());
units.push(units[0].clone());
units.push(units[0].clone());
units.push(units[1].clone());
units.push(units[1].clone());
units.push(units[1].clone());
units.push(units[1].clone());
units.push(new Unit(50, 100, 'Archer', 'https://heroesworld.ru/files/data/409/265/124/151/Archer.jpg'))
units.push(new Unit(50, 100, 'Archer', 'https://heroesworld.ru/files/data/409/265/124/151/Archer.jpg'))

console.log(units, units[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].isReadyToFight());

const squad = new Squad(document.getElementById('app'));
squad.addUnit(units[0].clone());
squad.addUnit(units[1].clone());
squad.addUnit(units[2].clone());
console.log(squad._squad.push(squad._squad[1].clone()));
console.log(squad._squad.push(squad._squad[0].clone()));
console.log(squad._squad[0].clone());
console.log(squad._squad[1].clone());
console.log(squad.clone());
console.log(squad.getReadyToMove());

var remove = document.getElementById("app");
var removelast = remove.lastChild;
remove.removeChild(removelast);

const HealthChange = () => {
    let first = 100;
    let second = 100;
    let third = 100;

    document.getElementsByClassName('health')[0].addEventListener('click', () => {
        document.getElementsByClassName("health")[0].style.width = `${first -= 10}%`;
    });
    document.getElementsByClassName('health')[1].addEventListener('click', () => {
        document.getElementsByClassName("health")[1].style.width = `${second -= 5}%`;
    });
    document.getElementsByClassName('health')[2].addEventListener('click', () => {
        document.getElementsByClassName("health")[2].style.width = `${third -= 3.3}%`;
    });
};
HealthChange();


const StaminaChange = () => {
    let first = 100;
    let second = 100;
    let third = 100;

    document.getElementsByClassName('stamina')[0].addEventListener('click', () => {
        document.getElementsByClassName('stamina')[0].style.width = `${first -= 5}%`;
    });
    document.getElementsByClassName('stamina')[1].addEventListener('click', () => {
        document.getElementsByClassName('stamina')[1].style.width = `${second -= 10}%`;
    });
    document.getElementsByClassName('stamina')[2].addEventListener('click', () => {
        document.getElementsByClassName('stamina')[2].style.width = `${third -= 10}%`;
    });
};
StaminaChange();
















