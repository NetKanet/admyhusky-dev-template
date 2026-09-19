// Self-hosted Three.js, no remote models or textures. The CSS planet is the fallback.
import * as THREE from './vendor/three.module.min.js';

const host = document.querySelector('#universe');
const canvas = document.querySelector('#space-canvas');
try {
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true, powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.setClearColor(0x10110f, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(37, 1, .1, 100);
  camera.position.set(0, .4, 9.3);
  camera.lookAt(0,0,0);
  const system = new THREE.Group();
  scene.add(system);
  scene.add(new THREE.HemisphereLight(0xe4f1c9, 0x172314, 2));
  const key = new THREE.DirectionalLight(0xf4ffcf, 4.5); key.position.set(-3,5,4); scene.add(key);
  const rim = new THREE.DirectionalLight(0xd9f796, 2.5); rim.position.set(3,0,-3); scene.add(rim);
  const fill = new THREE.DirectionalLight(0x8c9ab0, .7); fill.position.set(4,-2,2); scene.add(fill);
  let seed = 34;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed-1)/2147483646; };
  const terrain = new THREE.SphereGeometry(1.47, 112, 80);
  const positions = terrain.attributes.position;
  const colors = [];
  const n = new THREE.Vector3();
  const low = new THREE.Color('#435a31'), high = new THREE.Color('#a1b877');
  const craters = Array.from({length:18},()=> ({dir:new THREE.Vector3(random()*2-1,random()*2-1,random()*2-1).normalize(),size:.06+random()*.13}));
  for(let i=0;i<positions.count;i++) {
    n.fromBufferAttribute(positions,i).normalize();
    const noise = Math.sin(n.x*18+Math.cos(n.z*11))*Math.cos(n.y*17+n.z*9) * .015 + Math.sin(n.x*43+n.y*37)*Math.cos(n.z*39)*.006;
    let depth = 0;
    for (const crater of craters) { const distance=n.distanceTo(crater.dir)/crater.size; if(distance<1.3) depth += distance<.8 ? -.038*(1-distance*distance/ .64) : .012*Math.sin((distance-.8)*Math.PI/.5); }
    positions.setXYZ(i,n.x*(1.47+noise+depth),n.y*(1.47+noise+depth),n.z*(1.47+noise+depth));
    const color = low.clone().lerp(high,THREE.MathUtils.clamp(.48 + noise*9 + depth*4 + .12*Math.sin(n.x*6+n.y*8),0,1));
    colors.push(color.r,color.g,color.b);
  }
  terrain.setAttribute('color',new THREE.Float32BufferAttribute(colors,3)); terrain.computeVertexNormals();
  const planet = new THREE.Mesh(terrain,new THREE.MeshStandardMaterial({vertexColors:true,roughness:.96}));
  const globe = new THREE.Group(); globe.add(planet); system.add(globe); globe.rotation.z=-.23;
  // A miniature backend city grows directly out of the planet's north pole.
  const city = new THREE.Group(); city.position.set(0,1.4,0); globe.add(city);
  const buildingMat = new THREE.MeshStandardMaterial({color:0x303d28,roughness:.65,metalness:.2});
  const windowMat = new THREE.MeshBasicMaterial({color:0xdbf7a3});
  for(let i=0;i<11;i++) {
    const height=.15+random()*.43, x=(random()-.5)*.9, z=(random()-.5)*.65;
    const building=new THREE.Mesh(new THREE.BoxGeometry(.12+random()*.1,height,.15),buildingMat);
    building.position.set(x,height/2-Math.abs(x)*.13,z); city.add(building);
    for(let j=0;j<3;j++){const slit=new THREE.Mesh(new THREE.BoxGeometry(.07,.011,.003),windowMat);slit.position.set(x,.06+j*.06,z+.077);city.add(slit);}
  }
  const mast=new THREE.Mesh(new THREE.CylinderGeometry(.009,.012,.7,6),buildingMat); mast.position.set(.24,.45,0);city.add(mast);
  const beacon=new THREE.Mesh(new THREE.SphereGeometry(.025,10,8),windowMat);beacon.position.set(.24,.81,0);city.add(beacon);
  // Thin orbital paths and a broad, translucent planetary ring.
  const ringGroup=new THREE.Group();ringGroup.rotation.set(1.16,-.17,-.38);system.add(ringGroup);
  for(const radius of [2.02,2.15,2.48]){
    const ring=new THREE.Mesh(new THREE.TorusGeometry(radius,.004,5,180),new THREE.MeshBasicMaterial({color:0xaac87d,transparent:true,opacity:radius===2.48?.3:.55}));ringGroup.add(ring);
  }
  const dust=new THREE.Mesh(new THREE.RingGeometry(2.05,2.13,160),new THREE.MeshBasicMaterial({color:0xc4dc99,transparent:true,opacity:.12,side:THREE.DoubleSide,depthWrite:false}));ringGroup.add(dust);
  const moon=new THREE.Mesh(new THREE.IcosahedronGeometry(.24,3),new THREE.MeshStandardMaterial({color:0xc6c4af,roughness:1,flatShading:true}));system.add(moon);
  const smallMoon=new THREE.Mesh(new THREE.IcosahedronGeometry(.1,2),new THREE.MeshStandardMaterial({color:0xadc579,roughness:.65}));system.add(smallMoon);
  const satellite=new THREE.Group(); satellite.add(new THREE.Mesh(new THREE.BoxGeometry(.13,.14,.12),new THREE.MeshStandardMaterial({color:0xb8bda7,metalness:.6,roughness:.3})));
  const panelMat=new THREE.MeshStandardMaterial({color:0x384d35,metalness:.65,roughness:.3});
  for(const side of [-1,1]){const panel=new THREE.Mesh(new THREE.BoxGeometry(.24,.16,.015),panelMat);panel.position.x=side*.21;satellite.add(panel);const edges=new THREE.LineSegments(new THREE.EdgesGeometry(panel.geometry),new THREE.LineBasicMaterial({color:0xbacc93}));panel.add(edges);}
  system.add(satellite);
  const starPositions=[];for(let i=0;i<180;i++){starPositions.push((random()-.5)*14,(random()-.5)*11,-2-random()*5);}
  const starGeo=new THREE.BufferGeometry();starGeo.setAttribute('position',new THREE.Float32BufferAttribute(starPositions,3));
  const stars=new THREE.Points(starGeo,new THREE.PointsMaterial({color:0xcdd9b4,size:.016,transparent:true,opacity:.65}));scene.add(stars);
  let paused=document.documentElement.classList.contains('motion-paused') || matchMedia('(prefers-reduced-motion: reduce)').matches;
  let visible=true, lost=false, frame=0, previous=0, elapsed=0, targetX=0,targetY=0,dragging=false,lastX=0;
  const draw=()=>renderer.render(scene,camera);
  const resize=()=>{const width=host.clientWidth,height=host.clientHeight;renderer.setSize(width,height,false);camera.aspect=width/height;camera.position.z=width<500?10.6:9.3;camera.updateProjectionMatrix();if(!lost)draw();};
  const animate=(now)=>{
    frame=0;
    if(paused || !visible || document.hidden || lost) return;
    const delta=previous?Math.min((now-previous)/1000,.05):0;previous=now;elapsed+=delta;
    globe.rotation.y += delta*.075;
    system.rotation.y += (targetX-system.rotation.y)*.035;
    system.rotation.x += (targetY-system.rotation.x)*.035;
    system.position.y=Math.sin(elapsed*.55)*.045;
    moon.position.set(Math.cos(elapsed*.14+.3)*2.5,Math.sin(elapsed*.14+.3)*1.2,Math.sin(elapsed*.14+.3)*1.1);
    smallMoon.position.set(Math.cos(elapsed*.2+3.6)*2.15,Math.sin(elapsed*.2+3.6)*1.15,Math.sin(elapsed*.2+3.6)*1.8);
    satellite.position.set(Math.cos(elapsed*.11+2)*2.35,Math.sin(elapsed*.11+2)*1.8,Math.sin(elapsed*.11+2)*.8);satellite.rotation.set(.3,elapsed*.2,-.35);
    stars.rotation.z=elapsed*.002;
    draw();frame=requestAnimationFrame(animate);
  };
  const sync=()=>{if(frame)cancelAnimationFrame(frame);frame=0;previous=0;if(!paused&&visible&&!document.hidden&&!lost)frame=requestAnimationFrame(animate);else if(!lost)draw();};
  // Position orbiters before the first frame, including reduced-motion mode.
  moon.position.set(2.39,.35,.32);smallMoon.position.set(-1.92,-.52,-.8);satellite.position.set(-.97,1.64,.73);
  canvas.addEventListener('pointermove',e=>{if(paused)return;const bounds=canvas.getBoundingClientRect();targetX=((e.clientX-bounds.left)/bounds.width-.5)*.25;targetY=((e.clientY-bounds.top)/bounds.height-.5)*.12;if(dragging){globe.rotation.y+=(e.clientX-lastX)*.008;lastX=e.clientX;}});
  canvas.addEventListener('pointerdown',e=>{if(paused)return;dragging=true;lastX=e.clientX;canvas.setPointerCapture(e.pointerId);});
  for(const event of ['pointerup','pointercancel','lostpointercapture']) canvas.addEventListener(event,()=>{dragging=false;});
  canvas.addEventListener('pointerleave',()=>{targetX=0;targetY=0;});
  window.addEventListener('orbit:motion',e=>{paused=e.detail.paused;sync();});
  document.addEventListener('visibilitychange',sync);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{rootMargin:'100px'}).observe(host);
  new ResizeObserver(resize).observe(host);
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;host.classList.remove('webgl-ready');sync();});
  canvas.addEventListener('webglcontextrestored',()=>{lost=false;host.classList.add('webgl-ready');resize();sync();});
  resize();host.classList.add('webgl-ready');sync();
} catch(error) {
  // Content and navigation remain usable even with unavailable WebGL.
  canvas.hidden=true;
  console.info('Planet Net is using its static illustration.',error.message);
}
