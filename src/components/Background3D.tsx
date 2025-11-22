"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const geometryShapesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x6366f1,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesRef.current = particlesMesh;

    // Create floating geometric shapes
    const shapes: THREE.Mesh[] = [];
    
    // Torus
    const torusGeometry = new THREE.TorusGeometry(3, 1, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x8b5cf6, 
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-15, 10, -10);
    scene.add(torus);
    shapes.push(torus);

    // Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(4, 0);
    const icoMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x06b6d4, 
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(15, -10, -15);
    scene.add(icosahedron);
    shapes.push(icosahedron);

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(3, 0);
    const octaMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xec4899, 
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(0, 15, -20);
    scene.add(octahedron);
    shapes.push(octahedron);

    geometryShapesRef.current = shapes;

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.05;
        particlesRef.current.rotation.x = elapsedTime * 0.03;
      }

      // Animate geometric shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x = elapsedTime * 0.3 * (index + 1);
        shape.rotation.y = elapsedTime * 0.2 * (index + 1);
        shape.position.y += Math.sin(elapsedTime + index) * 0.01;
      });

      // Camera movement based on mouse
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      
      shapes.forEach(shape => {
        shape.geometry.dispose();
        (shape.material as THREE.Material).dispose();
      });
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-20 bg-white dark:bg-gray-900" />
      <div 
        ref={containerRef} 
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{ pointerEvents: 'none' }}
      />
    </>
  );
}
