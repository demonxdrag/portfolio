import React from 'react'
import * as Three from 'three'
import OBJLoader from 'three-obj-loader'
OBJLoader(Three)

class ThreeJS extends React.Component {

    componentDidMount(){

        let renderWidth = 500
        let renderHeight = 500

        let renderer = new Three.WebGLRenderer({canvas: document.getElementById('three-js-canvas'), antialias: true})
        renderer.setClearColor(0xFFFFFF)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(renderWidth, renderHeight)
        this.Three = Three
        const objLoader = new this.Three.OBJLoader()

        /** Camera **/
        let camera = new Three.PerspectiveCamera(15, renderWidth / renderHeight, 0.1, 3000)
        camera.position.set(0,0,250)

        /** Scene **/
        let scene = new Three.Scene()

        /** Lights **/
        /* The material does not use lights, but they are here in case I decide to put a different material
        let light_01 = new Three.AmbientLight(0xFFFFFF, 0.5)
        let light_02 = new Three.PointLight(0xFFFFFF, 0.5)
        let light_03 = new Three.DirectionalLight(new Three.Color('hsl(30, 100%, 75%)'), 1.0)
        light_03.position.set(-100, 0, 100)
        let light_04 = new Three.DirectionalLight(new Three.Color('hsl(240, 100%, 75%)'), 1.0)
        light_04.position.set(100, 0, 100)
        let light_05 = new Three.DirectionalLight(0xFFFFFF, 1.0)
        light_05.position.set(100, 0, -100).normalize()
        scene.add(light_01)
        scene.add(light_02)
        scene.add(light_03)
        scene.add(light_04)
        scene.add(light_05)
        */

        /** OBJ **/
        objLoader.load(require("../public/images/test.obj"),
            obj => {
                obj.traverse( function ( node ) {
                    if ( node.isMesh ) node.material = new Three.MeshNormalMaterial();
                } );
                obj.position.set (0,0,0)
                obj.rotation.set (90,0,0)
                scene.add(obj)
            },
            xhr => {console.log(( xhr.loaded / xhr.total * 100 ) + '% loaded')},
            err => {console.error(err)}
        )

        /** Render Loop **/
        function animate() {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }
        animate();
    }

    render () {
        return (
            <canvas id='three-js-canvas'/>
        )
    }
}

export default ThreeJS