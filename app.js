document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const width = 28;
    let score = 0;

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 3, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
        4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 4, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 3, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1, 1, 2, 2, 1, 1, 4, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 4, 1, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 4, 1, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 1, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 1, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 1, 2, 2, 2, 2, 1, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 0, 0, 0, 4, 4, 4, 4, 1, 2, 2, 2, 2, 1, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 0, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 1,
        1, 3, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 4, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 4, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4,
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 3, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];

    const squares = [];

    // создаем лабиринт, где:
    // 0 - точка
    // 1 - стена
    // 2 - логово призраков
    // 3 - энерджайзер
    // 4 - пустое место в лабиринте

    function createBoard() {
        for (let i=0; i < layout.length; i+=1) {
            const square = document.createElement('div');
            grid.appendChild(square);
            squares.push(square);

            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall')
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet')
            }
        }
    }
    createBoard();

    // отправная позиция pacman

    let pacmanCurrentIndex = 519;
    squares[pacmanCurrentIndex].classList.add('pac-man');
    let pacmanDirection;


    //функция перемещения pacman

    function movePacman(e) {

        squares[pacmanCurrentIndex].classList.remove('pac-man', 'go-right', 'go-left', 'go-up', 'go-down');

        // при каждом нажатии стрелки задаем новый индекс и класс направления (для разворота самого пакмана)

        switch(e.code) {
            case 'ArrowLeft':
                if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')) {
                    pacmanCurrentIndex -= 1;
                    pacmanDirection = 'go-left'
                }
                if (pacmanCurrentIndex - 1 === 111) {
                    pacmanCurrentIndex = 671;
                    pacmanDirection = 'go-left'
                }
                break
            case 'ArrowUp':
                if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')) {
                    pacmanCurrentIndex -= width;
                    pacmanDirection = 'go-up'
                }
                break
            case 'ArrowRight':
                if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')) {
                    pacmanCurrentIndex += 1;
                    pacmanDirection = 'go-right'
                }
                if (pacmanCurrentIndex + 1 === 672) {
                    pacmanCurrentIndex = 112;
                    pacmanDirection = 'go-right'
                }
                break
            case 'ArrowDown':
                if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')) {
                    pacmanCurrentIndex += width;
                    pacmanDirection = 'go-down'
                }
                break
        }

        squares[pacmanCurrentIndex].classList.add('pac-man');
        squares[pacmanCurrentIndex].classList.add(pacmanDirection);

        pacDotEaten();
        powerPelletEaten();
        checkGameOver();
        checkIfWin();

    }

    document.addEventListener('keyup', movePacman);

    // если pacman съедает точку

    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score += 1;
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove('pac-dot');
        }
    }

    // если pacman съедает энерджайзер, призраки входят в режим испуга на 10 секунд

    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score += 10;
            scoreDisplay.innerHTML = score;
            ghosts.forEach(ghost => ghost.isScared = true);
            setTimeout(unScareGhosts, 10000);
            squares[pacmanCurrentIndex].classList.remove('power-pellet');
        }
    }

    const unScareGhosts = () => {
        ghosts.forEach(ghost => ghost.isScared = false)
    }

    //cоздаем класс призраков и 4 героя-призрака

    class Ghost {
        constructor(className, startIndex, speed, targetNum) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.targetNum = targetNum
            this.currentIndex = startIndex      
            this.timerId = NaN
            this.isScared = false
        }
    }

    const ghosts = [
        new Ghost('blinky', 320, 250, 0),
        new Ghost('pinky', 351, 300, 1),
        new Ghost('inky', 404, 400, -4),
        new Ghost('clyde', 435, 500, -10),
    ]

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add('ghost');
    })

    //функция для получения координат [X, Y] по индексу

    function getCoords(index) {
        return [index % width, Math.floor(index / width)];
    }

    //функция для получения расстояния между призраком и целью

    function getDistance(ghostIndex, targetIndex) {
        const [ghostX, ghostY] = getCoords(ghostIndex);
        const [targetX, targetY] = getCoords(targetIndex);
        return Math.sqrt(((targetX - ghostX) ** 2) + ((targetY - ghostY) ** 2));
    }


    //движение призраков

    ghosts.forEach(ghost => moveGhost(ghost));

    function moveGhost(ghost) {
        const directions = [-1, 1, -width, width];
        //генерируем рандомное направление
        let direction = directions[Math.floor(Math.random() * directions.length)];
       
        ghost.timerId = setInterval(() => {
            //призраки двигаются рандомно, пока находятся в логове призраков

            if (squares[ghost.currentIndex].classList.contains('ghost-lair')) {
                if (!squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex +
                    direction].classList.contains('ghost')) {
                        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
                        ghost.currentIndex += direction;
                        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
                } else {
                    direction = directions[Math.floor(Math.random() * directions.length)];
                }

            // выйдя из логова, начинают преследовать цель (у каждого призрака своя цель - место
            // нахождения пакмана или точка на расстоянии от него (см targetNum в конструкторе призраков))

            } else {
                
                if (!squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex +
                    direction].classList.contains('ghost')) {
                        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
    
                        //проверяем, находится ли следующий шаг призрака ближе к его цели. Если да - делаем шаг, нет - заново генерируем шаг
    
                        const currentDistance = getDistance(ghost.currentIndex, pacmanCurrentIndex + ghost.targetNum);
                        const newDistance = getDistance(ghost.currentIndex + direction, pacmanCurrentIndex + ghost.targetNum);
    
                        if (currentDistance > newDistance) {
                            ghost.currentIndex += direction;
                            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
                        } else {
                            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost'); 
                            direction = directions[Math.floor(Math.random() * directions.length)];
                        }
                        
                } else {
                    direction = directions[Math.floor(Math.random() * directions.length)];
                }
                
            }

            
            //режим испуга
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            //если pacman съедает призрака в режиме испуга
            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
                ghost.currentIndex = ghost.startIndex;
                score += 100;
                scoreDisplay.innerHTML = score;
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            }

            checkGameOver();

        }, ghost.speed)
    }

    //проверка на завершение игры (проигрыш)

    function checkGameOver() {
        if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId));
            document.removeEventListener('keyup', movePacman);
            grid.classList.add('stop-game');
            const status = createGameStatus('game over!');
            document.body.appendChild(status);
        }
    }

    //проверка на выигрыш

    function checkIfWin() {
        if (score >= 260) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId));
            document.removeEventListener('keyup', movePacman);
            grid.classList.add('stop-game');
            const status = createGameStatus('you won!');
            status.classList.add('you-won');
            document.body.appendChild(status);
        }
    }

    // вывод сообщения о завершении игры

    function createGameStatus(text) {
        const elem = document.createElement('div');
        elem.innerHTML = text;
        elem.classList.add('game-over');
        return elem;
    }

})