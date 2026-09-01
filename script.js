// let playerState = 'run';
// const dropdown = document.getElementById('animations');
// dropdown.addEventListener('change', function(e)
// {
//     playerState = e.target.value;
// })

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1600;
const CANVAS_HEIGHT = canvas.height = 900;
let gameSpeed = 1;
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'backgroundLayers/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'backgroundLayers/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'backgroundLayers/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'backgroundLayers/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'backgroundLayers/layer-5.png';

class Layer 
{
    constructor(image, speedModifier, yOffset = 0, heightMultiplier = 1.15)
    {
        this.x = 0;
        this.height = CANVAS_HEIGHT * heightMultiplier;
        this.width = (3072 / 1536) * this.height;
        const maxUpShift = this.height - CANVAS_HEIGHT; 
        this.y = -Math.min(Math.max(yOffset, 0), maxUpShift); 

        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update()
    {
        this.speed = gameSpeed * this.speedModifier;
        this.x -= this.speed;
        if (this.x <= -this.width)
        {
            this.x += this.width;
        }
        this.x = Math.floor(this.x);
    }
    draw()
    {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
}
const layer1 = new Layer(backgroundLayer1, 0.1, 80,  1.4);  
const layer2 = new Layer(backgroundLayer2, 0.3, 60,  1.25);
const layer3 = new Layer(backgroundLayer3, 0.5, 40,  1.2);
const layer4 = new Layer(backgroundLayer4, 0.7, 20,  1.1);
const layer5 = new Layer(backgroundLayer5, 0.9, 0,   1.0);   
// let x = 0;
// let x2 = CANVAS_WIDTH;

// const playerImage = new Image();
// playerImage.src = 'shadow_dog.png';
// const spriteWidth = 575;
// const spriteHeight = 523;

// let gameFrame = 0;
// const staggerFrames = 5;
// const spriteAnimations = [];
// const animationStates = 
// [
//     {
//         name: 'idle',
//         frames: 7,
//     },
//     {
//         name: 'jump',
//         frames: 7,
//     },
//     {
//         name: 'fall',
//         frames: 7,
//     },
//     {
//         name: 'run',
//         frames: 9,
//     },
//     {
//         name: 'dizzy',
//         frames: 11,
//     },
//     {
//         name: 'sit',
//         frames: 5,
//     },
//     {
//         name: 'roll',
//         frames: 7,
//     },
//     {
//         name: 'bite',
//         frames: 7,
//     },
//     {
//         name: 'go',
//         frames: 12,
//     },
//     {
//         name: 'getHit',
//         frames: 4,
//     }
// ];
// animationStates.forEach((state, index) => 
// {
//     let frames = 
//     {
//         loc: [],
//     }
//     for (let j = 0; j < state.frames; j++)
//     {
//         let positionX = j * spriteWidth;
//         let positionY = index * spriteHeight;
//         frames.loc.push({x: positionX, y: positionY});
//     }
//     spriteAnimations[state.name] = frames;
// });
// console.log(spriteAnimations);

let imagesLoaded = 0;
const totalImages = 5;
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        animate();
    }
}
backgroundLayer1.onload = imageLoaded;
backgroundLayer2.onload = imageLoaded;
backgroundLayer3.onload = imageLoaded;
backgroundLayer4.onload = imageLoaded;
backgroundLayer5.onload = imageLoaded;

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

function animate() 
{
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gameObjects.forEach(object =>
    {
        object.update();
        object.draw();
    });
    // let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    // let frameX = spriteWidth * position;
    // let frameY = spriteAnimations[playerState].loc[position].y;
    //ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    //console.log(gameFrame, position, frameX, frameY);
    //gameFrame++;

    // ctx.drawImage(backgroundLayer3, x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.drawImage(backgroundLayer3, x2, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // if (x < -CANVAS_WIDTH) x = CANVAS_WIDTH + x2 - gameSpeed;
    // else x -= gameSpeed;
    // if (x2 < -CANVAS_WIDTH) x2 = CANVAS_WIDTH + x - gameSpeed;
    // else x2 -= gameSpeed;
    requestAnimationFrame(animate);
}
animate();

//1:16:09