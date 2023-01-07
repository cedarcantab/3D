
class CubeGeometry {
  constructor() {
    this.positions = [         
      // TOP
      -1.0, 1.0, -1.0,   
      -1.0, 1.0, 1.0,    
      1.0, 1.0, 1.0,    
      1.0, 1.0, -1.0,    
      // LEFT
      -1.0, 1.0, 1.0,    
      -1.0, -1.0, 1.0,  
      -1.0, -1.0, -1.0,  
      -1.0, 1.0, -1.0,  
      // RIGHT
      1.0, 1.0, 1.0,    
      1.0, -1.0, 1.0,   
      1.0, -1.0, -1.0,  
      1.0, 1.0, -1.0,   
      // FRONT
      1.0, 1.0, 1.0,   
      1.0, -1.0, 1.0,   
      -1.0, -1.0, 1.0,    
      -1.0, 1.0, 1.0,   
      // BACK
      1.0, 1.0, -1.0,    
      1.0, -1.0, -1.0,    
      -1.0, -1.0, -1.0,    
      -1.0, 1.0, -1.0,    
      // BOTTOM
      -1.0, -1.0, -1.0,   
      -1.0, -1.0, 1.0,    
      1.0, -1.0, 1.0,     
      1.0, -1.0, -1.0,    
    ];
   
    this.uvs = [
      //TOP
      0,0,
      0,1,
      1,1,
      1,0,
      //LEFT
      0,0,
      1,0,
      1,1,
      0,1,
      //RIGHT
      1,1,
      1,0,
      0,0,
      0,1,
      //FRONT
      1,1,
      1,0,
      0,0,
      0,1,
      //BACK
      0,0,
      0,1,
      1,1,
      1,0,
      //BOTTOM
      1,1,
      1,0,
      0,0,
      0,1,
      //FILLER
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
  
   this.indices =	[
      // TOP
      0, 1, 2,
      0, 2, 3,
      // LEFT
      5, 4, 6,
      6, 4, 7,
      // RIGHT
      8, 9, 10,
      8, 10, 11,
      // FRONT
      13, 12, 14,
      15, 14, 12,
      // BACK
      16, 17, 18,
      16, 18, 19,
      // BOTTOM
      21, 20, 22,
      22, 20, 23
    ];
  }

}

function preload () {

  this.load.video('train', 'assets/train512x256.mp4', 'loadeddata', false, true);
 
}

function create () {
   
  const vid = this.make.video({
    add: false,
    key: 'train'
  });
  const vTex = vid.texture;
  mesh = this.add.mesh(250,250, vTex); 
  mesh.panZ(15);
  // now form the Mesh into a cube
  var cube = new CubeGeometry();  
  mesh.addVertices(cube.positions, cube.uvs, cube.indices, true);

  // start the video playing!
  vid.play(true);  
  // Prevents video freeze when game is out of focus (i.e. user changes tab on the browser) 
  // vid.setPaused(false);
 
}

function update ()    {
  // rotate cube
  mesh.modelRotation.z += 0.01;
  mesh.modelRotation.y += 0.01;
}

const config = {
  type: Phaser.WEBGL,
  width: 500,
  height: 500,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

const w = config.width;
const h = config.height;