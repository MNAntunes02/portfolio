import { NgtRenderState, NgtVector3 } from '@angular-three/core';
import { NgtGLTFLoader, NgtTextureLoader } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import * as THREE from 'three';
import { Mesh, MeshStandardMaterial, Object3D, Texture } from 'three';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {

  @Input('position') position?: NgtVector3;
  @Input('change') imageDisplay:any;
  
  celular$ = this.ngtGLTFLoader.load('./assets/s21/scene.gltf');
  texturaInstagram:any;
  texturaGithub:any;
  texturaLinkedin:any;
  direction = 'left'

  constructor(private ngtGLTFLoader: NgtGLTFLoader) 
  {
    this.texturaInstagram = new THREE.TextureLoader().load("./assets/s21/textures-instagram/Display_ActiveArea_baseColor.jpg");
    this.texturaLinkedin = new THREE.TextureLoader().load("./assets/s21/textures-linkedin/Display_ActiveArea_baseColor.jpg");
    this.texturaGithub = new THREE.TextureLoader().load("./assets/s21/textures-github/Display_ActiveArea_baseColor.jpg");
  }

  ngOnInit(): void {

  }
  

  celularMaterial!: MeshStandardMaterial;

  getReady(object: Object3D){
    this.celularMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Display_ActiveArea_1')).material;
  }

  changeDisplay(){
    if (this.imageDisplay == "Instagram") {        
      this.celularMaterial.map = this.texturaInstagram;
      this.celularMaterial.emissiveMap = this.texturaInstagram;
    }
    if (this.imageDisplay == "Github") {        
      this.celularMaterial.map = this.texturaGithub;
      this.celularMaterial.emissiveMap = this.texturaGithub;
    }
    if (this.imageDisplay == "Linkedin") {        
      this.celularMaterial.map = this.texturaLinkedin;
      this.celularMaterial.emissiveMap = this.texturaLinkedin;
    }
  }

  onCubeBeforeRender($event: { state: NgtRenderState; object: any }) {
    
    const cube = $event.object;

    if(cube.rotation.y >= -0.5 && this.direction == 'left'){
      cube.rotation.y -= 0.001;
    }else{
      this.direction = 'right'
      cube.rotation.y += 0.001;
      if(cube.rotation.y >= 0.5){
        this.direction = 'left'
      }
    }

    //evento para observar hover e trocar display do objeto
    this.changeDisplay();

    // console.log(cube.rotation.y)
    // console.log(this.direction)
  }
}
