"use client";

import { useEffect, useRef } from "react";

// BinaryChar class
class BinaryChar {
  x: number;
  y: number;
  char: string;
  speed: number;
  opacity: number;
  size: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(
    initialX: number | undefined,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x =
      initialX !== undefined ? initialX : Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.char = Math.random() > 0.5 ? "0" : "1";
    this.speed = 0.2; // Very slow, consistent speed
    this.opacity = 0.15 + Math.random() * 0.1; // Slightly more visible
    this.size = 16 + Math.random() * 4; // Varied sizes for depth
  }

  update() {
    // Move horizontally (left to right) slowly
    this.x += this.speed;

    // Reset position when off screen - wrap around seamlessly
    if (this.x > this.canvas.width + 50) {
      this.x = -50;
      this.y = Math.random() * this.canvas.height;
      this.char = Math.random() > 0.5 ? "0" : "1";
      this.size = 16 + Math.random() * 4;
    }
  }

  draw() {
    this.ctx.font = `${this.size}px "Courier New", monospace`; // Robotic monospace font
    this.ctx.fillStyle = `rgba(0, 255, 65, ${this.opacity})`; // Bright cyber green
    this.ctx.fillText(this.char, this.x, this.y);
  }
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create binary characters evenly distributed
    const binaryChars: BinaryChar[] = [];
    const isMobile = window.innerWidth < 768;
    
    // For mobile: fewer characters with more spacing to avoid clustering
    const rows = Math.floor(canvas.height / (isMobile ? 60 : 30)); // Double spacing on mobile
    const cols = Math.floor(canvas.width / (isMobile ? 80 : 40)); // Double spacing on mobile

    // Create a grid-like pattern for even distribution
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // pass canvas and ctx to the BinaryChar constructor
        const spacing = isMobile ? 80 : 40;
        const char = new BinaryChar(col * spacing + Math.random() * 20, canvas, ctx);
        char.y = row * (isMobile ? 60 : 30) + Math.random() * 20;
        char.opacity = isMobile ? 0.08 + Math.random() * 0.05 : 0.15 + Math.random() * 0.1; // Lighter on mobile
        binaryChars.push(char);
      }
    }

    // Animation loop
    let rafId = 0;
    const animate = () => {
      // Clear canvas completely for crisp rendering
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      binaryChars.forEach((char) => {
        char.update();
        char.draw();
      });

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // cleanup: stop animation and remove resize listener
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}