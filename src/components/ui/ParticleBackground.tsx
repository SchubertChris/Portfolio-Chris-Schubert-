// src/components/ParticleBackground.tsx
import React, { useEffect, useRef } from 'react';
import './ParticleBackground.scss';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
}

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const mousePosition = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef<number>(0);

    // Initialisiere den Hintergrund
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Setze Canvas-Größe
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        // Erstelle Partikel
        const initParticles = () => {
            particles.current = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 10000); // Anzahl der Partikel je nach Bildschirmgröße

            for (let i = 0; i < particleCount; i++) {
                const size = Math.random() * 2 + 1;

                // Goldene Farbpalette für Partikel
                const colors = [
                    'rgba(200, 162, 83, 0.8)',  // Gold (Primärfarbe)
                    'rgba(174, 140, 71, 0.6)',  // Dunkleres Gold
                    'rgba(226, 184, 94, 0.7)',  // Helleres Gold
                    'rgba(255, 255, 255, 0.7)'  // Weiß für zusätzlichen Kontrast
                ];

                particles.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size,
                    speedX: Math.random() * 0.5 - 0.25,
                    speedY: Math.random() * 0.5 - 0.25,
                    color: colors[Math.floor(Math.random() * colors.length)]
                });
            }
        };

        // Mouse Movement Tracking
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            updateParticles();
            drawParticles(ctx);
            connectParticles(ctx);
            animationFrameId.current = requestAnimationFrame(animate);
        };

        // Update Particle Positions
        const updateParticles = () => {
            particles.current.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wraparound wenn Partikel den Bildschirm verlässt
                if (particle.x > canvas.width) particle.x = 0;
                else if (particle.x < 0) particle.x = canvas.width;

                if (particle.y > canvas.height) particle.y = 0;
                else if (particle.y < 0) particle.y = canvas.height;

                // Interaktion mit Mausposition
                const dx = mousePosition.current.x - particle.x;
                const dy = mousePosition.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const angle = Math.atan2(dy, dx);
                    const force = (100 - distance) / 1500;

                    particle.speedX -= Math.cos(angle) * force;
                    particle.speedY -= Math.sin(angle) * force;
                }
            });
        };

        // Draw Particles
        const drawParticles = (ctx: CanvasRenderingContext2D) => {
            particles.current.forEach(particle => {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });
        };

        // Connect Particles with Lines
        const connectParticles = (ctx: CanvasRenderingContext2D) => {
            const maxDistance = 150;

            for (let i = 0; i < particles.current.length; i++) {
                for (let j = i + 1; j < particles.current.length; j++) {
                    const dx = particles.current[i].x - particles.current[j].x;
                    const dy = particles.current[i].y - particles.current[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        // Je weiter entfernt, desto transparenter die Linie
                        const opacity = 1 - (distance / maxDistance);

                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(200, 162, 83, ${opacity * 0.5})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles.current[i].x, particles.current[i].y);
                        ctx.lineTo(particles.current[j].x, particles.current[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Events und Animation starten
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        resizeCanvas();
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <canvas ref={canvasRef} className="particle-canvas"></canvas>
    );
};

export default ParticleBackground;