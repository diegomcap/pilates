import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Settings, Subtitles, SkipBack, SkipForward, Download } from 'lucide-react';

const AccessibleVideoPlayer = ({ 
  src, 
  poster, 
  title, 
  description, 
  subtitles = [], 
  transcript = "",
  autoPlay = false, 
  muted = false,
  controls = true,
  className = "",
  onPlay,
  onPause,
  onEnded,
  ariaLabel,
  downloadUrl
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyboardFocus, setKeyboardFocus] = useState(false);

  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      onPlay && onPlay();
    };

    const handlePause = () => {
      setIsPlaying(false);
      onPause && onPause();
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onEnded && onEnded();
    };

    const handleError = () => {
      // Silenciar erros de carregamento de vídeo
      setIsLoading(false);
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [onPlay, onPause, onEnded]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!keyboardFocus) return;

      switch (e.key) {
        case ' ':
        case 'k':
          e.preventDefault();
          togglePlay();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          skip(-10);
          break;
        case 'ArrowRight':
          e.preventDefault();
          skip(10);
          break;
        case 'ArrowUp':
          e.preventDefault();
          changeVolume(0.1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          changeVolume(-0.1);
          break;
        case 'm':
          e.preventDefault();
          toggleMute();
          break;
        case 'f':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'c':
          e.preventDefault();
          setShowSubtitles(!showSubtitles);
          break;
        case 't':
          e.preventDefault();
          setShowTranscript(!showTranscript);
          break;
        case 'Escape':
          if (isFullscreen) {
            document.exitFullscreen();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [keyboardFocus, isFullscreen, showSubtitles, showTranscript]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const changeVolume = (delta) => {
    const video = videoRef.current;
    const newVolume = Math.max(0, Math.min(1, video.volume + delta));
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    const video = videoRef.current;
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * duration;
  };

  const skip = (seconds) => {
    const video = videoRef.current;
    video.currentTime = Math.max(0, Math.min(duration, video.currentTime + seconds));
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const changePlaybackRate = (rate) => {
    const video = videoRef.current;
    video.playbackRate = rate;
    setPlaybackRate(rate);
    setShowSettings(false);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying && !keyboardFocus) setShowControls(false);
    }, 3000);
  };

  const handleMouseMove = () => {
    showControlsTemporarily();
  };

  if (error) {
    return (
      <div className={`relative bg-gray-900 rounded-lg overflow-hidden ${className}`}>
        <div className="flex items-center justify-center h-64 text-white p-8">
          <div className="text-center">
            <div className="text-red-400 mb-4 text-4xl">⚠️</div>
            <h3 className="text-lg font-semibold mb-2">Erro no Vídeo</h3>
            <p className="text-gray-300 mb-4">{error}</p>
            {downloadUrl && (
              <a 
                href={downloadUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Baixar Vídeo
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Video Container */}
      <div 
        ref={containerRef}
        className="relative bg-black rounded-lg overflow-hidden group focus-within:ring-2 focus-within:ring-primary-500"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && !keyboardFocus && setShowControls(false)}
        onFocus={() => setKeyboardFocus(true)}
        onBlur={() => setKeyboardFocus(false)}
        tabIndex={0}
        role="application"
        aria-label={ariaLabel || `Player de vídeo: ${title}`}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          muted={isMuted}
          className="w-full h-full object-cover"
          onClick={togglePlay}
          aria-describedby={`video-description-${title?.replace(/\s+/g, '-')}`}
        >
          {subtitles.map((subtitle, index) => (
            <track
              key={index}
              kind="subtitles"
              src={subtitle.src}
              srcLang={subtitle.lang}
              label={subtitle.label}
              default={index === 0 && showSubtitles}
            />
          ))}
          Seu navegador não suporta o elemento de vídeo.
        </video>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p>Carregando vídeo...</p>
            </div>
          </div>
        )}

        {/* Play Button Overlay */}
        {!isPlaying && !isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <button
              onClick={togglePlay}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all duration-200 transform hover:scale-110 focus:ring-2 focus:ring-primary-500 focus:outline-none"
              aria-label={`Reproduzir vídeo: ${title}`}
            >
              <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
            </button>
          </div>
        )}

        {/* Controls */}
        {controls && (
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 transition-opacity duration-300 ${showControls || keyboardFocus ? 'opacity-100' : 'opacity-0'}`}>
            {/* Progress Bar */}
            <div className="mb-4">
              <div 
                className="w-full h-2 bg-white bg-opacity-30 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={handleSeek}
                role="slider"
                aria-label="Barra de progresso do vídeo"
                aria-valuemin="0"
                aria-valuemax={duration}
                aria-valuenow={currentTime}
                aria-valuetext={`${formatTime(currentTime)} de ${formatTime(duration)}`}
                tabIndex={0}
              >
                <div 
                  className="h-full bg-primary-500 rounded-full relative"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary-500 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => skip(-10)} 
                  className="hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1"
                  aria-label="Retroceder 10 segundos"
                >
                  <SkipBack className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={togglePlay} 
                  className="hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1"
                  aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                
                <button 
                  onClick={() => skip(10)} 
                  className="hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1"
                  aria-label="Avançar 10 segundos"
                >
                  <SkipForward className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-2">
                  <button 
                    onClick={toggleMute} 
                    className="hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1"
                    aria-label={isMuted ? "Ativar som" : "Silenciar"}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
                    aria-label="Controle de volume"
                  />
                </div>

                <span className="text-sm" aria-live="polite">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                {subtitles.length > 0 && (
                  <button 
                    onClick={() => setShowSubtitles(!showSubtitles)}
                    className={`hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1 ${showSubtitles ? 'text-primary-400' : ''}`}
                    aria-label={showSubtitles ? "Ocultar legendas" : "Mostrar legendas"}
                    aria-pressed={showSubtitles}
                  >
                    <Subtitles className="w-5 h-5" />
                  </button>
                )}

                <div className="relative">
                  <button 
                    onClick={() => setShowSettings(!showSettings)}
                    className="hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1"
                    aria-label="Configurações do vídeo"
                    aria-expanded={showSettings}
                  >
                    <Settings className="w-5 h-5" />
                  </button>
                  
                  {showSettings && (
                    <div className="absolute bottom-8 right-0 bg-black bg-opacity-90 rounded-lg p-3 min-w-40 z-10">
                      <div className="text-sm font-semibold mb-2">Velocidade de Reprodução</div>
                      {[0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => (
                        <button
                          key={rate}
                          onClick={() => changePlaybackRate(rate)}
                          className={`block w-full text-left px-2 py-1 rounded hover:bg-white hover:bg-opacity-20 focus:outline-none focus:bg-white focus:bg-opacity-20 ${playbackRate === rate ? 'text-primary-400' : ''}`}
                          aria-pressed={playbackRate === rate}
                        >
                          {rate}x {playbackRate === rate && '✓'}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button 
                  onClick={toggleFullscreen} 
                  className="hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-1"
                  aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
                >
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Video Info Overlay */}
        {title && (
          <div className="absolute top-4 left-4 right-4 text-white">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            {description && (
              <p 
                className="text-sm opacity-90"
                id={`video-description-${title.replace(/\s+/g, '-')}`}
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Transcript Section */}
      {transcript && (
        <div className="bg-gray-50 rounded-lg p-4">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center justify-between w-full text-left font-semibold text-gray-900 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded p-2"
            aria-expanded={showTranscript}
          >
            <span>Transcrição do Vídeo</span>
            <span className={`transform transition-transform ${showTranscript ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {showTranscript && (
            <div className="mt-4 p-4 bg-white rounded border text-gray-700 max-h-64 overflow-y-auto">
              <p className="whitespace-pre-line leading-relaxed">{transcript}</p>
            </div>
          )}
        </div>
      )}

      {/* Keyboard Shortcuts Help */}
      <div className="text-xs text-gray-500 bg-gray-50 rounded p-3">
        <strong>Atalhos do teclado:</strong> Espaço/K = Play/Pause | ← → = -10s/+10s | ↑ ↓ = Volume | M = Mudo | F = Tela cheia | C = Legendas | T = Transcrição
      </div>
    </div>
  );
};

export default AccessibleVideoPlayer;