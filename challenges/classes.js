// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker{
    constructor(){
        // All sides of a cube must be equal.
        if(this.length !== this.width || this.length !== this.height){
            return `You specifed this cube to have ${this.length} length, ${this.width} width, and ${this.height} height. In a cube, all sides must be equal.`;
        }
    }

    volume(){
        return Math.pow(this.length, 3);
    }

    surfaceArea(){
        return 6 * Math.pow(this.length, 2); // Surface area of a cube is the length of the side of each edge of the cube.
                                             // One side's surface area is the length of the side of the edge squared, and the cube has six sides, so the total surface area is 6 * a(squared).
                                             // Phew! That was quite a mouth full! lol. : - )
    }
}