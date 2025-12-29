"use client"

interface VideoControlsProps {
    isPlaying: boolean
    isMuted: boolean
    onPlayPause: () => void
    onMuteToggle: () => void
}

export default function VideoControls({ isPlaying, isMuted, onPlayPause, onMuteToggle }: VideoControlsProps) {
    return (
        <div className="flex items-center gap-4">
            {/* Play/Pause button */}
            <button
                onClick={onPlayPause}
                className="w-12 h-12 flex items-center justify-center rounded-[4px] border-2 border-blanc hover:bg-blanc/10 transition-all group"
                aria-label={isPlaying ? "Pause video" : "Play video"}
            >
                {isPlaying ? (
                    // Pause icon (two vertical bars)
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="6" y="4" width="4" height="16" fill="white" className="group-hover:fill-blanc" />
                        <rect x="14" y="4" width="4" height="16" fill="white" className="group-hover:fill-blanc" />
                    </svg>
                ) : (
                    // Play icon (triangle)
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7z" fill="white" className="group-hover:fill-blanc" />
                    </svg>
                )}
            </button>

            {/* Mute/Unmute button */}
            <button
                onClick={onMuteToggle}
                className="w-12 h-12 flex items-center justify-center rounded-[4px] border-2 border-blanc hover:bg-blanc/10 transition-all group"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
                {isMuted ? (
                    // Muted icon (speaker with X)
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-blanc"
                    >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                ) : (
                    // Unmuted icon (speaker with waves)
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-blanc"
                    >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                )}
            </button>
        </div>
    )
}
