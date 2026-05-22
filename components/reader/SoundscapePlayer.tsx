"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import type { SoundscapeProfile } from "@/lib/books";

const intensities = ["Low", "Medium", "Cinematic"] as const;

export function SoundscapePlayer({ profile }: { profile: SoundscapeProfile }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [intensity, setIntensity] = useState<(typeof intensities)[number]>("Low");
  const [volume, setVolume] = useState(42);

  return (
    <section
      className="rounded-lg border border-ink/10 bg-white/65 p-4 shadow-sm"
      aria-labelledby="soundscape-title"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-ember">Soundscape</p>
          <h2 id="soundscape-title" className="mt-1 font-serif text-2xl">
            {profile.name}
          </h2>
          <p className="mt-2 text-sm leading-6 text-ink/68">{profile.mood}</p>
        </div>
        <button
          className="focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-md bg-ink text-paper hover:bg-moss"
          type="button"
          onClick={() => setPlaying((value) => !value)}
          aria-label={playing ? "Pause soundscape" : "Play soundscape"}
        >
          {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {profile.layers.map((layer) => (
          <span
            key={layer}
            className="rounded-full bg-moss/10 px-2.5 py-1 text-xs font-medium text-moss"
          >
            {layer}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold" htmlFor="volume">
            Volume
          </label>
          <div className="flex items-center gap-3">
            <button
              className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-ink/12 hover:bg-paper"
              type="button"
              onClick={() => setMuted((value) => !value)}
              aria-label={muted ? "Unmute soundscape" : "Mute soundscape"}
            >
              {muted ? (
                <VolumeX size={17} aria-hidden="true" />
              ) : (
                <Volume2 size={17} aria-hidden="true" />
              )}
            </button>
            <input
              className="h-2 w-full accent-ember"
              id="volume"
              max="100"
              min="0"
              onChange={(event) => setVolume(Number(event.target.value))}
              type="range"
              value={muted ? 0 : volume}
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold">Intensity</p>
          <div className="grid grid-cols-3 overflow-hidden rounded-md border border-ink/12">
            {intensities.map((option) => (
              <button
                className={`focus-ring h-10 text-sm font-semibold ${
                  intensity === option ? "bg-ink text-paper" : "bg-white/50 text-ink hover:bg-paper"
                }`}
                key={option}
                onClick={() => setIntensity(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
