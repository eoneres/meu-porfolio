'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import projectsData from '../data/projects.json';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingProject, setPendingProject] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef(null);
  const autoplayRef = useRef(null);
  
  const media = selectedProject.media || [];
  const totalItems = media.length;
  
  const [clonedMedia, setClonedMedia] = useState([]);
  const [clonedIndex, setClonedIndex] = useState(1);

  useEffect(() => {
    if (totalItems === 0) {
      setClonedMedia([]);
      return;
    }
    const cloned = [media[media.length - 1], ...media, media[0]];
    setClonedMedia(cloned);
    setClonedIndex(1);
  }, [selectedProject, totalItems, media]);

  const realIndex = (() => {
    if (!clonedMedia.length || totalItems === 0) return 0;
    if (clonedIndex === 0) return totalItems - 1;
    if (clonedIndex === totalItems + 1) return 0;
    return clonedIndex - 1;
  })();

  const jumpToIndex = useCallback((index, withAnimation = true) => {
    if (!trackRef.current) return;
    if (withAnimation) {
      trackRef.current.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
    } else {
      trackRef.current.style.transition = 'none';
    }
    trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    setClonedIndex(index);
  }, []);

  const next = useCallback(() => {
    if (totalItems <= 1) return;
    let newIndex = clonedIndex + 1;
    jumpToIndex(newIndex, true);
    setTimeout(() => {
      if (newIndex === totalItems + 1) {
        jumpToIndex(1, false);
      }
    }, 500);
  }, [clonedIndex, totalItems, jumpToIndex]);

  const prev = useCallback(() => {
    if (totalItems <= 1) return;
    let newIndex = clonedIndex - 1;
    jumpToIndex(newIndex, true);
    setTimeout(() => {
      if (newIndex === 0) {
        jumpToIndex(totalItems, false);
      }
    }, 500);
  }, [clonedIndex, totalItems, jumpToIndex]);

  useEffect(() => {
    if (isAutoPlaying && totalItems > 1) {
      autoplayRef.current = setInterval(() => {
        next();
      }, 5000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [isAutoPlaying, totalItems, next]);

  const pauseAutoplay = () => setIsAutoPlaying(false);
  const resumeAutoplay = () => setIsAutoPlaying(true);

  const handleMouseDown = (e) => {
    if (totalItems <= 1) return;
    pauseAutoplay();
    setIsDragging(true);
    setStartX(e.clientX);
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
    if (trackRef.current) {
      const currentTransform = -clonedIndex * 100;
      trackRef.current.style.transform = `translateX(calc(${currentTransform}% + ${diff}px))`;
    }
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prev();
      } else {
        next();
      }
    } else {
      jumpToIndex(clonedIndex, true);
    }
    setDragOffset(0);
    resumeAutoplay();
  };

  const renderMediaItem = (item, idx) => {
    if (item.type === 'video') {
      return (
        <video
          src={item.src}
          controls
          className="w-full h-full object-contain bg-black/5"
          poster={item.poster || ''}
        />
      );
    }
    return (
      <Image
        src={item.src}
        alt={`${selectedProject.title} - ${idx}`}
        fill
        className="object-contain hover:scale-105 transition-transform duration-500"
      />
    );
  };

  const handleProjectChange = (project) => {
    if (project.slug === selectedProject.slug || isTransitioning) return;
    setPendingProject(project);
    setIsTransitioning(true);
    pauseAutoplay();
  };

  useEffect(() => {
    if (isTransitioning && pendingProject) {
      const timer = setTimeout(() => {
        setSelectedProject(pendingProject);
        setPendingProject(null);
        setIsTransitioning(false);
        setClonedIndex(1);
        resumeAutoplay();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, pendingProject, resumeAutoplay]);

  if (totalItems === 0) {
    return (
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="text-center">Nenhuma mídia disponível.</div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meus Projetos</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-300 dark:border-gray-700 pb-2">
          {projectsData.map((project) => (
            <button
              key={project.slug}
              onClick={() => handleProjectChange(project)}
              className={`px-6 py-2 rounded-t-lg transition-all ${
                selectedProject.slug === project.slug
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        <div className={`transition-all duration-300 ease-in-out transform ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden group" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden cursor-grab active:cursor-grabbing" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
              <div ref={trackRef} className="flex h-full">
                {clonedMedia.map((item, idx) => (
                  <div key={idx} className="min-w-full h-full relative flex-shrink-0">
                    {renderMediaItem(item, idx)}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <p className="text-sm opacity-90">{selectedProject.shortDescription}</p>
              </div>
              {totalItems > 1 && (
                <>
                  <button onClick={(e) => { e.stopPropagation(); prev(); pauseAutoplay(); setTimeout(resumeAutoplay, 300); }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition z-10">◀</button>
                  <button onClick={(e) => { e.stopPropagation(); next(); pauseAutoplay(); setTimeout(resumeAutoplay, 300); }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition z-10">▶</button>
                </>
              )}
              {totalItems > 1 && (
                <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-10">
                  {media.map((_, i) => (
                    <button key={i} onClick={() => { pauseAutoplay(); jumpToIndex(i+1, true); setTimeout(resumeAutoplay, 300); }} className={`w-2 h-2 rounded-full transition-all ${realIndex === i ? 'bg-white w-6' : 'bg-white/50'}`} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{selectedProject.fullDescription}</p>
            <div className="flex gap-4 mt-6">
              {selectedProject.liveDemo && <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Demo ao vivo</a>}
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="border border-gray-400 dark:border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Código fonte</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
