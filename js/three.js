
var fnh, vnh, light;
var init = function () {

    var scene = new THREE.Scene();
    var clock = new THREE.Clock();

    // camera takes 3 par: field of view, ratio and near/far clipping plane
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
   

    var renderer = new THREE.WebGLRenderer();
    // renderer.setClearColorHex(0xEEEEEE);
    renderer.setSize( window.innerWidth, window.innerHeight);

    

    // making the canvas contents maintainig the ratio when resizing the window
    window.addEventListener('resize', onResize, false);
    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    }
    // make a sphere around and put text about brains

    var polarGridHelper = new THREE.PolarGridHelper( 200, 2, 2, 200, 0X81FF87, 0X81FF87 );
				polarGridHelper.position.y = 100;
                polarGridHelper.position.x = 0;
                polarGridHelper.position.z = 0;
                scene.add( polarGridHelper );
     var polarGridHelper1 = new THREE.PolarGridHelper( 200, 3, 2, 204, 0X81FF87, 0X81FF87 );
				polarGridHelper1.position.y = 0;
                polarGridHelper1.position.x = 0;
                polarGridHelper1.position.z = 0;
                scene.add( polarGridHelper1 );
                
    var geometry = new THREE.CircleGeometry(50,50);
    var material = new THREE.MeshLambertMaterial({color:0xFFFFFF, wireframe: true});
    var circle = new THREE.Mesh(geometry, material);
    scene.add(circle);

    var geometry1 = new THREE.SphereGeometry( 200, 50, 50 );
    var material1 = new THREE.MeshLambertMaterial( {color: 0xFFFFFF, wireframe: true} );
    var sphere = new THREE.Mesh( geometry1, material1 );
    scene.add( sphere );

    //3d text
    var loader = new THREE.FontLoader();

loader.load( 'js/gentilis_regular.typeface.json', function ( font ) {

	var text = new THREE.TextGeometry( 'Hello Three js! Heeeeyyyyy', {
		font: font,
		size: 300,
		height: 50,
		curveSegments: 12,
		bevelEnabled: true,
		bevelThickness: 10,
		bevelSize: 8,
		bevelSegments: 5
    } );
    scene.add(text);
} );

    
    
    
    // //loading my 3d object
    var loader = new THREE.ObjectLoader();
    loader.load ( 'obj/brain.json', 
        function(obj) {
            object=obj;
            object.position.z = 0;
            object.position.y = 0;
            scene.add(object);      
        }
    )
    camera.position.z = 75;
    camera.position.y = 30;

    var light1 = new THREE.PointLight(0x85E6FC, 1, 950);
    scene.add(light1);
    var light2 = new THREE.PointLight(0x00606D, 1, 850);
    scene.add(light2);
    var light3 = new THREE.PointLight(0x1E495B, 2, 1050);
    scene.add(light3);
    var light4 = new THREE.PointLight(0x485860, 1, 950);
    scene.add(light4);
    var light5 = new THREE.PointLight(0x4C9E8F, 1, 850);
    scene.add(light5);
    var light6 = new THREE.PointLight(0x7C4055, 2, 90);
    scene.add(light6);

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.position.set(100,100,100);
    scene.add(directionalLight);
//     var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.01 );
// scene.add( light );
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    

    var update = function () {
        var time = Date.now()*.0005;
        light1.position.x = Math.sin(time*0.7)*200;
        light1.position.z = Math.cos(time*0.5)*100;
        light1.position.y = Math.sin(time*0.3)*300;
        light2.position.x = Math.cos(time*0.1)*400;
        light2.position.z = Math.sin(time*0.5)*500;
        light2.position.y = Math.sin(time*0.8)*600;
        light3.position.x = Math.cos(time*0.2)*700;
        light3.position.z = Math.cos(time*0.6)*800;
        light3.position.y = Math.sin(time*0.4)*900;
        light4.position.x = Math.sin(time*0.7)*200;
        light4.position.z = Math.cos(time*0.5)*100;
        light4.position.y = Math.sin(time*0.3)*300;
        light5.position.x = Math.cos(time*0.1)*400;
        light5.position.z = Math.sin(time*0.5)*500;
        light5.position.y = Math.sin(time*0.8)*600;
        light6.position.x = Math.cos(time*0.02)*700;
        light6.position.z = Math.cos(time*0.6)*800;
        light6.position.y = Math.sin(time*0.4)*900;

        circle.rotation.x +=.005;
        circle.rotation.z +=.003;
        sphere.rotation.y -=.001;
    }
    document.getElementById("WebGL-output").appendChild(renderer.domElement);
      
   

    function renderScene() {
        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
        update(); 
        }
        renderScene();
};
window.onload = init;